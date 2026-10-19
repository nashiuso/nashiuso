/**
 * Nashiuso Terminal Portfolio
 * Author: Nashiuso
 * GitHub: https://github.com/nashiuso
 * License: MIT
 */
import type { Skill, Topic } from './types';

export const topics: Topic[] = [
  {
    id: '01',
    name: 'SYSTEMS-PROGRAMMING',
    url: 'https://github.com/topics/systems-programming',
    page: 'P.12',
  },
  { id: '02', name: 'OPEN-SOURCE', url: 'https://github.com/topics/open-source', page: 'P.66' },
  {
    id: '03',
    name: 'DEVELOPER-TOOLS',
    url: 'https://github.com/topics/developer-tools',
    page: 'P.100',
  },
  {
    id: '04',
    name: 'INTERFACE-DESIGN',
    url: 'https://github.com/topics/interface-design',
    page: 'P.122',
  },
  { id: '05', name: 'LINUX', url: 'https://github.com/topics/linux', page: 'P.145' },
  { id: '06', name: 'RUST', url: 'https://github.com/topics/rust', page: 'P.194' },
  { id: '07', name: 'WEB-DEV', url: 'https://github.com/topics/web-development', page: 'P.210' },
  {
    id: '08',
    name: 'CYBERSECURITY',
    url: 'https://github.com/topics/cybersecurity',
    page: 'P.245',
  },
  { id: '09', name: 'NETWORKING', url: 'https://github.com/topics/networking', page: 'P.280' },
  { id: '10', name: 'DATABASES', url: 'https://github.com/topics/database', page: 'P.310' },
  {
    id: '11',
    name: 'CLOUD-COMPUTING',
    url: 'https://github.com/topics/cloud-computing',
    page: 'P.355',
  },
  {
    id: '12',
    name: 'AI-AND-ML',
    url: 'https://github.com/topics/artificial-intelligence',
    page: 'P.390',
  },
];

export const skills: Skill[] = [
  { id: 'cpp', name: 'C++', url: 'https://isocpp.org/' },
  { id: 'rust', name: 'Rust', url: 'https://www.rust-lang.org/' },
  { id: 'go', name: 'Go', url: 'https://go.dev/' },
  { id: 'ts', name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { id: 'js', name: 'JavaScript', url: 'https://developer.mozilla.org/' },
  { id: 'py', name: 'Python', url: 'https://www.python.org/' },
  { id: 'cs', name: 'C#', url: 'https://dotnet.microsoft.com/' },
  { id: 'react', name: 'React', url: 'https://react.dev/' },
  { id: 'nextjs', name: 'Next.js', url: 'https://nextjs.org/' },
  { id: 'astro', name: 'Astro', url: 'https://astro.build/' },
  { id: 'vue', name: 'Vue', url: 'https://vuejs.org/' },
  { id: 'debian', name: 'Debian', url: 'https://www.debian.org/' },
  { id: 'windows', name: 'Windows', url: 'https://www.microsoft.com/windows' },
  { id: 'docker', name: 'Docker', url: 'https://www.docker.com/' },
];
