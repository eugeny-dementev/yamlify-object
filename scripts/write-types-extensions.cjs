const fs = require('fs');
const path = require('path');

const typesDir = path.join(__dirname, '..', 'dist', 'types');

if (!fs.existsSync(typesDir)) {
  throw new Error(`Types directory not found: ${typesDir}`);
}

const entries = fs.readdirSync(typesDir, { withFileTypes: true });

for (const entry of entries) {
  if (!entry.isFile() || !entry.name.endsWith('.d.ts')) {
    continue;
  }

  const base = entry.name.slice(0, -'.d.ts'.length);
  const sourcePath = path.join(typesDir, entry.name);
  const source = fs.readFileSync(sourcePath, 'utf8');

  fs.writeFileSync(path.join(typesDir, `${base}.d.mts`), source, 'utf8');
  fs.writeFileSync(path.join(typesDir, `${base}.d.cts`), source, 'utf8');
}
