# Website context

This directory contains the production source for humancapitaletf.com.

The active site is an English-only HTML/CSS book in `site/`. It has three canonical parts and a noindex 404 page. `npm run build` validates and copies this source to `dist/`.

Requirements:

- keep the active site English-only and pure text;
- follow the restrained structure of an online primary-source archive;
- keep the active site free of images, SVG, canvas, client JavaScript, media, forms, frameworks, and remote fonts;
- preserve the shared Part I–III navigation, semantic contents, accessible headings, visible edition date, and previous/next folios;
- preserve accurate source boundaries, especially between Marx's labour-power and modern human-capital theory;
- preserve the canonical Allocation Ledger and distinguish it from the four functional positions;
- preserve the distinction among asset stocks, return flows, outcomes, constraints, infrastructure, and social capital;
- preserve Meta as the governance position;
- distinguish migration, conversion, returns, and reinvestment;
- use real primary or authoritative sources;
- do not introduce invented allocations, fixed returns, reports, experiments, or performance claims;
- run `npm run build` before publishing.

The older Next.js files are retained only as historical working material and are not included in the active build.
