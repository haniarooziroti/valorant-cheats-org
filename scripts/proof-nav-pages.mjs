/** Curl key routes and assert header nav (for npm start on :3000). */
const base = process.argv[2] || 'http://127.0.0.1:3000';
const paths = ['/', '/blog/', '/reviews/', '/faq/', '/support/'];

const forbiddenHeader = [
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
  return end >= 0 ? html.slice(i, end) : html.slice(i, i + 12000);
}

function headerHasBadCta(header) {
  if (header.includes('Get access')) return true;
  return header.includes('slide-reveal-btn') && !header.includes('Try now');
}

let failed = false;

console.log(`Base URL: ${base}\n`);

for (const path of paths) {
  const url = `${base.replace(/\/$/, '')}${path}`;
  const res = await fetch(url);
  const html = await res.text();
  const header = extractHeader(html);
  const bodyHasGetAccess = html.includes('Get access');
  const headerForbidden = forbiddenHeader.filter((s) => header.includes(s));
  const headerBadCta = headerHasBadCta(header);
  const ok =
    res.ok &&
    header.includes('Forums') &&
    header.includes('Support') &&
    header.includes('Try now') &&
    headerForbidden.length === 0 &&
    !headerBadCta;

  console.log(`${path} [${res.status}]`);
  console.log(`  Forums+Support in header: ${header.includes('Forums') && header.includes('Support')}`);
  console.log(`  Try now in header: ${header.includes('Try now')}`);
  console.log(`  Forbidden in header: ${headerForbidden.length ? headerForbidden.join(', ') : 'none'}`);
  console.log(`  Bad header CTA: ${headerBadCta}`);
  console.log(`  Get access anywhere on page (hero/buttons OK): ${bodyHasGetAccess}`);
  console.log(`  RESULT: ${ok ? 'PASS' : 'FAIL'}\n`);
  if (!ok) failed = true;
}

process.exit(failed ? 1 : 0);
