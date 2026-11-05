/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Valorant Cheats — Aimbot, ESP & Wallhack on PC Ranked',
    description:
      'Valorant cheats with ESP, aimbot, and wallhack tools for PC ranked and unrated. Compare modules, read forums, and continue to secure checkout.',
  },
  '/blogs/': {
    title: 'Redirecting – this path sends readers to the main guide',
    description:
      'Redirecting: this path sends readers to the main guide index for aimbot, ESP, loader, and checkout articles when an old /blogs/ link is opened.',
  },
  '/products/valorant-cheats/': {
    title: 'Valorant Cheats — Compare Aimbot, ESP & Hacks',
    description:
      'Valorant hacks and cheat modules for aimbot, ESP wallhack, triggerbot, radar, and no recoil—compare features before checkout.',
  },
  '/products/valorant-cheats/aimbot/': {
    title: 'Aimbot – Soft Aim, FOV Tuning & Module Checkout Access',
    description:
      'Valorant aimbot with FOV circle, smoothing, and visibility checks for ranked duels—transactional module details and checkout access.',
  },
  '/products/valorant-cheats/esp/': {
    title: 'ESP – Agent Boxes, Health & Skeleton for Valorant PC',
    description:
      'Valorant ESP and wallhack overlays with health, distance, and skeleton options tuned for readable comp games on PC ranked queues.',
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
    title: 'Valorant Cheat Reviews — Aimbot, ESP & Loader',
    description:
      'Valorant cheat reviews on aimbot, ESP, wallhack, triggerbot, loader setup, and support from verified PC players on Windows 10 and 11.',
  },
  '/status/': {
    title: 'Valorant Cheat Status — Online After Patches',
    description:
      'Live Valorant cheat module status for aimbot, ESP, and radar on PC. Check before ranked after a Riot patch.',
  },
  '/forum/': {
    title: 'Forums – Browse threads before you change defaults or buy',
    description:
      'Valorant cheat forums with aimbot settings, ESP layouts, triggerbot delay, and checkout threads from PC players—read threads before you buy access.',
  },
  '/blog/': {
    title: 'Valorant Cheat Blog — Aimbot, ESP & Wallhack Guides',
    description:
      'Blog: Search and filter Valorant cheat guides: aimbot tuning, player ESP, wallhack setup, Vanguard errors, checkout, patch-day status and loader fixes.',
  },
  '/faq/': {
    title: 'FAQ – Scan answers here first, then read module pages',
    description:
      'Valorant cheat FAQ covers compatibility, loader steps, pricing, account risk, setup paths, and secure access before you open checkout on PC.',
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
    title: 'Cheat Org – About Modules, Support and Loader Paths',
    description:
      'Cheat org overview: what valorant-cheat.org publishes about PC cheat modules, community forums, and support paths for loaders and checkout help.',
  },
  '/support/': {
    title: 'Support – Loader, Checkout & Config Help for Valorant',
    description:
      'Support for Valorant loader setup, configs, and secure checkout for aimbot, ESP, and radar modules on PC—include your order email when you write in.',
  },
  '/go/valorant/': {
    title: 'Checkout – Secure Valorant Cheat Access & Partner Pay',
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
