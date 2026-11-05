# valorant-cheats-.org

Astro marketing site for Valorant PC cheat modules — products, blog, forums, reviews, and secure checkout.

## Develop

```bash
npm install
cp .env.example .env
npm run dev
```

## Build

```bash
npm run build
```

Production build with nav verification:

```bash
npm run build:core
```

## Deployment env vars

Set these in **Cloudflare Dashboard → Workers & Pages → your Worker (`valorant-cheats--org`) → Settings → Variables and Secrets**:

| Variable | Required | Purpose |
|----------|----------|---------|
| `PUBLIC_SITE_ORIGIN` | Yes | Canonical host, e.g. `https://valorant-cheat.org` (sitemap, canonical, hreflang) |
| `PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 |
| `INDEXNOW_KEY` | No | IndexNow ping after build; skipped if unset |

For local preview of `dist/`:

```bash
npm start
```

## Canonical domain

**valorant-cheat.org** — defined in `src/config/site.ts`. All marketing URLs derive from that file via `src/config/siteConfig.ts` and `PUBLIC_SITE_ORIGIN` at build time.
