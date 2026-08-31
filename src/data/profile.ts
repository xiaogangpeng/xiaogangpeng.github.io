export interface SocialLink {
  label: string;
  href?: string;
  icon: 'scholar' | 'github' | 'email' | 'blog' | 'wechat' | 'x';
  /** Set instead of `href` for handles that have no web page (e.g. WeChat).
      Renders a button that copies the value to the clipboard. */
  copy?: string;
  /** Brand colour for the icon tile. */
  brand: string;
  /** Override when the light-mode brand colour disappears on a dark surface. */
  brandDark?: string;
}

export interface Role {
  label: string;
  value: string;
  href?: string;
}

export const profile = {
  name: 'Xiaogang Peng',
  /* Add a Chinese name here to render it beside the Latin one, e.g. '彭晓刚'.
     Left null because guessing the characters would be wrong. */
  altName: null as string | null,

  /* NOTE: the old site said "first-year PhD student", which went stale.
     Kept year-free on purpose so it never needs an annual edit. */
  headline: 'PhD Student in Computer Science',
  location: 'Boston, MA, United States',
  email: 'peng.xiaog@northeastern.edu',
  scholarId: 'xAauT2MAAAAJ',

  /* Shown large in the hero; the emphasis span is the bolded fragment. */
  tagline: {
    before: 'Toward machines that understand and generate ',
    emphasis: 'human behavior',
    after: '.',
  },

  /* Optional full-bleed photo behind the hero (e.g. '/images/hero-bg.jpg').
     Falls back to a soft gradient wash when null. */
  heroBackground: null as string | null,

  /* Hero portrait. Derived from IMG_4619.jpg: cropped to 4:5 and resized to 2x
     the rendered width (768 KB -> 38 KB jpg / 16 KB webp). */
  portrait: {
    jpg: '/images/avatar/hero-portrait.jpg',
    webp: '/images/avatar/hero-portrait.webp',
    alt: 'Xiaogang Peng',
  },

  /* Repo that hosts the Google Scholar stats branch. Must be "owner/repo" —
     the old _config.yml was missing the owner, which broke the citation badge. */
  repository: 'xiaogangpeng/xiaogangpeng.github.io',

  roles: [
    {
      label: 'PhD Student',
      value: 'Northeastern University',
      href: 'https://www.khoury.northeastern.edu/',
    },
    { label: 'Advised by', value: 'Prof. Huaizu Jiang', href: 'https://jianghz.me/' },
    { label: 'Focus', value: 'Human Behavior & Physical AI' },
  ] satisfies Role[],

  interests: [
    // 'Computer Vision',
    // 'Deep Learning',
    'Character Animation',
    'Physics-based Simulation',
    'Human Behavior Modeling',
    'Physical AI',
  ],

  bioHtml: [
    'I am a PhD student at the <a href="https://www.khoury.northeastern.edu/">Khoury College of Computer Sciences</a>, <a href="https://northeastern.edu/">Northeastern University</a>, supervised by <a href="https://jianghz.me/">Prof. Huaizu Jiang</a>. Before that, I received my Bachelor’s and Master’s degrees from <a href="https://iimc.hdu.edu.cn/index">Hangzhou Dianzi University</a>.',
    'My research centers on <strong>character animation</strong>, <strong>physics-based simulation</strong>, and <strong>human behavior modeling</strong>, working toward <strong>physical AI</strong>. In my spare time I take photos and videos — some of my small works are on my <a href="https://xiaogangpeng.github.io/blogs/dist">personal blog</a>.',
  ],

  socials: [
    {
      label: 'Email',
      href: 'mailto:peng.xiaog@northeastern.edu',
      icon: 'email',
      brand: '#0b57d0',
    },
    {
      label: 'Scholar',
      href: 'https://scholar.google.com/citations?user=xAauT2MAAAAJ',
      icon: 'scholar',
      brand: '#4285f4',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/xiaogangpeng',
      icon: 'github',
      brand: '#181717',
      brandDark: '#3a3f47',
    },
    {
      label: 'X',
      href: 'https://x.com/EricPeng1207',
      icon: 'x',
      /* Official X black. Like GitHub, it vanishes on a dark surface, so it
         carries a lighter override. */
      brand: '#000000',
      brandDark: '#3a3f47',
    },
    {
      label: 'Blog',
      href: 'https://xiaogangpeng.github.io/blogs/dist',
      icon: 'blog',
      brand: '#e8710a',
    },
    {
      label: 'WeChat',
      /* No web profile exists for a WeChat ID, so this copies the handle
         instead of linking to a path that would 404. */
      copy: 'ericpeng1207',
      icon: 'wechat',
      brand: '#07C160',  // official WeChat green
    },
  ] satisfies SocialLink[],
} as const;

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'news', label: 'News' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'honors', label: 'Honors' },
] as const;
