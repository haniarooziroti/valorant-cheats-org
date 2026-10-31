/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Valorant Esp, Aimbot & Wallhack',
    description:
      'Valorant cheats with ESP, aimbot, and wallhack tools for PC ranked and unrated. Compare modules, read forums, and continue to secure checkout.',
  },
  '/products/valorant-cheats/': {
    title: 'Valorant Cheats — Aimbot, ESP & Wallhack Modules',
    description:
      'Valorant cheat modules for aimbot, ESP wallhack, triggerbot, radar hack, and no recoil—compare features before checkout.',
  },
  '/products/valorant-cheats/aimbot/': {
    title: 'Valorant Aimbot — Soft Aim & FOV Tuning',
    description:
      'Valorant aimbot with FOV circle, smoothing, and visibility checks for ranked duels—transactional module details and checkout access.',
  },
  '/products/valorant-cheats/esp/': {
    title: 'Valorant ESP & Wallhack — Agent Boxes',
    description:
      'Valorant ESP and wallhack overlays with health, distance, and skeleton options tuned for readable comp games.',
  },
  '/products/valorant-cheats/triggerbot/': {
    title: 'Valorant Triggerbot — Delay & Hold Key',
    description:
      'Valorant triggerbot fires when your crosshair is on target, with ms delay tuning and shared wall checks.',
  },
  '/products/valorant-cheats/radar/': {
    title: 'Valorant Radar Hack — 2D Awareness',
    description:
      'Valorant radar hack with zoom, range caps, and markers synced to ESP distance on Haven, Bind, and Ascent.',
  },
  '/products/valorant-cheats/no-recoil/': {
    title: 'Valorant No Recoil — Spray Control Assist',
    description:
      'Valorant no recoil helpers for Vandal and Phantom bursts—light spray control that pairs with aimbot modules.',
  },
  '/reviews/': {
    title: 'Valorant Cheat Reviews — 100+ Player Feedback',
    description:
      'Valorant cheat reviews on aimbot, ESP, wallhack, triggerbot, loader setup, and support from verified PC players.',
  },
  '/status/': {
    title: 'Valorant Cheat Status — Online After Patches',
    description:
      'Live Valorant cheat module status for aimbot, ESP, and radar on PC. Check before ranked after a Riot patch.',
  },
  '/forum/': {
    title: 'Valorant Cheat Forums — Setup & Feature Talk',
    description:
      'Valorant cheat forums with aimbot settings, ESP layouts, triggerbot delay, and checkout threads from PC players.',
  },
  '/blog/': {
    title: 'Valorant Cheat Blog — Aimbot, ESP & Wallhack Guides',
    description:
      'Search and filter Valorant cheat guides: aimbot tuning, player ESP, wallhack setup, Vanguard errors, checkout, patch-day status and loader fixes.',
  },
  '/faq/': {
    title: 'Valorant Cheat FAQ — PC Setup & Access',
    description:
      'Valorant cheat FAQ covers compatibility, loader steps, pricing, and account risk before you buy access.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Valorant Cheat',
    description: 'Purchase terms, license use, and refund policy for Valorant cheat access sold through valorant-cheat.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Valorant Cheat',
    description:
      'Privacy policy for valorant-cheat.org: analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About Valorant Cheat | valorant-cheat.org',
    description:
      'What valorant-cheat.org publishes about Valorant PC cheat modules, community forums, and support paths.',
  },
  '/support/': {
    title: 'Valorant Cheat Support — Loader & Checkout Help',
    description:
      'Support for Valorant loader setup, configs, and secure checkout for aimbot, ESP, and radar modules on PC.',
  },
  '/go/valorant/': {
    title: 'Checkout — Valorant Cheat Access',
    description:
      'Secure Valorant cheat license checkout—compare aimbot, ESP wallhack, and radar modules, then continue to partner checkout.',
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
