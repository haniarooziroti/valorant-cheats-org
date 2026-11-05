import fs from 'node:fs';

const urls = [
  ['dist/index.html', null],
  ['dist/products/valorant-cheats/index.html', null],
];

for (const [file] of urls) {
  if (!fs.existsSync(file)) {
    console.log(file, 'MISSING');
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const start = html.indexOf('data-site-header');
  const end = html.indexOf('</header>', start);
  const header = html.slice(start, end);
  const old = ['Overview', 'Module lineup', 'Written guides', 'Community threads', 'Verified feedback', 'Buyer questions', 'Contact help desk', 'Get access'].filter((s) =>
    header.includes(s),
  );
  const navLabels = [...header.matchAll(/data-nav-link[^>]*>[\s\S]*?\s+([A-Za-z][^<]{0,30}?)\s*<\/a>/g)].map((m) => m[1].trim());
  console.log('\n===', file, '===');
  console.log('Forbidden IN HEADER:', old.length ? old : 'none');
  console.log('Nav link texts:', navLabels.join(' | '));
  console.log('Try now in header:', header.includes('Try now'));
}
