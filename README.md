# Brandon Chen — Portfolio

Personal portfolio site built with Next.js 15, TypeScript, Tailwind CSS v4, and Sanity CMS.

**Live site:** https://brancyx.github.io/my-portfolio/

## Editing content (projects, blog posts, bio, skills, experience)

Content lives in Sanity, not in this codebase — no commits needed for content updates.

- **Studio URL:** _add your sanity.studio URL here after running `npx sanity deploy`_
- Log in with your Sanity account, edit, and hit **Publish**.
- The live site rebuilds automatically within a few minutes via the GitHub Actions
  workflow + Sanity webhook (see below).

### Local Studio (alternative)
```bash
npx sanity dev
```
Opens the Studio at http://localhost:3333.

## Editing code (layout, components, styling)

```bash
npm install
npm run dev          # local dev server at http://localhost:3000
```

Make your changes, then:
```bash
git add .
git commit -m "describe your change"
git push origin main
```

Pushing to `main` automatically triggers a rebuild + redeploy via GitHub Actions.
Check progress under the repo's **Actions** tab.

## Setting up auto-deploy on Sanity content changes (optional)

By default the site only rebuilds when you push code. To make it rebuild whenever
you publish new content in Sanity too:

1. In Sanity Studio → **Settings → API → Webhooks** → create a webhook
2. URL: `https://api.github.com/repos/brancyx/my-portfolio/dispatches`
3. Method: POST, with header `Authorization: token <a GitHub PAT with repo scope>`
   and body `{"event_type": "sanity-update"}`
4. Trigger on: Create, Update, Delete

## Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **CMS:** Sanity.io
- **Hosting:** GitHub Pages (via GitHub Actions)
- **Contact form:** EmailJS

## Project structure

```
app/            Next.js routes (pages)
components/     React components
lib/            Sanity client, queries, fallback data
sanity/         Sanity schema definitions
types/          Shared TypeScript types
sanity.config.ts    Sanity Studio configuration
sanity.cli.ts       Sanity CLI configuration
```
