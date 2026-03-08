# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

## Architecture

**Next.js 15 App Router** marketing site for humancapitaletf.com. Uses TypeScript strict mode, TailwindCSS, and MDX for content pages.

### Content Management

All user-facing copy is centralized in `content/copy.ts` — edit there first when updating page text. Site URLs, contact info, and metadata constants live in `config/siteConfig.ts`.

### Key Layers

- **`app/`** — App Router pages (`.tsx`) and MDX notes (`notes/*.mdx`)
- **`components/`** — `Navbar`, `Footer`, `Section` (reusable section wrapper)
- **`content/copy.ts`** — Single source of truth for all page copy/structure
- **`content/notes.ts`** — Metadata for MDX field notes (title, date, slug)
- **`config/siteConfig.ts`** — URLs, contact info; referenced in layout, SEO, and nav
- **`lib/seo.ts`** — Helpers for `generateMetadata()` and JSON-LD structured data

### MDX Setup

`next.config.mjs` enables MDX via `@next/mdx` with `mdxRs: true`. Page extensions include `.mdx`. Field notes are `.mdx` files in `app/notes/`; add corresponding metadata entries to `content/notes.ts`.

### Styling

Dark theme defined in `tailwind.config.ts` — background `#050608`, surface `#0B0D11`, accent blue `#3B82F6`. Tailwind scans `app/**`, `components/**`, and `content/**`.
