/** Fetch live pages and assert header nav matches PRIMARY_NAV (for local dev/preview). */
const base = process.argv[2] || 'http://127.0.0.1:3000';
const paths = ['/', '/products/valorant-cheats/'];

const required = ['Home', 'Products', 'Blogs', 'Forums', 'Reviews', 'FAQ', 'Support', 'Try now'];
const forbidden = [
  'Module lineup',
  'Written guides',
  'Community threads',
  'Verified feedback',
  'Buyer questions',
  'Contact help desk',
  'Overview',
];

function extractHeader(html) {
  const i = html.indexOf('data-site-header');
  if (i < 0) return '';
  const end = html.indexOf('</header>', i);
  return end >= 0 ? html.slice(i, end) : html.slice(i, i + 8000);
}

let failed = false;

for (const path of paths) {
  const url = `${base.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
  const res = await fetch(url);
  const html = await res.text();
  const header = extractHeader(html);
  console.log(`\n${url} [${res.status}]`);
  if (!header) {
    console.log('  FAIL: no data-site-header');
    failed = true;
    continue;
  }
  for (const f of forbidden) {
    if (header.includes(f)) {
      console.log(`  FAIL: forbidden "${f}" in header`);
      failed = true;
    }
  }
  if (header.includes('Get access') && header.includes('slide-reveal-btn')) {
    console.log('  FAIL: Get access in header CTA');
    failed = true;
  }
  for (const r of required) {
    if (!header.includes(r)) {
      console.log(`  FAIL: missing "${r}" in header`);
      failed = true;
    }
  }
  const navOnly = header.split('aria-label="Mobile"')[0] ?? header;
  const labels = [...navOnly.matchAll(/data-nav-link[\s\S]*?>\s*([A-Za-z][^<]{0,20})\s*<\/a>/g)].map((m) => m[1].trim());
  console.log('  Desktop nav labels:', labels.slice(0, 7).join(' | '));
  console.log('  OK' + (failed ? '' : ' — header matches spec'));
}

process.exit(failed ? 1 : 0);
