# YAHAV ROSEN — Interior Design

Editorial React portfolio for interior designer Yahav Rosen. The site is built with Vite, React and React Router, with no UI or animation dependencies.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Routes

- `/`
- `/projects`
- `/projects/clinic`
- `/projects/carmel-penthouse`
- `/projects/vardiya`
- `/projects/herzliya-apartment`
- `/about`
- `/contact`

## Content and media

Project names, stable slugs, selected covers and galleries live in `src/data/siteContent.js`. Do not hardcode project assets in view components.

Original photography remains in `src/yahav`. Optimized 960px and 1800px WebP derivatives are in `public/media`; rebuild them from the originals with:

```bash
./scripts/process-media.sh
```

See `MEDIA_AUDIT.md` for the source review, cover mapping and exclusion decisions.

## Publishing notes

The app uses client-side routing. Production hosting must rewrite unknown non-file requests to `/index.html` so direct project URLs resolve correctly. Canonical URLs, the sitemap and Open Graph URLs currently use `https://yahavrosen.com`; confirm that domain before launch.
