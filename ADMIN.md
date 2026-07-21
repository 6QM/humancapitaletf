# Content update guide

The public site is a two-page book in each language.

## What to edit

- Framework definitions and the four positions: `site/zh/index.html` and `site/en/index.html`.
- Smith, Marx, Schultz, Becker, source notes, and references: `site/zh/origins.html` and `site/en/origins.html`.
- Typography, spacing, responsive behavior, and print layout: `site/book.css`.

## Before publishing

1. Update Chinese and English together.
2. Verify every quotation against its linked source.
3. Do not state that Marx proposed human-capital theory; he described labour-power within a different theory.
4. Run `npm run build`.
5. Open the files in `dist/` or print them to confirm the reading order.

Do not add images, embedded media, JavaScript, popups, forms, dashboards, fixed portfolio percentages, or invented results.
