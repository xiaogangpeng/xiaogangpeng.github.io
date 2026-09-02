export interface NewsItem {
  /** "YYYY.MM" — sorted descending by this string. */
  date: string;
  html: string;
  /** Draws the accent dot; use for acceptances and releases. */
  highlight?: boolean;
}

/* The old site had exactly one entry (2023.02) and had gone stale.
   The CVPR 2025 entry below is derived from the publication list; PLEASE VERIFY
   the month before publishing, and keep adding entries here as things land. */
/** Rows shown before the "Show more" disclosure. */
export const newsVisibleCount = 5;

export const news: NewsItem[] = [

  {
    date: '2026.08',
    html: 'Our paper <a href="https://github.com/neu-vi/SK-HOI">SK-HOI</a> is conditionally accepted by <strong>SIGGRAPH 2026 Asia</strong>.',
    highlight: true,
  },
  
  {
    date: '2025.02',
    html: 'Our paper <a href="https://github.com/neu-vi/MARDM">MARDM</a> is accepted by <strong>CVPR 2025</strong>.',
    highlight: true,
  },

  {
    date: '2025.05',
    html: 'Our paper <a href="https://github.com/neu-vi/HOI-Diff">HOI-Diff</a> is accepted by <strong>CVPR 2025 Workshop of HuMoGen</strong>.',
    highlight: true,
  },

  {
    date: '2023.02',
    html: 'Our paper <a href="https://github.com/neu-vi/HOI-Diff">TBIformer</a> is accepted by <strong>CVPR 2023</strong>.',
    highlight: true,
  },
];
