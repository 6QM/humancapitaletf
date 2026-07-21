# Website context

This directory contains the production source for humancapitaletf.com.

The active site is the pure HTML/CSS book in `site/`. It has two pages per language: the Human Capital ETF framework and its intellectual origins. `npm run build` validates and copies this source to `dist/`.

Requirements:

- keep `/zh` and `/en` semantically aligned;
- keep the active site free of images, SVG, canvas, client JavaScript, frameworks, and remote fonts;
- use serif body typography and restrained book-style layout;
- preserve accurate source boundaries, especially between Marx's labour-power and modern human-capital theory;
- use real primary or authoritative sources;
- preserve the relationship between Human Capital ETF, The Worker Investor, and 69mike.com;
- do not introduce invented allocations, reports, experiments, or performance claims;
- run `npm run build` before handoff.

The older Next.js files are retained only as historical working material and are not included in the active build.
