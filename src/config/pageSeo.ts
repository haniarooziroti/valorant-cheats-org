/** Max ~920px in SERP preview — keep meta descriptions ≤152 characters. */
export const META_DESCRIPTION_MAX = 152;

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'MW4 Cheat — Aimbot, ESP & Wallhack for PC',
    description:
      'MW4 cheats for Modern Warfare 4 PC: aimbot tuning, player ESP, wallhack, radar and Hajin DMZ loot ESP. Guides, reviews and checkout.',
  },
  '/products/mw4-cheats/': {
    title: 'Modern Warfare 4 Cheats — Full Feature List',
    description:
      'Compare MW4 aim assist, player ESP, triggerbot, radar and DMZ loot modules for Modern Warfare 4 PC before checkout.',
  },
  '/products/mw4-cheats/aimbot/': {
    title: 'Mw4 Aimbot – Module | MW4 Cheat',
    description:
      'MW4 aimbot module: FOV circle, smoothing and visibility checks for Modern Warfare 4 PC multiplayer playlists.',
  },
  '/products/mw4-cheats/esp/': {
    title: 'MW4 ESP & Wallhack — Player Boxes & Skeleton',
    description:
      'Player ESP and wallhack overlays for MW4 PC: health, plates, distance and skeleton layouts for fast 6v6 fights.',
  },
  '/products/mw4-cheats/triggerbot/': {
    title: 'Mw4 Triggerbot – Trigger module fires when your | MW4 Cheat',
    description:
      'MW4 triggerbot fires when your crosshair is on target, with delay tuning and shared visibility rules on PC.',
  },
  '/products/mw4-cheats/radar/': {
    title: 'Radar – and range limits for Ground War and large playlists',
    description:
      '2D radar for Modern Warfare 4 PC with zoom, range caps and squad markers for Ground War and large playlists.',
  },
  '/products/mw4-cheats/dmz-loot/': {
    title: 'MW4 DMZ Loot ESP — Contracts & Extracts',
    description:
      'Hajin DMZ loot ESP for cash, contracts, vehicles and extracts on MW4 PC—layer stays off in core 6v6 playlists.',
  },
  '/blog/': {
    title: 'MW4 Cheat Blog — Aimbot, ESP & Wallhack Guides',
    description:
      'MW4 cheat blog: aimbot tuning, player ESP, wallhack setup, DMZ loot guides, loader fixes and patch-day checklists.',
  },
  '/reviews/': {
    title: 'MW4 Cheat Reviews — Aimbot & ESP Player Feedback',
    description:
      'MW4 cheat reviews from PC players on aimbot, ESP, wallhack, loader setup and support—sort by date or rating.',
  },
  '/status/': {
    title: 'MW4 Module Status — Online After Patches',
    description:
      'Live MW4 module status for aimbot, ESP, radar and DMZ loot on PC. Check before you launch after a patch.',
  },
  '/forum/': {
    title: 'MW4 Cheats Forum — Setup & Feature Talk',
    description:
      'MW4 cheats forum: aimbot tuning, ESP layouts, DMZ configs and checkout questions from Modern Warfare 4 PC players.',
  },
  '/faq/': {
    title: 'MW4 Cheat FAQ — PC Setup & Access',
    description:
      'Faq: MW4 cheat compatibility, loader steps, pricing and account risk before you buy access on mw4cheat.org.',
  },
  '/terms/': {
    title: 'Terms & Conditions | MW4 Cheat',
    description: 'Terms for MW4 cheat access sold through mw4cheat.org: license use, checkout, refunds and account risk.',
  },
  '/privacy/': {
    title: 'Privacy – How mw4cheat | MW4 Cheat',
    description:
      'Privacy policy for mw4cheat.org: analytics, cookies and contact data when you browse or email support.',
  },
  '/about/': {
    title: 'Forum – About MW4 Cheat | MW4 Cheat',
    description:
      'About mw4cheat.org: Modern Warfare 4 PC modules, community threads, blog guides and support paths.',
  },
  '/support/': {
    title: 'MW4 Cheat Support — Loader & Checkout Help',
    description:
      'Support for MW4 loader setup, configs and checkout on PC—aimbot, ESP, radar and DMZ modules on mw4cheat.org.',
  },
  '/go/mw4/': {
    title: 'Checkout – Redirecting | MW4 Cheat',
    description:
      'Checkout for MW4 license access: compare aimbot, ESP, radar and DMZ modules, then continue to secure payment.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
