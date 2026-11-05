/** Build-time site origin for sitemap, robots, and Astro `site` (must match deploy host). */
export function getSiteOriginFromEnv() {
  const raw = process.env.PUBLIC_SITE_ORIGIN || 'https://valorant-cheat.org';
  return raw.trim().replace(/\/$/, '');
}
