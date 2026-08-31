export interface Education {
  institution: string;
  institutionUrl?: string;
  /** Path in /public. Falls back to `monogram` when absent. */
  logo?: string;
  monogram: string;
  /** School / college / division line. */
  division?: string;
  divisionUrl?: string;
  degree: string;
  advisor?: string;
  advisorUrl?: string;
  period: string;
  place: string;
}

export interface Experience {
  organization: string;
  organizationUrl?: string;
  logo?: string;
  monogram: string;
  group?: string;
  groupUrl?: string;
  role: string;
  detail?: string;
  period: string;
  place: string;
}

export interface ServiceGroup {
  label: string;
  items: string[];
}

export interface Honor {
  date: string;
  title: string;
  institution?: string;
}

/* No Hangzhou Dianzi University logo exists in the repo, so those rows render a
   monogram instead. Drop `hdu_logo.png` into /public/images and set `logo` to
   swap it in. */
export const education: Education[] = [
  {
    institution: 'Northeastern University',
    institutionUrl: 'https://northeastern.edu/',
    logo: '/images/logo/neu_logo.png',
    monogram: 'NEU',
    division: 'Khoury College of Computer Sciences',
    divisionUrl: 'https://www.khoury.northeastern.edu/',
    degree: 'Ph.D. in Computer Science',
    advisor: 'Prof. Huaizu Jiang',
    advisorUrl: 'https://jianghz.me/',
    period: '2024.09 — present',
    place: 'Boston, USA',
  },
  {
    institution: 'Hangzhou Dianzi University',
    institutionUrl: 'https://iimc.hdu.edu.cn/index',
    logo: '/images/logo/hdu_logo.png',
    monogram: 'HDU',
    degree: 'M.Sc. in Digital Media Technology',
    advisor: 'Prof. Zizhao Wu',
    advisorUrl: 'https://zizhao.me/',
    period: '2021.09 — 2024.06',
    place: 'Hangzhou, China',
  },
  {
    institution: 'Hangzhou Dianzi University',
    institutionUrl: 'https://iimc.hdu.edu.cn/index',
    logo: '/images/logo/hdu_logo.png',
    monogram: 'HDU',
    degree: 'B.Sc. in Digital Media Technology',
    period: '2016.09 — 2020.06',
    place: 'Hangzhou, China',
  },
];

export const experience: Experience[] = [
  {
    organization: 'Northeastern University',
    organizationUrl: 'https://www.northeastern.edu/',
    logo: '/images/logo/neu_logo.png',
    monogram: 'NEU',
    group: 'Visual Intelligence Lab',
    groupUrl: 'https://jianghz.me/',
    role: 'Research Intern',
    period: '2023.06 — 2024.08',
    place: 'US',
  },
  {
    organization: 'Phigent Robotics',
    organizationUrl: 'https://www.phigent.ai/home',
    logo: '/images/logo/phigent_logo.png',
    monogram: 'PR',
    group: 'Algorithm Research Department',
    role: 'Research Intern',
    period: '2023.03 — 2023.06',
    place: 'China',
  },
];

export const service: ServiceGroup[] = [
  {
    label: 'Conference Reviewer',
    items: [
      'CVPR 2024, 2025',
      'ICLR 2025',
      'AAAI 2025',
      'NeurIPS 2024',
      'ACM MM 2023, 2024',
    ],
  },
  {
    label: 'Journal Reviewer',
    items: ['IEEE TPAMI', 'IEEE TMM', 'Neurocomputing'],
  },
];

export const honors: Honor[] = [
  {
    date: '2024.05',
    title: 'Merit Graduated Student',
    institution: 'Hangzhou Dianzi University',
  },
  {
    date: '2023.09',
    title: 'First-Class Academic Scholarship',
    institution: 'Hangzhou Dianzi University',
  },
  {
    date: '2023.06',
    title: "Excellent Master's Thesis Cultivation Program (top 2%)",
  },
  {
    date: '2020.06',
    title: 'Outstanding Undergraduate Thesis',
    institution: 'Hangzhou Dianzi University',
  },
  {
    date: '2019.09',
    title: 'First-Class Academic Scholarship',
    institution: 'Hangzhou Dianzi University',
  },
];
