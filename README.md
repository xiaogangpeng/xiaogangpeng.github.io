# xiaogangpeng.github.io

Personal academic homepage, built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com) and deployed to GitHub Pages.

## Local development

```bash
./run_server.sh          # installs deps, serves on http://localhost:4321
```

Or directly:

```bash
npm install
npm run dev
npm run build            # static output in dist/
```

## Editing content

All page content lives in typed data files — no need to touch the components:

| File | What it holds |
|---|---|
| `src/data/profile.ts` | Name, tagline, role chips, bio, social links, hero background |
| `src/data/news.ts` | News feed (paper acceptances, code releases) |
| `src/data/publications.ts` | Publication list, authors, venues, teaser images, links |
| `src/data/cv.ts` | Education, research experience, academic service, honors |
| `src/data/motion.ts` | Hero motion slot config (see below) |

Images and other static files go in `public/` and are referenced from the site
root, e.g. `/images/MARDM_teaser.gif`.

### Things worth knowing

- **Tagline** (`profile.tagline`) is a placeholder derived from the old bio —
  replace it with your own one-line research statement.
- **Hero background** (`profile.heroBackground`) is `null`, so the hero renders a
  soft accent wash. Point it at an image in `public/` to use a photo instead.
- **Institution logos** live on `cv.ts` entries. Missing logos fall back to a
  monogram, so add `hdu_logo.png` to `public/images` to replace the "HDU" boxes.
- **Section bands** alternate via `<Band tone="soft">` in `src/pages/index.astro`.

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `master`.
GitHub Pages must be set to **Source: GitHub Actions** in repository settings.

## Google Scholar citation badge

`.github/workflows/google-scholar-stats.yml` scrapes Scholar daily and publishes
the result to the `google-scholar-stats` branch; the site reads it at runtime and
hides the badge if the data is unavailable.

Requires a repository secret:

- `GOOGLE_SCHOLAR_ID` — the `user=` value from the Scholar profile URL.

Note that Google frequently blocks scraping from GitHub Actions IP ranges, so
this workflow can fail intermittently. The badge degrades silently when it does.

## Hero motion slot

The hero has a slot for an interactive animation, driven by the `oil-motion`
skill. It is disabled until the assets exist — see the comments in
`src/data/motion.ts` for how to enable it.
