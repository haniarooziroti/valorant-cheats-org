/**
 * Spread publish dates for blog markdown, forum thread ages, and review dates.
 * Run: node scripts/spread-content-dates.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();

const BLOG_DATES = {
  'valorant-cheat-risk.md': '2026-09-14',
  'valorant-patch-day.md': '2026-06-22',
  'valorant-loader-fix.md': '2026-04-08',
  'valorant-requirements.md': '2026-01-17',
  'valorant-triggerbot.md': '2025-10-29',
  'valorant-agent-utility-guide.md': '2025-08-06',
  'valorant-esp-setup.md': '2025-05-15',
  'valorant-aimbot-setup.md': '2025-02-20',
  'valorant-plans.md': '2024-11-30',
  'valorant-features.md': '2024-09-05',
  'buy-valorant-cheats.md': '2024-06-12',
};

const blogDir = path.join(root, 'src/content/blog');
for (const [file, publishDate] of Object.entries(BLOG_DATES)) {
  const filePath = path.join(blogDir, file);
  if (!fs.existsSync(filePath)) continue;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  data.publishDate = publishDate;
  fs.writeFileSync(filePath, matter.stringify(content, data), 'utf8');
  console.log('blog', file, publishDate);
}

const FORUM_DATES = [
  'Sep 14, 2026',
  'Jul 28, 2026',
  'Jun 3, 2026',
  'Apr 18, 2026',
  'Mar 5, 2026',
  'Jan 20, 2026',
  'Dec 8, 2025',
  'Oct 22, 2025',
  'Aug 14, 2025',
  'Jun 30, 2025',
  'May 2, 2025',
  'Mar 16, 2025',
  'Jan 28, 2025',
  'Nov 9, 2024',
];

const forumPath = path.join(root, 'src/data/forum.ts');
let forumSrc = fs.readFileSync(forumPath, 'utf8');
let fi = 0;
forumSrc = forumSrc.replace(/(\n    age: )'[^']+',(\n    upvotes:)/g, (match, a, b) => {
  if (fi >= FORUM_DATES.length) return match;
  const next = `${a}'${FORUM_DATES[fi]}',${b}`;
  fi += 1;
  return next;
});
fs.writeFileSync(forumPath, forumSrc, 'utf8');
console.log('forum threads dated:', fi);

const reviewsPath = path.join(root, 'src/data/reviews.ts');
let reviewsSrc = fs.readFileSync(reviewsPath, 'utf8');
const start = new Date('2026-09-01T12:00:00Z');
let ri = 0;
reviewsSrc = reviewsSrc.replace(/"date": "(\d{4}-\d{2}-\d{2})"/g, () => {
  const d = new Date(start);
  d.setUTCDate(d.getUTCDate() - ri * 21);
  ri += 1;
  return `"date": "${d.toISOString().slice(0, 10)}"`;
});
fs.writeFileSync(reviewsPath, reviewsSrc, 'utf8');
console.log('review dates updated:', ri);

console.log('Done.');
