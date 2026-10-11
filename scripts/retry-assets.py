import pathlib,json,subprocess,concurrent.futures,urllib.parse,html
root=pathlib.Path(__file__).resolve().parents[1];p=root/'reference/asset-manifest.json';m=json.loads(p.read_text())
def run(u):
 url=urllib.parse.urlsplit(u);rel='assets/'+url.netloc+url.path;dest=root/rel;dest.parent.mkdir(parents=True,exist_ok=True)
 r=subprocess.run(['curl','-fL','--retry','2','--max-time','25','-sS',u,'-o',str(dest)],capture_output=True)
 return u,rel,r.returncode
with concurrent.futures.ThreadPoolExecutor(max_workers=7) as ex:
 for u,rel,code in ex.map(run,list(m['failures'])):
  print(code,u,flush=True)
  if code==0:m['assets'][u]=rel;m['failures'].pop(u)
for file in [root/'index.html',*root.glob('assets/**/*.css')]:
 s=file.read_text()
 for u,rel in m['assets'].items():
  for old in {u,html.escape(u,quote=True),u.replace('/','\\/')}:
   s=s.replace(old,'/'+rel)
 file.write_text(s)
p.write_text(json.dumps(m,indent=2))
