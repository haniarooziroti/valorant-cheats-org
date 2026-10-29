import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(fileURLToPath(new URL('.', import.meta.url)), '..');
const out = path.join(root, 'src', 'data', 'reviews.ts');

const names = [
  'lanehold', 'rusty_irons', 'mara_pdx', 'ghostsheet', 'hex_wrench', 'newpc_build', 'skim_milk', 'rio_shard',
  'clicky_boi', 'northwind', 'roadtrip', 'extract_plz', 'tallgrass', 'vector_n', 'budget_sprint', 'longhaul',
  'recoil_king', 'steady_aim', 'clip_farmer', 'obs_matt', 'dmz_rat', 'groundwar_ig', 'smg_main', 'ar_grind',
  'win11_laptop', 'desktop_rtx', 'patch_waiter', 'fov_monk', 'stream_guy', 'salty_rank', 'quietscope', 'duffelbag',
];

const roles = [
  '6v6 grinder', 'Ground War', 'Hajin DMZ', 'Win11 PC', 'stream nights', 'duo queue', 'SMG main', 'marksman',
  'new buyer', 'lifetime key', 'monthly test', 'overlay nerd', 'ranked', 'pub player',
];

const bodies = [
  'ESP boxes stayed readable on small maps. I keep aim on a key and only flick it for close fights.',
  'Support replied with my order email in the subject and fixed a loader path in one message.',
  'Stream-proof toggle stayed off my OBS test. Recorded a clip first like the forum said.',
  'Monthly felt right for a trial week. Lifetime after I survived two patch notes without drama.',
  'Updating sat a few days after a patch. Played legit until Ready flipped. Annoying but normal.',
  'Menu took maybe ten minutes. Hotkeys matched what I saw in-game.',
  'Not magic. Wide FOV indoors looks dumb. Dialed it down and it is usable now.',
  'Works, but I wish the first guide mentioned overlay conflicts. Lost an hour there.',
  'I run aim soft and lean on player ESP for flanks. Feels closer to info than rage.',
  'No stutter after I closed GeForce overlay. Would buy monthly again before lifetime.',
  'No recoil at medium strength feels normal. Max looked weird on killcam so I backed off.',
  'Compared to random Discord sellers, having clear MW4 product pages is less sketchy.',
  'DMZ loot filters tank FPS if you enable everything. Contracts + cash only for me.',
  'Distance cap at 80m saved my eyes on Nuketown-style lanes.',
  'Secure boot gave me one reboot loop. Disabling fast startup fixed it—not sure if coincidence.',
  'Lifetime made sense once ranked felt stable for a week on my main.',
  'Wish status notes updated faster on patch day, but support answered same night.',
  'Buddy got scammed elsewhere. Key landed here same hour at least.',
  'Visibility checks on aim so I do not track through smoke the wrong way.',
  'Defender ate the zip twice before exclusions. Product fine after.',
];

const reviews = [];
let id = 0;
for (let i = 0; i < 105; i++) {
  const stars = i % 11 === 0 ? 2 : i % 7 === 0 ? 3 : i % 5 === 0 ? 4 : 5;
  const date = new Date(2025, 9 - Math.floor(i / 12), 28 - (i % 27));
  reviews.push({
    id: `r${id++}`,
    author: names[i % names.length] + (i > 30 ? `_${Math.floor(i / 31)}` : ''),
    role: roles[i % roles.length],
    stars,
    date: date.toISOString().slice(0, 10),
    body: bodies[i % bodies.length],
  });
}

const avg = (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1);

const file = `export interface SiteReview {
  id: string;
  author: string;
  role: string;
  stars: number;
  date: string;
  body: string;
}

export const reviewSummary = {
  average: ${avg},
  count: ${reviews.length},
  label: 'Verified buyer',
};

export const siteReviews: SiteReview[] = ${JSON.stringify(reviews, null, 2)};
`;

fs.writeFileSync(out, file, 'utf8');
console.log('Wrote', reviews.length, 'reviews');
