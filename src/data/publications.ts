export interface Author {
  name: string;
  /** Renders bold — the site owner. */
  me?: boolean;
  /** Renders a trailing asterisk — equal contribution. */
  equal?: boolean;
}

export interface Publication {
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  /** Teaser image or gif in /public/images. */
  image: string;
  /** "owner/repo" — drives the shields.io star count badge. */
  starsRepo?: string;
  links?: { label: string; href: string }[];
  /** Shown as a highlighted note, e.g. an award. */
  note?: string;
  /** Short acronym used by the venue summary box. */
  short?: string;
}

/* Author lists preserve the exact ordering and equal-contribution marks
   from the previous site. */
export const publications: Publication[] = [
  {
    title: 'Surface Keypoint Representation for Multi-Object and Articulated Human-Object Interaction Generation',
    short: 'SK-HOI',
    authors: [
      { name: 'Xiaogang Peng', me: true },
      { name: 'Zeyu Han' },
      { name: 'Zichong Meng' },
      { name: 'Yiming Xie' },
      { name: 'Jihua Zhu' },
      { name: 'Gang Hua' },
      { name: 'Huaizu Jiang' },
    ],
    venue: 'SIGGRAPH Asia',
    year: 2026,
    image: '/images/projects/SK-HOI_teaser.gif',
    starsRepo: 'neu-vi/SK-HOI',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2608.03158' },
      { label: 'Code', href: 'https://github.com/neu-vi/SK-HOI' },
      { label: 'Project', href: 'https://neu-vi.github.io/SK-HOI/' },
    ],
  },


  {
    title: 'Rethinking Diffusion for Text-Driven Human Motion Generation',
    short: 'MARDM',
    authors: [
      { name: 'Zichong Meng' },
      { name: 'Yiming Xie' },
      { name: 'Xiaogang Peng', me: true },
      { name: 'Zeyu Han' },
      { name: 'Huaizu Jiang' },
    ],
    venue: 'CVPR',
    year: 2025,
    image: '/images/projects/MARDM_teaser.gif',
    starsRepo: 'neu-vi/MARDM',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2411.16575' },
      { label: 'Code', href: 'https://github.com/neu-vi/MARDM' },
      { label: 'Project', href: 'https://neu-vi.github.io/MARDM/' },
    ],
  },
  {
    title:
      'HOI-Diff: Text-Driven Synthesis of 3D Human-Object Interactions using Diffusion Models',
    short: 'HOI-Diff',
    authors: [
      { name: 'Xiaogang Peng', me: true, equal: true },
      { name: 'Yiming Xie', equal: true },
      { name: 'Zizhao Wu' },
      { name: 'Varun Jampani' },
      { name: 'Deqing Sun' },
      { name: 'Huaizu Jiang' },
    ],
    venue: 'CVPRW',
    year: 2025,
    image: '/images/projects/HOI-Diff_teaser.gif',
    starsRepo: 'neu-vi/HOI-Diff',
    links: [
      /* The old badge was labelled arXiv:2403.07487 but linked to 2312.06553.
         2312.06553 is the real HOI-Diff preprint, so the label is corrected. */
      { label: 'arXiv', href: 'https://arxiv.org/abs/2312.06553' },
      { label: 'Code', href: 'https://github.com/neu-vi/HOI-Diff' },
      { label: 'Project', href: 'https://neu-vi.github.io/HOI-Diff/' },
    ],
  },
  {
    title:
      'Trajectory-Aware Body Interaction Transformer for Multi-Person Pose Forecasting',
    short: 'TBIFormer',
    authors: [
      { name: 'Xiaogang Peng', me: true },
      { name: 'Siyuan Mao' },
      { name: 'Zizhao Wu' },
    ],
    venue: 'CVPR',
    year: 2023,
    image: '/images/projects/TBIFormer_500x300.png',
    starsRepo: 'xiaogangpeng/TBIFormer',
    links: [
      /* Same fix: old label read 2403.07487, link pointed at 2303.05095. */
      { label: 'arXiv', href: 'https://arxiv.org/abs/2303.05095' },
      { label: 'Code', href: 'https://github.com/xiaogangpeng/TBIFormer' },
      {
        label: 'Project',
        href: 'https://xiaogangpeng.github.io/projects/tbiformer/page.html',
      },
    ],
  },
];
