# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000) — run in PowerShell, not Git Bash
npm run build    # Production build
npm run lint     # ESLint
npx tsc --noEmit # Type-check without building
```

> On this Windows machine, `npm run dev` crashes when launched from Claude Code's bash environment (segfault). Always ask the user to run it themselves in PowerShell.

## Architecture

**Next.js 16 App Router** site for humancapitaletf.com. TypeScript strict mode, TailwindCSS, MDX for field notes, recharts for the compounding visualizer.

### Content sources (edit these first)

| File | What it controls |
|---|---|
| `content/copy.ts` | All page copy — single source of truth for every text string on the site |
| `content/notes.ts` | Metadata (slug, title, date, summary) for each MDX field note |
| `config/siteConfig.ts` | URLs, email, social links — used in Navbar, Footer, SEO, and JSON-LD |

### Components

- **`Navbar`** — `'use client'`. Mobile hamburger menu with `useState`. Shows active page via `usePathname()`. Links to Framework / Notes / About.
- **`Footer`** — Server component. Two-column layout with Site and External link groups.
- **`Section`** — Thin wrapper that applies `section-shell` padding and `container-inner` max-width, used by every homepage section.
- **`CompoundingVisualizer`** — `'use client'`. Interactive recharts `LineChart` comparing "start now" vs "start 5 years later" skill compounding. Two sliders: age (18–45) and hours/week (1–20). Compounding rate is derived from `getAnnualRate(hours)`.
- **`EmailCapture`** — `'use client'`. Form that POSTs to `/api/subscribe`. Shows success/error states.

### API routes

- **`/api/subscribe`** — Accepts `{ email }` via POST, forwards to Buttondown newsletter API. Requires `BUTTONDOWN_API_KEY` env var. Falls back to `console.log` in dev if key is absent.

### MDX field notes

Notes live as `.mdx` files directly in `app/notes/` (e.g. `app/notes/2026-01-initial-allocation.mdx`). Each MDX file must:
1. Wrap its content in `<article className="section-shell"><div className="container-inner max-w-2xl">…</div></article>` — there is no shared layout for note pages.
2. Apply `className="note-prose"` to the text body div for typography styles.
3. Have a corresponding entry in `content/notes.ts` (slug must match filename without `.mdx`).

### Styling conventions

- Utility classes defined in `globals.css` `@layer components`: `.btn-primary`, `.btn-ghost`, `.card-hover`, `.note-prose`, `.viz-range` (range input), `.section-shell`, `.container-inner`.
- Dark theme colours in `tailwind.config.ts`: `background`, `surface`, `muted`, `accent` (#3B82F6), `borderSubtle`, `textPrimary`, `textSecondary`.
- Font: Inter via `next/font/google`, exposed as CSS var `--font-inter`.

### Environment variables

| Variable | Purpose |
|---|---|
| `BUTTONDOWN_API_KEY` | Email capture (get free key at buttondown.email) |

Add to Vercel: Settings → Environment Variables. See `.env.local.example` for the template.
