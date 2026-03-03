## Human Capital ETF – Marketing Site

A small, production-ready marketing and concept site for `humancapitaletf.com`, built with **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS**, and **MDX support**.

The site is designed to feel like a calm, structured prospectus rather than a personal blog.

### Tech stack

- **Framework**: Next.js 14+ (App Router) with static output-friendly pages
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Content**: Centralized in a single config file at `content/copy.ts`
- **MDX**: Enabled via `@next/mdx` so you can add MDX-based report pages later

---

### Getting started

1. **Install dependencies**

```bash
npm install
```

2. **Run the development server**

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

3. **Build for production**

```bash
npm run build
npm start
```

Next.js will build an optimized production bundle and start the server.

---

### Deployment

You can deploy this project easily to **Vercel** or any other Node-compatible host.

- **Vercel (recommended)**
  - Push this project to a Git repository (GitHub, GitLab, etc.).
  - Create a new project on Vercel and import the repo.
  - Vercel will detect Next.js automatically.
  - Default build command: `npm run build`
  - Default output: `.next`

- **Static hosting**
  - This project uses the Next.js App Router; if you want a fully static export, you can:
    - Prefer pages that do not use dynamic server APIs.
    - Use `next export` compatible patterns if you later decide to add a dedicated static export step.

For most use cases, Vercel is the simplest and most robust option.

---

### Where to edit text (all copy in one place)

All user-facing copy is stored in a single file:

- `content/copy.ts`

This includes:

- Home page hero text, bullets, and section copy
- Framework page headings and paragraphs
- About page narrative and bullet points
- Key lines such as:
  - **Title**: `Human Capital ETF`
  - **Subtitle**: `Invest in Yourself Like an Index Fund.`
  - **Tagline**: `“A long-term model for managing skills, cognition, and time with an investor’s mindset.”`
  - **Key line**: `“The problem isn’t effort; it’s the lack of an asset allocation model for life.”`
  - **Quote**: `“Every person is already an ETF. The only question is whether you manage it intentionally.”`
  - **Method line**: `“Passive discipline + Active curiosity”`

To change any wording on the site, edit the corresponding fields in `content/copy.ts` and restart the dev server if needed.

---

### Site-level configuration and links

High-level settings and external links live in:

- `config/siteConfig.ts`

This file defines:

- `canonicalUrl` – e.g. `https://humancapitaletf.com`
- `personalSiteUrl` – e.g. `https://69mike.com`
- `youtubeUrl` – your YouTube channel
- `xUrl` – your X/Twitter profile
- `email` – contact email address
- `experimentUrl` – external link for “Follow the Experiment”

These values are used in:

- The navigation and footer links
- SEO metadata and structured data
- CTA buttons on the home and about pages

Update them here once and the whole site will follow.

---

### Pages and routes

The app router structure:

- `/` – **Home**
  - Long-form, single-page layout with sections:
    - Hero (`#top`)
    - Problem (`#problem`)
    - Definition (`#definition`)
    - Framework (`#framework`)
    - Experiment (`#experiment`)
    - Methodology (`#method`)
    - Reports (`#reports`)
    - Start Yours (`#start`)
- `/framework` – **Framework**
  - Expanded explanation of the Human Capital ETF model.
  - Content sourced from `copy.frameworkPage`.
- `/about` – **About**
  - Short explanation of “the experiment”, who/why, and links.
  - Content sourced from `copy.aboutPage`.
- `app/not-found.tsx` – **Custom 404**
  - Calm, simple 404 with CTAs back to `/` and `/framework`.

SEO and metadata:

- Global metadata is defined in `lib/seo.ts` and applied in:
  - `app/layout.tsx` (base metadata)
  - `app/page.tsx`, `app/framework/page.tsx`, `app/about/page.tsx` (page-specific overrides)
- `app/sitemap.ts` – generates `sitemap.xml`
- `app/robots.ts` – generates `robots.txt`
- Basic JSON-LD structured data for `WebSite` and `Person` is added in `app/layout.tsx`.

---

### Adding the first Annual Report (MDX route)

MDX support is already configured via `@next/mdx` and `next.config.mjs`. To add your first report as MDX:

1. **Create an MDX page for the report**

For example, for the 2026 Annual Report:

```bash
mkdir -p app/reports
```

Create `app/reports/2026-annual-report.mdx`:

```mdx
---
title: 2026 Annual Report
description: Allocation changes, learning bets, and outcomes for the Human Capital ETF experiment in 2026.
---

# 2026 Annual Report

Intro text here.

## Allocation

Details of how Core, Growth, Distribution, and Meta changed over the year.

## Notes

Observations, mistakes, and changes in methodology.
```

2. **Link to the report**

- Add a line to the `home.reports.items` array in `content/copy.ts` (for the visible list).
- Optionally, add a direct link somewhere on the home or framework page with a standard Next.js link:

```tsx
import Link from 'next/link';

<Link href="/reports/2026-annual-report">Read the 2026 Annual Report</Link>
```

Next.js will treat the MDX file as a page automatically because MDX is wired into `next.config.mjs`.

---

### Updates / Field Notes (live experiment)

This site includes a small, non‑blog system for ongoing experiment updates:

- MDX files live under: `app/notes/`
- Metadata for ordering and summaries lives in: `content/notes.ts`
- The home page shows the latest three notes in the **Live Experiment** section.
- `/notes` lists all notes in reverse chronological order.

Each note is:

- Short: aim for **300–800 words**.
- Calm and observational: closer to an engineering log than an essay.
- Focused on the experiment: allocation changes, frictions, small rebalances, links between videos and the framework.

To add a new note:

1. **Create an MDX file** under `app/notes/`, for example:

```bash
mkdir -p app/notes
```

Create `app/notes/2026-04-sample-note.mdx`:

```mdx
# Short, descriptive title

Concise, observational text about what changed in the experiment, what was observed, and what will be tried next. Keep the tone neutral and the scope narrow, similar to an engineering change log.
```

2. **Register the note in `content/notes.ts`**

Add an entry to the `notes` array:

```ts
export const notes: NoteMeta[] = [
  {
    slug: '2026-04-sample-note',
    title: 'Short, descriptive title',
    date: '2026-04-01',
    summary:
      'One‑sentence summary of what this field note covers, used on the home page and notes index.',
  },
  // existing notes...
];
```

- `slug` must match the MDX filename.
- `date` is an ISO string used for display and ordering.
- `summary` appears in the Live Experiment cards and on `/notes`.

The home page will automatically pick up the new note (if it is among the latest three), and `/notes` will list it chronologically with a link to the full MDX content.

---

### Accessibility and UX notes

- Uses semantic headings and section landmarks.
- Sticky top navigation with anchor links for the main sections of the home page.
- Buttons and links use focus-visible styles for keyboard navigation.
- Design targets a minimal, high-trust finance/creator hybrid feel with generous whitespace and subtle contrast.

---

### Directory overview

High-level structure:

```text
app/
  layout.tsx          # Root layout, global metadata, structured data
  globals.css         # Tailwind + base styles
  page.tsx            # Home page with anchored sections
  framework/page.tsx  # Framework page
  about/page.tsx      # About page
  not-found.tsx       # Custom 404
  sitemap.ts          # sitemap.xml
  robots.ts           # robots.txt

components/
  Navbar.tsx          # Sticky top navigation
  Footer.tsx          # Footer with links
  Section.tsx         # Reusable section wrapper

config/
  siteConfig.ts       # Site metadata and external links

content/
  copy.ts             # All user-facing copy in one place

lib/
  seo.ts              # Helpers for Next.js Metadata

public/
  favicon.ico         # Favicon placeholder

next.config.mjs       # Next.js + MDX configuration
tailwind.config.ts    # TailwindCSS configuration
postcss.config.mjs    # PostCSS configuration
tsconfig.json         # TypeScript configuration
package.json          # Dependencies and scripts
README.md             # This file
```

You can now adjust the copy, links, and styling while keeping the overall structure and tone of a calm, prospectus-style concept hub.

