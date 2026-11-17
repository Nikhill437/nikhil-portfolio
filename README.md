# Nikhil Satpute · Portfolio

Personal portfolio built with Next.js 16 (App Router), React 19 and Tailwind CSS 4. Fully static.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Set `NEXT_PUBLIC_SITE_URL` to the deployed domain (e.g. `https://nikhilsatpute.dev`) so social previews, the sitemap and canonical URLs are absolute.

## Deploy to Cloudflare (free)

The site builds to static files in `out/` and is served by Cloudflare Workers static assets, which is free.

```bash
npx wrangler@4 login     # one time, opens the browser
npm run deploy           # builds and uploads
```

The first deploy prints your URL, e.g. `https://nikhil-portfolio.<account>.workers.dev`.
Put it in a `.env.production` file so social previews and the sitemap use it, then deploy again:

```bash
NEXT_PUBLIC_SITE_URL=https://nikhil-portfolio.<account>.workers.dev
```

`npm run preview` runs the built site locally on Cloudflare's runtime before deploying.

## Updating content

All text lives in `content/`. No component changes are needed for routine updates.

| What | Where |
| --- | --- |
| Name, email, socials, availability, summary, skills, experience, services | `content/profile.ts` |
| Projects and websites | `content/projects.ts` |
| Resume PDF | replace `public/resume/Nikhil_Satpute_Resume.pdf` |

**Project screenshots:** add an image to `public/projects/` and set `image: "/projects/<file>.png"` on the project. Until then a generated device preview is shown.

**Project links:** add entries to a project's `links` array (`kind`: `play`, `web`, `github` or `appstore`). Apps with a `play` link also appear in the "On Google Play" list.

**Ownership badge:** `independent`, `lead` or `team` controls the badge and which group a project appears in.

## Structure

```
app/                 layout, page, metadata (icon, OG image, robots, sitemap)
wrangler.jsonc       Cloudflare deploy config
components/          shared UI, header, footer, project card
components/sections/ one file per page section
content/             all portfolio data
```
