import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const indexPath = resolve('dist/index.html');
const fallbackPath = resolve('dist/404.html');

if (existsSync(indexPath)) {
  copyFileSync(indexPath, fallbackPath);
}

writeFileSync(resolve('dist/.nojekyll'), '');
