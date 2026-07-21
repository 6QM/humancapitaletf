# Human Capital ETF Website

The canonical bilingual text of the Human Capital ETF framework.

The active website is intentionally small:

- `site/zh/index.html` — Chinese framework text;
- `site/zh/origins.html` — Chinese intellectual origins;
- `site/en/index.html` — English framework text;
- `site/en/origins.html` — English intellectual origins;
- `site/book.css` — the complete book-like visual system.

There are no images, client-side scripts, frameworks, databases, dashboards, or interactive product features in the published site. The older Next.js source remains in the repository as historical working material, but it is not part of the active build.

## Local reading

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build and validation

```bash
npm run build
```

The build validates that active pages contain no images, SVG, canvas, scripts, CSS background images, or remote font assets. It writes the finished static site to `dist/`.

## Editorial rules

- Keep Chinese and English pages semantically aligned.
- Treat ETF as an allocation metaphor, not a financial product.
- Do not add a universal fixed allocation.
- Preserve the distinction between Marx's concept of labour-power and modern human-capital theory.
- Use primary or authoritative sources for historical claims and quotations.
- Keep the site readable, printable, and useful without JavaScript.
