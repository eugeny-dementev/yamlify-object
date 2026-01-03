const fs = require('fs');
const path = require('path');

const entries = [
  { dir: path.join('dist', 'esm'), type: 'module' },
  { dir: path.join('dist', 'cjs'), type: 'commonjs' },
];

for (const entry of entries) {
  fs.mkdirSync(entry.dir, { recursive: true });
  fs.writeFileSync(
    path.join(entry.dir, 'package.json'),
    JSON.stringify({ type: entry.type }, null, 2) + '\n',
    'utf8',
  );
}
