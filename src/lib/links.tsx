import { FileCog, House, Info, Mail, Users } from 'lucide-react';

// public links
export const PublicLinks = [
  {
    name: 'Home',
    href: '/',
    icon: <House />,
  },
  {
    name: 'About',
    href: '/about',
    icon: <Info />,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Mail />,
  },
];

// rvb links
export const RvbLinks = [
  {
    name: 'Fiscaliteit',
    href: '/rvb/fiscality',
    icon: <FileCog />,
    subLinks: [
      {
        name: 'Leden Attest',
        href: '/rvb/fiscality/',
      },
      {
        name: 'Attest',
        href: '/rvb/fiscality/attest',
      },
    ],
  },
  {
    name: 'Leden',
    href: '/rvb/members',
    icon: <Users />,
  },
];
