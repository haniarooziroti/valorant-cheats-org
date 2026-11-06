/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Valorant Cheats – Aimbot, ESP & Wallhack | Valorant Cheat',
    description:
      'PC Valorant cheats with aimbot, ESP, wallhack, triggerbot, and radar. Compare modules, read the blog and FAQ, check status, then continue to secure checkout.',
  },
  '/products/valorant-cheats/': {
    title: 'Valorant Cheats — Compare Modules | Valorant Cheat',
    description:
      'Browse Valorant cheat modules: aimbot, ESP wallhack, triggerbot, radar, and no recoil. Compare features and pricing before you open checkout.',
  },
  '/products/valorant-cheats/aimbot/': {
    title: 'Valorant Aimbot — FOV & Smoothing | Valorant Cheat',
    description:
      'Valorant aimbot with FOV circle, smoothing, and visibility checks for ranked PC play. Module overview, settings, and secure checkout on valorant-cheat.org.',
  },
  '/products/valorant-cheats/esp/': {
    title: 'Valorant ESP & Wallhack for PC | Valorant Cheat',
    description:
      'Player ESP and wallhack overlays with health, distance, and skeleton options tuned for readable comp games on Windows 10 and 11.',
  },
  '/products/valorant-cheats/triggerbot/': {
    title: 'Valorant Triggerbot — Delay & Hold Key | Valorant Cheat',
    description:
      'Valorant triggerbot fires when your crosshair is on target, with millisecond delay tuning and shared visibility checks with aim modules.',
  },
  '/products/valorant-cheats/radar/': {
    title: 'Valorant Radar Hack — 2D Map Awareness | Valorant Cheat',
    description:
      '2D radar with zoom, range caps, and markers that stay in sync with ESP distance—useful on Haven, Bind, Ascent, and other maps.',
  },
  '/products/valorant-cheats/no-recoil/': {
    title: 'Valorant No Recoil — Spray Control | Valorant Cheat',
    description:
      'Light recoil control for Vandal and Phantom sprays on PC. Pairs with aimbot modules; compare options on the module page before checkout.',
  },
  '/reviews/': {
    title: 'Valorant Cheat Reviews — Loader & Modules | Valorant Cheat',
    description:
      'Player reviews on aimbot, ESP, wallhack, triggerbot, loader setup, and support from verified Windows 10 and 11 users.',
  },
  '/status/': {
    title: 'Valorant Cheat Status — Live Module Updates | Valorant Cheat',
    description:
      'Check live status for aimbot, ESP, radar, and other modules after Riot patches. Confirm everything is online before ranked.',
  },
  '/blog/': {
    title: 'Valorant Cheat Blog — Setup & Patch Guides | Valorant Cheat',
    description:
      'Guides on aimbot tuning, ESP setup, loader fixes, Vanguard requirements, checkout, and patch-day checks for PC players.',
  },
  '/faq/': {
    title: 'Valorant Cheat FAQ — Loader, Pricing & Risk | Valorant Cheat',
    description:
      'Answers on PC compatibility, loader steps, monthly vs lifetime pricing, account risk, and secure checkout on valorant-cheat.org.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Valorant Cheat',
    description:
      'Purchase terms, license use, and refund policy for Valorant cheat access sold through valorant-cheat.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Valorant Cheat',
    description:
      'How valorant-cheat.org handles analytics, cookies, and contact data when you browse the site or email support.',
  },
  '/about/': {
    title: 'About Valorant Cheat — Modules & Support | Valorant Cheat',
    description:
      'What valorant-cheat.org publishes: PC cheat modules, loader help, status updates, blog guides, FAQ, Discord, and checkout support.',
  },
  '/support/': {
    title: 'Valorant Cheat Support — Loader & Checkout | Valorant Cheat',
    description:
      'Help with loader setup, configs, and checkout for aimbot, ESP, and radar modules. Email support with your order address; join Discord for quick tips.',
  },
  '/go/valorant/': {
    title: 'Secure Valorant Cheat Checkout | Valorant Cheat',
    description:
      'Continue to partner checkout for Valorant cheat licenses. Compare aimbot, ESP, wallhack, and radar modules before you pay.',
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
