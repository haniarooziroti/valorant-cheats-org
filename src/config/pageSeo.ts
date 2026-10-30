/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'MW4 Cheat — Aimbot, ESP & Wallhack for PC',
    description:
      'Download-ready MW4 cheats for Modern Warfare 4 PC: aimbot tuning, player ESP, wallhack overlays, radar, and Hajin DMZ loot ESP. Guides, reviews, and checkout.',
  },
  '/products/mw4-cheats/': {
    title: 'Modern Warfare 4 Cheats — Full Feature List',
    description:
      'MW4 cheat modules for aim assist, ESP, triggerbot, radar, and DMZ loot layers—compare options before checkout on mw4cheat.org.',
  },
  '/products/mw4-cheats/aimbot/': {
    title: 'Mw4 Aimbot – Module | MW4 Cheat',
    description:
      'Mw4 Aimbot: Precision aim assist for Modern Warfare 4 PC multiplayer with circle FOV, smoothing, and visibility checks.',
  },
  '/products/mw4-cheats/esp/': {
    title: 'MW4 ESP & Wallhack — Player Boxes & Skeleton',
    description:
      'Player ESP for Modern Warfare 4 with health, armor plates, distance, and skeleton overlay—readable layouts for fast playlists.',
  },
  '/products/mw4-cheats/triggerbot/': {
    title: 'Mw4 Triggerbot – Trigger module fires when your | MW4 Cheat',
    description:
      'Mw4 Triggerbot: Trigger module fires when your crosshair is already on an operator, with delay tuning and shared visibility checks.',
  },
  '/products/mw4-cheats/radar/': {
    title: 'Radar – and range limits for Ground War and large playlists',
    description:
      'Compact 2D radar for Modern Warfare 4 with zoom, range caps, and squad-friendly markers for Ground War rotations.',
  },
  '/products/mw4-cheats/dmz-loot/': {
    title: 'MW4 DMZ Loot ESP — Contracts & Extracts',
    description:
      'Dmz Loot: Loot ESP for Hajin DMZ: cash, bags, armor, contracts, vehicles, and extract points—with the layer off in 6v6.',
  },
  '/blog/': {
    title: 'MW4 Cheat Blog — Aimbot, ESP & Wallhack Guides',
    description:
      'Blog: Search and filter MW4 cheat guides: aimbot tuning, player ESP, wallhack setup, DMZ loot, checkout, patch-day status, and loader fixes for Modern Warfare.',
  },
  '/reviews/': {
    title: 'MW4 Cheat Reviews — Aimbot & ESP Player Feedback',
    description:
      'Read MW4 cheat reviews on aimbot, ESP, wallhack, triggerbot, loader setup, and support from verified Modern Warfare 4 PC players. Sort by date or star rating.',
  },
  '/status/': {
    title: 'MW4 Module Status — Online After Patches',
    description:
      'Live Modern Warfare 4 cheat module status for aimbot, ESP, radar, and DMZ loot on PC. Check before you launch after a game patch or Windows update.',
  },
  '/forum/': {
    title: 'MW4 Cheats Forum — Setup & Feature Talk',
    description:
      'Mw4 Cheats Forum: Community threads on MW4 aimbot tuning, ESP layouts, DMZ configs, and checkout questions from PC players.',
  },
  '/faq/': {
    title: 'MW4 Cheat FAQ — PC Setup & Access',
    description:
      'Faq: Answers on MW4 cheat compatibility, loader steps, pricing, and account risk before you buy access.',
  },
  '/terms/': {
    title: 'Terms & Conditions | MW4 Cheat',
    description: 'Purchase terms, license use, and refund policy for MW4 cheat access sold through mw4cheat.org.',
  },
  '/privacy/': {
    title: 'Privacy – How mw4cheat | MW4 Cheat',
    description:
      'Privacy: How mw4cheat.org uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'Forum – About MW4 Cheat | MW4 Cheat',
    description:
      'What mw4cheat.org publishes about Modern Warfare 4 PC cheat modules, community forum threads, blog guides, and support paths.',
  },
  '/support/': {
    title: 'MW4 Cheat Support — Loader & Checkout Help',
    description:
      'Support: Get help with MW4 loader setup, configs, and secure checkout for Modern Warfare 4 aimbot, ESP, and DMZ modules on PC.',
  },
  '/go/mw4/': {
    title: 'Checkout – Redirecting | MW4 Cheat',
    description:
      'Checkout: Secure MW4 license purchase on mw4cheat.org—compare aimbot, ESP, radar, and DMZ modules, then continue to partner checkout for delivery.',
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
