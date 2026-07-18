# Human Capital ETF Website

The bilingual concept and framework site for [humancapitaletf.com](https://humancapitaletf.com), written by [Qiaomai Liu](https://69mike.com).

The site connects three parts of the author’s work:

- **Human Capital ETF** — the allocation framework;
- **The Worker Investor** — the worker/investor perspective that explains why accumulation matters;
- **69mike.com** — the author’s long-term home for essays, diaries, projects, and professional background.

## Current architecture

- Next.js App Router
- TypeScript
- Plain CSS with no UI framework
- Static bilingual routes
- Chinese default: `/zh`
- English: `/en`
- Localized pages: home, framework, programs, about

The root URL redirects to `/zh`. Old `/framework`, `/about`, `/programs`, and `/notes/*` URLs redirect to their current Chinese equivalents.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run lint
npm run build
npm audit --omit=dev
```

## Where to edit

- `content/siteContent.ts` — canonical Chinese and English copy
- `config/siteConfig.ts` — author and external project links
- `app/[locale]/page.tsx` — home page structure
- `app/[locale]/framework/page.tsx` — complete framework
- `app/[locale]/programs/page.tsx` — transcript synthesis
- `app/[locale]/about/page.tsx` — author and project relationships
- `app/globals.css` — design system and responsive layout
- `docs/CONTENT_FOUNDATION.md` — source map, editorial decisions, and terminology

Do not add an English sentence without adding its Chinese counterpart, or vice versa. New claims about the author, published programs, allocations, experiments, or results must point to a real source.

