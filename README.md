# Sarmad Ahmed, portfolio

A one-page Next.js portfolio with case studies for three projects: Cinema AI Seat Picker, the voice QA caller, and Folio document sharing.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a new GitHub repo (for example `sia007/portfolio`).
2. Go to vercel.com/new, import the repo, and keep the defaults (Vercel detects Next.js).
3. Click Deploy. You'll get a URL like `your-project.vercel.app`.
4. Put that URL in `site.url` in `data/site.js` so social previews resolve, then push again.

Or from the terminal: `npm i -g vercel` then `vercel` in this folder.

## Editing content

Everything the page says is in `data/site.js`: your intro, email, LinkedIn, résumé link, and each project's text, links, images and colors. Empty contact fields are hidden.

To add a project, copy one of the objects in the `projects` array and drop its images in `public/projects/`.

## Images

The images in `public/projects/` are SVG mockups drawn from each repo's README and architecture notes, not real screenshots. Replace them with real screenshots when you can: save a PNG into `public/projects/` and update the `src` in `data/site.js`. Screens at 1600×1000 fit the layout best.
