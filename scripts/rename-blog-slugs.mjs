import fs from 'fs';
import path from 'path';

const map = {
  'how-to-buy-mw4-cheats-2026': 'buy-mw4-cheats',
  'mw4-cheat-features-overview': 'mw4-features',
  'mw4-monthly-vs-lifetime': 'mw4-plans',
  'mw4-aimbot-settings-guide': 'mw4-aimbot-setup',
  'mw4-esp-radar-6v6-setup': 'mw4-esp-setup',
  'hajin-dmz-loot-guide': 'mw4-dmz-guide',
  'mw4-triggerbot-and-no-recoil': 'mw4-triggerbot',
  'mw4-system-requirements-setup': 'mw4-requirements',
  'mw4-loader-not-working': 'mw4-loader-fix',
  'mw4-patch-day-checklist': 'mw4-patch-day',
  'mw4-cheat-risk-explained': 'mw4-cheat-risk',
};

const dir = path.join('src', 'content', 'blog');

for (const [oldSlug, newSlug] of Object.entries(map)) {
  const oldPath = path.join(dir, `${oldSlug}.md`);
  if (!fs.existsSync(oldPath)) {
    console.log('skip missing', oldSlug);
    continue;
  }
  let body = fs.readFileSync(oldPath, 'utf8');
  for (const [o, n] of Object.entries(map)) {
    body = body.replaceAll(`/blog/${o}/`, `/blog/${n}/`);
    body = body.replaceAll(`"${o}"`, `"${n}"`);
  }
  const newPath = path.join(dir, `${newSlug}.md`);
  fs.writeFileSync(newPath, body);
  if (oldPath !== newPath) fs.unlinkSync(oldPath);
  console.log(`${oldSlug} -> ${newSlug}`);
}
