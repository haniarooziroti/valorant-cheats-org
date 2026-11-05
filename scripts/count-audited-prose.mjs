import fs from 'node:fs';

const paths = [
  '/',
  '/about/',
  '/blog/',
  '/blog/buy-valorant-cheats/',
  '/blog/valorant-agent-utility-guide/',
  '/blog/valorant-aimbot-setup/',
  '/faq/',
  '/forum/',
  '/forum/aimbot-settings-smooth-level-killcam/',
  '/forum/monthly-vs-lifetime-valorant/',
];

function toFile(path) {
  if (path === '/') return 'dist/index.html';
  return `dist${path.replace(/\/$/, '')}/index.html`;
}

function wordsFrom(html) {
  return (chunk) => {
    if (!chunk) return 0;
    let s = chunk;
    s = s.replace(/<script[\s\S]*?<\/script>/gi, ' ');
    s = s.replace(/<[^>]+>/g, ' ');
    s = s.replace(/\s+/g, ' ').trim();
    return s.split(/\s+/).filter(Boolean).length;
  };
}

for (const p of paths) {
  const html = fs.readFileSync(toFile(p), 'utf8');
  const w = wordsFrom(html);
  const main = html.match(/<main\b[\s\S]*?<\/main>/i);
  let mainHtml = main ? main[0] : '';
  mainHtml = mainHtml.replace(/<aside\b[\s\S]*?<\/aside>/gi, ' ');

  const prose = html.match(
    /class="[^"]*blog-article__prose[^"]*"[\s\S]*?(?=<aside class="blog-post-cta)/i,
  );
  const forumCopy = html.match(
    /class="forum-detail-copy"[\s\S]*?(?=<div class="forum-post-actions)/i,
  );
  const legalProse = html.match(/class="[^"]*mt-10 max-w-none[^"]*"[\s\S]*?(?=<div class="mt-12 flex flex-wrap)/i);

  const counts = {
    main: w(mainHtml),
    blogProse: w(prose?.[0]),
    forumCopy: w(forumCopy?.[0]),
    legalProse: w(legalProse?.[0]),
  };
  const thin = counts.main < 300 ? 'THIN' : '';
  console.log(JSON.stringify({ path: p, ...counts, thin }));
}
