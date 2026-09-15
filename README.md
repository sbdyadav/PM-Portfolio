# Bhagwandas Yadav — PM Portfolio

Personal portfolio site built with Next.js, deployed on Vercel.

## Structure

```
app/
  page.tsx                    → homepage (About, Experience, Case studies, Skills)
  page.module.css             → homepage styles
  layout.tsx                  → shared layout, fonts, page metadata
  globals.css                 → shared design tokens (colors, base styles)
  case-studies/
    meesho/
      page.tsx                → full Meesho reseller teardown
      page.module.css         → teardown page styles
public/
  photo.jpg                   → headshot used in the hero
  resume.pdf                  → downloadable résumé (linked from "Download résumé")
  case-studies/meesho/*.jpeg  → real screenshots used as evidence in the teardown
```

## Running locally

```
npm install
npm run dev
```

Opens at http://localhost:3000

## Publishing a new case study

1. Duplicate the `app/case-studies/meesho/` folder as `app/case-studies/<new-slug>/`
2. Rewrite `page.tsx` with the new teardown's content, keeping the same
   step-by-step structure (hook, evidence, steelman, critique, fix, verdict)
   if it fits, or adapt the shape to what the new case study needs
3. Add any screenshots to `public/case-studies/<new-slug>/`
4. Add a new card to the "Case studies" section in `app/page.tsx`, linking
   to `/case-studies/<new-slug>`
5. Commit and push — Vercel auto-deploys in under a minute

## Deploying

This repo is connected to Vercel. Every push to `main` auto-deploys.
Custom domain is configured in the Vercel project settings under Domains.

## Updating your résumé or photo

Just replace `public/resume.pdf` or `public/photo.jpg` with the new file
(same filename) and push — no code changes needed.
