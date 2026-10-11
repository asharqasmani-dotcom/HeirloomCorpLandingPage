"""Localize the saved reference and all directly referenced visual/runtime assets."""
import re, json, hashlib, concurrent.futures, urllib.request, urllib.parse, pathlib, html
ROOT=pathlib.Path(__file__).resolve().parents[1]
BASE='https://dit.nomadenstudio.com/arvon/'
source=(ROOT/'reference/homepage-original.html').read_text()
asset_re=re.compile(r'https?://[^\s<>"\'\\)]+')
exts=('.css','.js','.jpg','.jpeg','.png','.webp','.svg','.gif','.woff','.woff2','.ttf','.eot','.mp4')
records={}; failed={}
def local(u):
 p=urllib.parse.urlsplit(u); path=p.path
 if p.netloc=='fonts.googleapis.com': path='/'+hashlib.sha1(u.encode()).hexdigest()[:12]+'.css'
 return 'assets/'+p.netloc+path

def fetch(u):
 dest=ROOT/local(u)
 try:
  if not dest.exists():
   req=urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0'})
   with urllib.request.urlopen(req,timeout=45) as r: data=r.read()
   dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(data)
  return u,dest,None
 except Exception as e:return u,dest,str(e)

def urls(s):
 return {html.unescape(x).rstrip(';') for x in asset_re.findall(s.replace('\\/','/')) if urllib.parse.urlsplit(html.unescape(x)).path.lower().endswith(exts) or 'fonts.googleapis.com/css' in x}
queue=urls(source)
for batch in range(5):
 if not queue:break
 more=set()
 with concurrent.futures.ThreadPoolExecutor(max_workers=14) as pool:
  for u,p,err in pool.map(fetch,queue):
   if err:failed[u]=err;continue
   records[u]=local(u)
   if p.suffix=='.css':
    s=p.read_text();more.update(urls(s))
    for raw in re.findall(r'url\(\s*[\'\"]?([^\)\'\"]+)',s):
     if not raw.startswith(('data:','#')):more.add(urllib.parse.urljoin(u,raw))
 print(f'Batch {batch+1}: {len(records)} assets, {len(failed)} failures',flush=True)
 queue=more-set(records)-set(failed)
for u,path in records.items():
 p=ROOT/path
 if p.suffix=='.css':
  s=p.read_text()
  def repl(m):
   raw=m.group(1);full=urllib.parse.urljoin(u,raw)
   return 'url("/'+records[full]+'")' if full in records else m.group(0)
  s=re.sub(r'url\(\s*[\'\"]?([^\)\'\"]+)[\'\"]?\s*\)',repl,s)
  p.write_text(s)
for u,path in sorted(records.items(),key=lambda x:-len(x[0])):
 for old in {u,html.escape(u,quote=True),u.replace('/','\\/')}:
  source=source.replace(old,'/'+path)
# Preserve runtime chunk URLs locally.
source=source.replace('https:\\/\\/dit.nomadenstudio.com\\/arvon\\/wp-content\\/plugins\\/elementor\\/assets\\/','/assets/dit.nomadenstudio.com/arvon/wp-content/plugins/elementor/assets/')
# Remove WordPress-only discovery metadata and remote form submission scripts.
source=re.sub(r'<link\b[^>]*(?:rel=[\'\"](?:alternate|pingback|https://api.w.org/|EditURI|shortlink|canonical|dns-prefetch)[\'\"])[^>]*>','',source)
source=re.sub(r'<script\b[^>]*id=[\'\"](?:google-recaptcha-js|rform-script-js|rform-recaptcha-script-js|template-kit-export-js)[\'\"][^>]*>.*?</script>','',source,flags=re.S)
source=source.replace('</head>','<link rel="stylesheet" href="/styles/custom.css">\n</head>')
source=source.replace('</body>','<script src="/scripts/local.js"></script>\n</body>')
(ROOT/'index.html').write_text(source)
(ROOT/'reference/asset-manifest.json').write_text(json.dumps({'assets':records,'failures':failed},indent=2))
print(json.dumps(failed,indent=2))
