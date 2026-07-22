# Human Capital ETF Website

The English canonical text of the Human Capital ETF framework.

The active website is a three-part open book:

- `site/index.html` — canonical definition, Allocation Ledger, four functional positions, and boundaries;
- `site/origins.html` — personal and intellectual origins, including Smith, Marx, Schultz, and Becker;
- `site/operating-system.html` — inventory, asset status, one-page policy, rebalancing, mechanisms, and a worked engineering case;
- `site/404.html` — a noindex text-only error page;
- `site/works.css` — the complete book and archive visual system.

The design follows online primary-source archives: white paper, dark chapter headings, serif body text, inline contents, section rules, source notes, and ordinary text links. There are no images, client-side scripts, frameworks, remote fonts, forms, dashboards, calculators, or product-interface elements.

## Local reading

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build and validation

```bash
npm run build
```

The build validates the active source before copying it to `dist/`. Among other checks, it enforces:

- English-only HTML and CSS;
- an allowlist of text document file types;
- one H1, one main region, shared series navigation, metadata, and exact canonicals;
- unique titles, descriptions, and element IDs;
- valid same-page and cross-page fragments;
- sitemap parity with all indexable canonical pages;
- a noindex, non-canonical 404 page;
- no images, media, scripts, forms, inline handlers, remote fonts, or legacy calculator claims.

## Canonical model

- The **Allocation Ledger** describes what something is: inputs, embodied stocks, enabling stocks, externalized stocks, return flows, outcomes, constraints, and exposures.
- The four **positions** describe what an allocation is doing now: Core, Growth, Distribution, or Meta.
- The **operating policy** describes which evidence changes the next allocation.
- Migration changes a capability's function; conversion creates another stock; returns enter as flows; reinvestment begins the next allocation.

The older Next.js files remain historical working material and are not part of the active build.
