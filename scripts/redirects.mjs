/** Static path redirects (301) for production Node server. Keys: pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/reviews', '/reviews/'],
  ['/forum', '/forum/'],
  ['/status', '/status/'],
  ['/cheats', '/products/mw4-cheats/'],
  ['/cheats/', '/products/mw4-cheats/'],
  ['/products/mw4-cheats', '/products/mw4-cheats/'],
  ['/blog/how-to-buy-mw4-cheats-2026', '/blog/buy-mw4-cheats/'],
  ['/blog/how-to-buy-mw4-cheats-2026/', '/blog/buy-mw4-cheats/'],
  ['/blog/mw4-cheat-features-overview', '/blog/mw4-features/'],
  ['/blog/mw4-cheat-features-overview/', '/blog/mw4-features/'],
  ['/blog/mw4-monthly-vs-lifetime', '/blog/mw4-plans/'],
  ['/blog/mw4-monthly-vs-lifetime/', '/blog/mw4-plans/'],
  ['/blog/mw4-aimbot-settings-guide', '/blog/mw4-aimbot-setup/'],
  ['/blog/mw4-aimbot-settings-guide/', '/blog/mw4-aimbot-setup/'],
  ['/blog/mw4-esp-radar-6v6-setup', '/blog/mw4-esp-setup/'],
  ['/blog/mw4-esp-radar-6v6-setup/', '/blog/mw4-esp-setup/'],
  ['/blog/hajin-dmz-loot-guide', '/blog/mw4-dmz-guide/'],
  ['/blog/hajin-dmz-loot-guide/', '/blog/mw4-dmz-guide/'],
  ['/blog/mw4-triggerbot-and-no-recoil', '/blog/mw4-triggerbot/'],
  ['/blog/mw4-triggerbot-and-no-recoil/', '/blog/mw4-triggerbot/'],
  ['/blog/mw4-system-requirements-setup', '/blog/mw4-requirements/'],
  ['/blog/mw4-system-requirements-setup/', '/blog/mw4-requirements/'],
  ['/blog/mw4-loader-not-working', '/blog/mw4-loader-fix/'],
  ['/blog/mw4-loader-not-working/', '/blog/mw4-loader-fix/'],
  ['/blog/mw4-patch-day-checklist', '/blog/mw4-patch-day/'],
  ['/blog/mw4-patch-day-checklist/', '/blog/mw4-patch-day/'],
  ['/blog/mw4-cheat-risk-explained', '/blog/mw4-cheat-risk/'],
  ['/blog/mw4-cheat-risk-explained/', '/blog/mw4-cheat-risk/'],
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
