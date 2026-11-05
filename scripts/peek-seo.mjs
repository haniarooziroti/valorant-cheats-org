import fs from 'node:fs';

const checks = [
  ['home', 'dist/index.html'],
  ['about', 'dist/about/index.html'],
  ['buy', 'dist/blog/buy-valorant-cheats/index.html'],
  ['aimbot', 'dist/blog/valorant-aimbot-setup/index.html'],
  ['monthly', 'dist/forum/monthly-vs-lifetime-valorant/index.html'],
];

for (const [name, path] of checks) {
  const h = fs.readFileSync(path, 'utf8');
  const title = (h.match(/<title>([^<]*)<\/title>/) || [])[1]?.replace(/&amp;/g, '&') || '';
  const desc = (h.match(/name="description" content="([^"]*)"/) || [])[1] || '';
  const h1 = (h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]
    ?.replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  console.log(`${name}: title(${title.length})=${title}`);
  console.log(`  desc(${desc.length})`);
  console.log(`  h1=${h1}`);
}
