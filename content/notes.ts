export type NoteMeta = {
  slug: string;
  title: string;
  date: string; // ISO date string for ordering and display
  summary: string;
};

// Notes are ordered newest-first here for simplicity.
export const notes: NoteMeta[] = [
  {
    slug: '2026-03-micro-rebalance',
    title: 'Micro‑rebalance after three months',
    date: '2026-03-01',
    summary:
      'Short field note on how the initial allocation behaved in practice and what changed after the first quarter of the experiment.',
  },
  {
    slug: '2026-02-distribution-friction',
    title: 'Noticing friction in the distribution layer',
    date: '2026-02-01',
    summary:
      'An observation on how writing and video cadence actually behaves when treated as part of a portfolio instead of an afterthought.',
  },
  {
    slug: '2026-01-initial-allocation',
    title: 'Setting the initial allocation',
    date: '2026-01-01',
    summary:
      'A concise record of the starting portfolio across Core, Growth, Distribution, and Meta layers at the moment the experiment began.',
  },
];

