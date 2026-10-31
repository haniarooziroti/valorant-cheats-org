import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const productsPath = path.join(root, 'src/data/products.ts');
let s = fs.readFileSync(productsPath, 'utf8');

s = s
  .replace(/relatedBlogSlugs/g, 'relatedForumSlugs')
  .replace(/productRelatedBlogSlugs/g, 'productRelatedForumSlugs')
  .replace(/\/products\/mw4-cheats\//g, '/products/valorant-cheats/')
  .replace(/checkoutPath\('mw4'\)/g, "checkoutPath('valorant')")
  .replace(/MW4/g, 'Valorant')
  .replace(/Modern Warfare 4/g, 'Valorant')
  .replace(/Hajin DMZ/g, 'ranked stacks')
  .replace(/6v6/g, 'ranked')
  .replace(/Ground War/g, 'Premier')
  .replace(/dmz-loot/g, 'no-recoil')
  .replace(/DMZ Loot ESP/g, 'No Recoil Assist')
  .replace(/DMZ loot/g, 'No recoil')
  .replace(/DMZ /g, '')
  .replace(/from '\.\.\/config\/media';\n\nconst productBase/, "from '../config/media';\n\nconst productBase")
  .replace(/GAMEPLAY_FRAMES\.f(\d+)/g, (_, n) => {
    const map = {
      '01': 'GAMEPLAY_FRAMES.aimbot',
      '02': 'GAMEPLAY_FRAMES.aimbotAlt',
      '03': 'GAMEPLAY_FRAMES.esp',
      '04': 'GAMEPLAY_FRAMES.espAlt',
      '05': 'GAMEPLAY_FRAMES.trigger',
      '06': 'GAMEPLAY_FRAMES.triggerAlt',
      '07': 'GAMEPLAY_FRAMES.radar',
      '08': 'GAMEPLAY_FRAMES.radarAlt',
      '09': 'GAMEPLAY_FRAMES.noRecoil',
      '10': 'GAMEPLAY_FRAMES.noRecoilAlt',
      '11': 'GAMEPLAY_FRAMES.menu',
      '12': 'GAMEPLAY_FRAMES.menu',
    };
    return map[n] ?? 'GAMEPLAY_FRAMES.menu';
  });

s = s.replace(
  `export const productRelatedForumSlugs: Record<string, string[]> = {
  aimbot: ['mw4-aimbot-setup', 'mw4-cheat-risk', 'mw4-features'],
  esp: ['mw4-esp-setup', 'mw4-features', 'mw4-dmz-guide'],
  triggerbot: ['mw4-triggerbot', 'mw4-aimbot-setup', 'mw4-features'],
  radar: ['mw4-esp-setup', 'mw4-patch-day', 'mw4-features'],
  'no-recoil': ['mw4-dmz-guide', 'mw4-plans', 'mw4-features'],
};`,
  `export const productRelatedForumSlugs: Record<string, string[]> = {
  aimbot: ['aimbot-settings-smooth-level-killcam', 'soft-aim-vs-visible-aimbot', 'aimbot-fov-ranked-unrated'],
  esp: ['esp-box-style-unrated', 'wallhack-spike-colors', 'radar-haven-split'],
  triggerbot: ['triggerbot-delay-valorant', 'aimbot-settings-smooth-level-killcam', 'cheat-menu-hotkeys-ranked'],
  radar: ['radar-haven-split', 'esp-box-style-unrated', 'patch-day-module-status'],
  'no-recoil': ['no-recoil-spray-valorant', 'cheat-menu-hotkeys-ranked', 'external-vs-internal-valorant'],
};`,
);

s = s.replace(/import { GAMEPLAY_FRAMES } from '\.\.\/config\/media';/, "import { GAMEPLAY_FRAMES } from '../config/media';");

fs.writeFileSync(productsPath, s);

const reviewsPath = path.join(root, 'src/data/reviews.ts');
let r = fs.readFileSync(reviewsPath, 'utf8');
r = r
  .replace(/MW4/g, 'Valorant')
  .replace(/6v6/g, 'ranked')
  .replace(/DMZ/g, 'unrated')
  .replace(/Ground War/g, 'Premier')
  .replace(/Hajin/g, 'Premier')
  .replace(/mw4/g, 'valorant');
fs.writeFileSync(reviewsPath, r);

console.log('products + reviews patched');
