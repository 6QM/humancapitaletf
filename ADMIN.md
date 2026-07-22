# Content and publishing guide

The public site is a three-part English text.

## What to edit

- Framework definition, Allocation Ledger, and four positions: `site/index.html`.
- Personal origin, Smith, Marx, Schultz, Becker, and references: `site/origins.html`.
- Inventory, asset status, policy template, rebalancing, mechanisms, and case: `site/operating-system.html`.
- Typography, navigation, mobile layout, policy sheet, and print behavior: `site/works.css`.
- Legacy redirects and security headers: `vercel.json`.

## Editorial rules

1. Keep all public copy in English.
2. Treat ETF as an allocation metaphor, not a security, index claim, or return forecast.
3. Keep the Allocation Ledger separate from the four functional positions.
4. Keep asset stocks, return flows, outcomes, constraints, and exposures distinct.
5. Treat portability as a quality and concentration-risk dimension, not a condition that determines whether an asset exists.
6. Treat Meta as the governance position, not an ordinary asset basket.
7. Do not state that Marx proposed human-capital theory; he described labour-power and the labor process within a different theory.
8. Keep employer-confidential information and employer-owned intellectual property outside the personal asset ledger.
9. Do not treat another person or a relationship as owned property.
10. Verify every quotation against the linked source.

## Before publishing

1. Update the visible edition date and every sitemap `lastmod` when the public text materially changes.
2. Run `npm run build`.
3. Read all files in `dist/` in order.
4. Check the three canonical routes, the custom 404, redirects, response headers, mobile layout, and print preview.
5. After a major rewrite, submit the three canonical URLs and sitemap for search re-indexing.

Do not add images, embedded media, JavaScript, popups, forms, dashboards, fixed portfolio percentages, invented experiments, or performance claims.
