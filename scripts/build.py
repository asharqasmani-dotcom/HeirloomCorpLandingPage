"""Build a deployable static directory without third-party dependencies."""
from pathlib import Path
import shutil
root = Path(__file__).resolve().parents[1]
out = root / 'dist'
out.mkdir(exist_ok=True)
shutil.copy2(root / 'index.html', out / 'index.html')
for name in ('assets', 'styles'):
    shutil.copytree(root / name, out / name, dirs_exist_ok=True)
(out / 'scripts').mkdir(exist_ok=True)
shutil.copy2(root / 'scripts/local.js', out / 'scripts/local.js')
print(f'Built {out}')
