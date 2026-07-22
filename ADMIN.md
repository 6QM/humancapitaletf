# Content update guide

The public site is a three-part English text.

## What to edit

- Framework definitions and the four positions: `site/index.html`.
- Personal origin, Smith, Marx, Schultz, Becker, and references: `site/origins.html`.
- Inventory, asset testing, allocation policy, rebalancing, and migration: `site/operating-system.html`.
- Typography, section rules, mobile layout, and print behavior: `site/works.css`.

## Before publishing

1. Keep all public copy in English.
2. Verify every quotation against its linked source.
3. Do not state that Marx proposed human-capital theory; he described labour-power and the labor process within a different theory.
4. Keep Becker's firm-level distinction separate from HCE's broader portability audit.
5. Keep cash flow and feedback as flows; do not list them as asset stocks.
6. Run `npm run build`.
7. Read the files in `dist/` to confirm the chapter order.

Do not add images, embedded media, JavaScript, popups, forms, dashboards, fixed portfolio percentages, or invented results.
