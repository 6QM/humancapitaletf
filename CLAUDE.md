# Website context

This directory contains the production source for humancapitaletf.com.

The active site is an English-only HTML/CSS text in `site/`. It has three pages: the Human Capital ETF framework, its intellectual origins, and its operating policy. `npm run build` validates and copies this source to `dist/`.

Requirements:

- keep the active site English-only;
- follow the restrained structure of an online primary-source archive;
- keep the active site free of images, SVG, canvas, client JavaScript, frameworks, and remote fonts;
- use a white background, serif body text, dark-blue centered headings, ordinary text links, and inline contents;
- preserve accurate source boundaries, especially between Marx's labour-power and modern human-capital theory;
- preserve the distinction among asset stocks, return flows, infrastructure, and social capital;
- preserve Meta as both a functional position and the portfolio governance layer;
- use real primary or authoritative sources;
- do not introduce invented allocations, reports, experiments, or performance claims;
- run `npm run build` before publishing.

The older Next.js files are retained only as historical working material and are not included in the active build.
