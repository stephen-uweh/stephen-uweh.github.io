import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  php,
  python,
  laravel,
  mysql,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  mongo,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  ehiotech,
  syncteams, 
  revva,
  heatmap,
  reedtech,
  bigbot,
  adlantique,
  abokie,
  mgplatform
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: backend,
  }
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Pythom',
    icon: python,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'MongoDB',
    icon: mongo,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Heatmap.com',
    icon: heatmap,
    iconBg: '#333333',
    date: 'May 2024 - Present'
  },
  {
    title: 'Backend Engineer',
    company_name: 'Revva',
    icon: revva,
    iconBg: '#333333',
    date: 'Mar 2023 - May 2024',
  },
  {
    title: 'Software Engineer',
    company_name: 'Syncteams',
    icon: syncteams,
    iconBg: '#333333',
    date: 'July 2022 - Apr 2023',
  },
  {
    title: 'Software Engineer',
    company_name: 'Ehio Technologies',
    icon: ehiotech,
    iconBg: '#333333',
    date: 'Feb 2022 - Aug 2022',
  },
  {
    title: 'Backend Engineer',
    company_name: 'Reed Tech NG',
    icon: reedtech,
    iconBg: '#333333',
    date: 'Jan 2021 - Nov 2021',
  },
  {
    title: 'Software Engineer',
    company_name: 'BigBot NG',
    icon: bigbot,
    iconBg: '#333333',
    date: 'Sep 2019 - Mar 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Abokie',
    description: 'A crypto trading platform',
    tags: [],
    image: abokie,
    repo: '',
    demo: 'https://www.abokie.com',
  },
  {
    id: 'project-2',
    name: 'MG Platform',
    description: 'MG Platform provides next-level insights and analytics for all parts of the powerhouse (MG Influencer, MG Media, MG Studio and MG Sprint)',
    tags: [],
    image: mgplatform,
    repo: '',
    demo: 'https://mgempower.com/mg-platform',
  },
  {
    id: 'project-3',
    name: 'Adlantique',
    description: 'Adlantique Global Marketing Limited, where digital innovation meets marketing excellence. We are a forward-thinking, results-driven agency focused on helping businesses hack digital success, regardless of their size or audience.',
    tags: [],
    image: adlantique,
    repo: '',
    demo: 'https://adlantique.com',
  }
];

export { services, technologies, experiences, projects };
