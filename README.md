# Human Capital ETF Website

The English canonical text of the Human Capital ETF framework.

The active website contains three document-style pages:

- `site/index.html` — the canonical definition, capital layers, boundaries, and four positions;
- `site/origins.html` — the personal and intellectual origins, including Becker's portability distinction;
- `site/operating-system.html` — inventory, the asset test, allocation policy, rebalancing, and asset migration;
- `site/works.css` — the complete text-first visual system.

The design follows the conventions of online primary-source archives: white paper, dark-blue chapter headings, serif body text, inline contents, section rules, footnotes, and ordinary text links. There are no images, client-side scripts, frameworks, remote fonts, forms, dashboards, or product-interface elements in the published site.

## Local reading

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build and validation

```bash
npm run build
```

The build verifies that the active pages are English-only, have one correct canonical URL and one primary heading, exclude old calculator claims, and contain no images, SVG, canvas, scripts, CSS background images, or remote font assets. It writes the finished static site to `dist/`.

## Editorial rules

- Treat ETF as an allocation metaphor, not a financial product.
- Do not add a universal fixed allocation.
- Distinguish inputs, embodied human capital, enabling or externalized assets, and return flows.
- Treat Meta as the governance position, not an ordinary asset basket.
- Preserve the distinction between Marx's concept of labour-power and modern human-capital theory.
- Use primary or authoritative sources for historical claims and quotations.
- Keep the site readable, printable, and useful without JavaScript.
