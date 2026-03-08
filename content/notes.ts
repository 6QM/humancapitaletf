export type NoteMeta = {
  slug: string;
  title: string;
  date: string; // ISO date string for ordering and display
  summary: string;
};

// Notes are ordered newest-first.
export const notes: NoteMeta[] = [
  {
    slug: '2026-04-core-assets-audit',
    title: 'Q1 audit: what the core layer actually contains',
    date: '2026-04-01',
    summary:
      'After four months of tagging work to buckets, a closer look at what Core Assets actually means in practice—and why tracking maintenance separately changes the picture.',
  },
  {
    slug: '2026-03-micro-rebalance',
    title: 'Micro-rebalance after three months',
    date: '2026-03-01',
    summary:
      'Short field note on how the initial allocation behaved in practice and what three specific changes were made after the first quarter of the experiment.',
  },
  {
    slug: '2026-02-distribution-friction',
    title: 'Noticing friction in the distribution layer',
    date: '2026-02-01',
    summary:
      'An observation on how writing and video cadence actually behaves when treated as part of a portfolio instead of an afterthought—and what structural adjustment helped.',
  },
  {
    slug: '2026-01-initial-allocation',
    title: 'Setting the initial allocation',
    date: '2026-01-01',
    summary:
      'A concise record of the starting portfolio across Core, Growth, Distribution, and Meta layers at the moment the experiment began.',
  },
  {
    slug: '2025-12-why-this-experiment',
    title: 'Why this experiment exists',
    date: '2025-12-01',
    summary:
      "A preface: why an investor's framework for human capital felt more useful than existing self-improvement models, and what the experiment is actually trying to find out.",
  },
];
