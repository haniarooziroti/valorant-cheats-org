/** Static path redirects (301) for production Node server. Keys: pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/products', '/products/valorant-cheats/'],
  ['/products/', '/products/valorant-cheats/'],
  ['/products/mw4-cheats', '/products/valorant-cheats/'],
  ['/products/mw4-cheats/', '/products/valorant-cheats/'],
  ['/go/mw4', '/go/valorant/'],
  ['/go/mw4/', '/go/valorant/'],
  ['/blogs', '/blog/'],
  ['/blogs/', '/blog/'],
  ['/forums', '/blog/'],
  ['/forums/', '/blog/'],
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/reviews', '/reviews/'],
  ['/forum', '/blog/'],
  ['/forum/', '/blog/'],
  ['/status', '/status/'],
  ['/cheats', '/products/valorant-cheats/'],
  ['/cheats/', '/products/valorant-cheats/'],
  ['/blog/how-to-buy-mw4-cheats-2026', '/blog/buy-valorant-cheats/'],
  ['/blog/how-to-buy-mw4-cheats-2026/', '/blog/buy-valorant-cheats/'],
  ['/blog/buy-mw4-cheats', '/blog/buy-valorant-cheats/'],
  ['/blog/buy-mw4-cheats/', '/blog/buy-valorant-cheats/'],
  ['/blog/mw4-cheat-features-overview', '/blog/valorant-features/'],
  ['/blog/mw4-cheat-features-overview/', '/blog/valorant-features/'],
  ['/blog/mw4-monthly-vs-lifetime', '/blog/valorant-plans/'],
  ['/blog/mw4-monthly-vs-lifetime/', '/blog/valorant-plans/'],
  ['/blog/mw4-aimbot-settings-guide', '/blog/valorant-aimbot-setup/'],
  ['/blog/mw4-aimbot-settings-guide/', '/blog/valorant-aimbot-setup/'],
  ['/blog/mw4-esp-radar-6v6-setup', '/blog/valorant-esp-setup/'],
  ['/blog/mw4-esp-radar-6v6-setup/', '/blog/valorant-esp-setup/'],
  ['/blog/hajin-dmz-loot-guide', '/blog/valorant-agent-utility-guide/'],
  ['/blog/hajin-dmz-loot-guide/', '/blog/valorant-agent-utility-guide/'],
  ['/blog/mw4-triggerbot-and-no-recoil', '/blog/valorant-triggerbot/'],
  ['/blog/mw4-triggerbot-and-no-recoil/', '/blog/valorant-triggerbot/'],
  ['/blog/mw4-system-requirements-setup', '/blog/valorant-requirements/'],
  ['/blog/mw4-system-requirements-setup/', '/blog/valorant-requirements/'],
  ['/blog/mw4-loader-not-working', '/blog/valorant-loader-fix/'],
  ['/blog/mw4-loader-not-working/', '/blog/valorant-loader-fix/'],
  ['/blog/mw4-patch-day-checklist', '/blog/valorant-patch-day/'],
  ['/blog/mw4-patch-day-checklist/', '/blog/valorant-patch-day/'],
  ['/blog/mw4-cheat-risk-explained', '/blog/valorant-cheat-risk/'],
  ['/blog/mw4-cheat-risk-explained/', '/blog/valorant-cheat-risk/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
