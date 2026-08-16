# Weborium — Studio Website

A frontend design & development studio site for **Weborium** (founded 2025),
built with React 19 + Vite, React Router, Framer Motion, and Lenis smooth scroll.

## What's inside

- **Home** — animated hero, studio statement, stats, selected work, process, team teaser
- **Work** — full case-study grid for all 4 delivered projects
- **Project detail pages** (`/work/:slug`) — one per project:
  - Motolab PitShop
  - Fortune Multi Services
  - Shri Venkateshwara — Agros & Herbs
  - JustShare Care
- **About** — studio story, values, full team bios
- **Contact** — styled enquiry form with budget-range picker
- Custom cursor, scroll-progress rail, scroll-triggered reveals, smooth scrolling, page transitions, animated mobile nav
- Fully responsive, keyboard-focus visible, respects `prefers-reduced-motion`

## Fonts

- **Fraunces** — display/headline serif
- **Hind** — body copy (Indian-origin Google Font, built for excellent Latin + Devanagari readability)
- **Space Mono** — labels, eyebrows, numerals

Loaded via Google Fonts in `src/styles/globals.css`.

## Team photos

Each team member card (`src/components/TeamCard.jsx`) shows a styled
"+ Add Photo" placeholder until a real photo is supplied. To add photos:

1. Drop image files into `src/assets/` (or `public/team/`)
2. In `src/data/team.js`, set the `photo` field for each person to the image path, e.g.
   ```js
   photo: '/team/viral.jpg',
   ```

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/   Navbar, Footer, ProjectCard, TeamCard, Reveal, CursorDot, ScrollRail, etc.
  data/         projects.js, team.js — edit these to change content
  hooks/        useSmoothScroll.js
  pages/        Home, Work, ProjectDetail, About, Contact, NotFound
  styles/       globals.css — design tokens (color, type, spacing)
```

## Editing content

- **Projects**: edit `src/data/projects.js`
- **Team**: edit `src/data/team.js`
- **Colors/fonts/spacing**: edit CSS variables at the top of `src/styles/globals.css`

## Notes

- Project case-study visuals are original abstract SVG art (brand-toned, one
  per project) standing in for real product screenshots — swap in real
  screenshots inside `src/components/ProjectVisual.jsx` or replace with `<img>`
  tags once available.
- Contact form is UI-only (no backend wired up) — connect it to your
  form handler / email service of choice.
