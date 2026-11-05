import fs from 'node:fs';

const paths = process.argv.slice(2);
if (!paths.length) {
  console.error('Usage: node count-main-words.mjs /about/ /blog/ ...');
  process.exit(1);
}

function toFile(path) {
  if (path === '/') return 'dist/index.html';
  return `dist${path.replace(/\/$/, '')}/index.html`;
}

function extractMain(html) {
  const mainMatch = html.match(/<main\b[\s\S]*?<\/main>/i);
  return mainMatch ? mainMatch[0] : '';
}

function mainWords(html, { primaryOnly = false } = {}) {
  let s = extractMain(html);
  if (!s) return 0;
  s = s.replace(/<aside\b[\s\S]*?<\/aside>/gi, ' ');
  s = s.replace(/<nav\b[\s\S]*?<\/nav>/gi, ' ');
  if (primaryOnly) {
    s = s.replace(/class="[^"]*forum-comments[^"]*"[\s\S]*?<\/section>/gi, ' ');
    s = s.replace(/class="[^"]*blog-sidebar[^"]*"[\s\S]*?<\/aside>/gi, ' ');
    s = s.replace(/id="blog-grid"[\s\S]*?<\/div>/gi, ' ');
    s = s.replace(/class="[^"]*site-faq[^"]*"[\s\S]*?<\/section>/gi, ' ');
    s = s.replace(/class="[^"]*faq-page-section[^"]*"[\s\S]*?<\/section>/gi, ' ');
    s = s.replace(/class="[^"]*forum-related-card[^"]*"[\s\S]*?<\/section>/gi, ' ');
    s = s.replace(/class="[^"]*blog-buy-strip[^"]*"[\s\S]*?<\/aside>/gi, ' ');
  }
  s = s.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  s = s.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  s = s.replace(/<[^>]+>/g, ' ');
  s = s.replace(/\s+/g, ' ').trim();
  return s.split(/\s+/).filter(Boolean).length;
}

console.log('main\tprimary\tpath\tstatus');
for (const p of paths) {
  const html = fs.readFileSync(toFile(p), 'utf8');
  const wMain = mainWords(html);
  const wPrimary = mainWords(html, { primaryOnly: true });
  const thin = wMain < 300 ? 'THIN' : '';
  console.log(`${wMain}\t${wPrimary}\t${p}\t${thin}`);
}
