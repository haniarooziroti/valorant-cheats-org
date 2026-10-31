import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function patch(file, pairs) {
  const p = path.join(root, file);
  let s = fs.readFileSync(p, 'utf8');
  for (const [from, to] of pairs) {
    s = s.split(from).join(to);
  }
  fs.writeFileSync(p, s);
}

patch('src/i18n/en.ts', [
  ["name: 'MW4 Cheat'", "name: 'Valorant Cheat'"],
  ["domain: 'mw4cheat.org'", "domain: 'valorant-cheat.org'"],
  [
    "title: 'MW4 Cheat — Aimbot, ESP & Wallhack for PC'",
    "title: 'Valorant Esp, Aimbot & Wallhack'",
  ],
  [
    'MW4 cheats for Modern Warfare 4 on PC: aimbot, player ESP, wallhack, radar, and DMZ loot tools. Setup guides, forum threads, and secure checkout on mw4cheat.org.',
    'Valorant cheats on PC with aimbot, ESP, wallhack, triggerbot, and radar tools. Browse modules, read player forums, and continue to secure checkout on valorant-cheat.org.',
  ],
  [
    `  nav: [
    { href: '/', label: 'Home' },
    { href: \`\${productBase}\`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/reviews/', label: 'Reviews' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],`,
    `  nav: [
    { href: '/', label: 'Home' },
    { href: \`\${productBase}\`, label: 'Products' },
    { href: '/forum/', label: 'Forums' },
    { href: '/reviews/', label: 'Reviews' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],`,
  ],
  ['Forum threads from MW4 players', 'Forums where Valorant players compare configs'],
  ['Real setup questions, aim tuning, ESP layouts, and DMZ routing', 'Aimbot tuning, ESP layouts, trigger timing, and checkout questions'],
  ['Open the forum', 'Browse forums'],
  ['Modern Warfare 4 — PC modules online', 'Valorant PC — modules online'],
  ['Built for 6v6 & DMZ', 'Built for ranked & unrated'],
  ['Modern Warfare 4 Cheat', 'Valorant on PC'],
  ['Clean overlays, tuned aim assist, and player ESP that stays readable in fast playlists', 'Tactical overlays, tuned aim assist, and agent ESP that stays readable in ranked and unrated'],
  ["modes: ['6v6', 'Ground War', 'Gunfight', 'Hajin DMZ']", "modes: ['Competitive', 'Unrated', 'Swiftplay', 'Premier']"],
  ['Modules that match how MW4 plays', 'Modules that match Valorant gunplay'],
  ['Aim assist, player ESP, radar, and DMZ loot layers tuned for PC multiplayer playlists.', 'Valorant aimbot, ESP wallhack, radar hack, triggerbot, and no recoil helpers tuned for PC.'],
  ['mw4 aimbot', 'valorant aimbot'],
  ['mw4 esp', 'valorant esp'],
  ['mw4 radar', 'valorant radar hack'],
  ['mw4 triggerbot', 'valorant triggerbot'],
  ['DMZ loot layer', 'No recoil assist'],
  ['Routing in Hajin', 'Spray control'],
  ['Contracts, extracts, cash, and vehicles for DMZ—automatically off when you queue 6v6.', 'Light recoil control for Vandal and Phantom without killing your spray muscle memory.'],
  ['mw4 dmz', 'valorant no recoil'],
  ['loot esp', 'spray control'],
  ['contracts', 'valorant hacks'],
  ['mw4 config', 'valorant cheat menu'],
  ['MW4 playlists move fast', 'Valorant patches move fast'],
  ['MW4 Cheat', 'Valorant Cheat'],
  ['Typical listing', 'Random reseller page'],
  ['Separate starter profiles for 6v6 and Hajin DMZ', 'Separate starter profiles for ranked and unrated'],
  ['DMZ loot filters', 'ESP clutter'],
  ['DMZ performance', 'ESP readability'],
  ['DMZ loot modules', 'triggerbot timing'],
  ['Dedicated slots for 6v6 and DMZ', 'Dedicated slots for ranked and unrated'],
  ['MW4 on PC.', 'Valorant on PC.'],
  ['MW4 PC build', 'Valorant PC client'],
  ['MW4 cheat suite', 'Valorant cheat suite'],
  ['DMZ loot, and misc tools.', 'no recoil helpers, and misc tools.'],
  ['DMZ loot layer', 'No recoil layer'],
  ['Modern Warfare 4 cheat modules', 'Valorant cheat modules'],
  ['MW4 aimbot, ESP wallhack, triggerbot, radar, and DMZ loot tools', 'Valorant aimbot, ESP wallhack, triggerbot, radar hack, and no recoil tools'],
  ['MW4 Aimbot', 'Valorant Aimbot'],
  ['DMZ loot ESP', 'No recoil module'],
  ['Hajin DMZ', 'Ranked stacks'],
  ['dmz-loot/', 'no-recoil/'],
  ['support@mw4cheat.org', 'support@valorant-cheat.org'],
  ['Modern Warfare 4 PC modules', 'Valorant PC modules'],
  ["href: '/blog/', label: 'MW4 cheat blog', ariaLabel: 'Blog' }", "href: '/forum/', label: 'Valorant cheat forums', ariaLabel: 'Forums' }"],
  ['Community forum', 'Forums'],
  ['homeAria: \'MW4 Cheat home\'', "homeAria: 'Valorant Cheat home'"],
]);

patch('public/robots.txt', [
  ['https://mw4cheat.org/sitemap.xml', 'https://valorant-cheat.org/sitemap.xml'],
]);

console.log('Copy patches applied.');
