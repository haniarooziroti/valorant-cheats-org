import fs from 'node:fs';

const files = [
  'dist/index.html',
  'dist/products/valorant-cheats/index.html',
  'dist/products/index.html',
];

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log(file, 'MISSING');
    continue;
  }
  const h = fs.readFileSync(file, 'utf8');
  const start = h.indexOf('aria-label="Primary"');
  const chunk = start >= 0 ? h.slice(start, start + 2500) : '';
  const labels = [...chunk.matchAll(/data-nav-link[^>]*>[\s\S]*?>\s*([^<]+?)\s*<\/a>/g)].map((m) =>
    m[1].trim(),
  );
  console.log('\n---', file);
  console.log('OLD strings:', /Module lineup|Overview|Get access/.test(chunk));
  console.log('Labels:', labels.join(' | '));
  console.log('Try now:', chunk.includes('Try now'));
  console.log('Grid header:', h.includes('max-w-[88rem]'));
}
