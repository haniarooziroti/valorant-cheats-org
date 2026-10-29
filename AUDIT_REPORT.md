# SEO & site audit report (mw4cheat.org)

**Date:** 2026-10-29  
**Branch:** `seo-audit-fixes`  
**Build:** 40 Astro pages + RSS endpoint; 52 HTML files in `dist/` (includes 11 legacy blog redirect stubs).

## Summary

| Check | Result |
|--------|--------|
| `npm run build` | Pass |
| Post-build audit (`node scripts/site-audit.mjs`) | **0 errors**, 28 warnings |
| Internal links (HTML routes + static assets) | Pass |
| Canonical URLs (`https://mw4cheat.org`, trailing slash) | Pass |
| Single H1 on indexable pages | Pass (redirect stubs excluded) |
| Sitemap domain | Fixed (`mw4cheat.org`, was `dotacheats.com`) |
| Legacy blog URLs | 301 via Astro + `scripts/redirects.mjs` for Node server |

## Issues found & fixed

### Critical / SEO

- **Wrong sitemap index host** in `scripts/finalize-sitemap.mjs` (`dotacheats.com` → `mw4cheat.org`).
- **Production server redirects** still pointed at Dota paths and wrong host in `scripts/redirects.mjs` and `scripts/serve.mjs`.
- **Default OG image** was a gameplay frame, not 1200×630 — added `public/images/og-default.jpg` (+ WebP) via `scripts/generate-og-default.mjs`.
- **Global duplicate `meta keywords`** removed from `BaseLayout`.
- **Sitemap `lastmod`** no longer overwrites every URL with build time — blog posts use frontmatter dates; static routes use stable dates in `src/config/sitemap.ts`.
- **Legacy blog redirect URLs** excluded from sitemap (still emitted as `noindex` redirect HTML in `dist/`).
- **RSS feed** was broken (empty `blogPosts`) — added `src/pages/rss.xml.ts` and `buildRssFeed(posts)`.
- **RSS/channel copy** still referenced Dota/`dotacheats.com` — updated for MW4.
- **Multiple H1s** on home, products, and blog FAQ blocks — `SectionHeader` defaults to `h2`; FAQ sections use `h2`.
- **Forum thread meta** — unique descriptions via `truncateMetaDescription()`.
- **Status page SEO** — tightened title/description in `pageSeo.ts`.
- **IndexNow default host** — `mw4cheat.org`.

### Performance / UX

- Hero video: `preload="none"`, MP4 listed first, load/play on intersection in `hero-video.ts`.
- Blog filter row: improved wrapping on viewports ≤375px.

### Tooling

- Added `scripts/site-audit.mjs` for repeatable post-build crawl (links, canonical, H1, sitemap).

## Remaining warnings (non-blocking)

Typical warnings from the audit (see `.seo-baseline/audit-report.json`):

- **Title/description length** on some long blog titles or forum thread titles (still usable; tune copy over time).
- **Orphan routes** — e.g. `/status/` has few inbound links (add footer/nav link if desired).
- **OG image on blog posts** — featured frames are not 1200×630; social crawlers may letterbox (optional: per-post OG crops later).
- **Blog article OG** uses gameplay PNG paths; WebP served on-page via `ResponsiveImage`.

## Manual production checks

1. **Confirm 301s** for all 12 legacy blog URLs on the live host (Astro static redirect HTML + Node `PATH_REDIRECTS` if using `npm run start`).
2. **Lighthouse** on home, one product page, blog index (not run in CI here).
3. **IndexNow** — set `INDEXNOW_KEY` in production env to enable ping.
4. **Google Search Console** — submit `https://mw4cheat.org/sitemap.xml`.
5. **Legal copy** — blog post `buy-mw4-cheats.md` still has `[EDIT:]` FAQ placeholders; align with Terms before marketing push.

## Functional smoke (manual)

Recommended quick pass after deploy:

- Blog: search, topic pills, sort, `?q=` URL sync.
- Reviews: sort + rating filters (no search).
- Forum: search + topic tabs.
- Home/product carousels and product screenshot gallery.
- Hero video: skip ±5s, autoplay when scrolled into view.
