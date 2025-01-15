import { NavLink } from '@/components/navigation';
import { H2 } from '@/components/typography';
import { RvbLinks } from '@/lib/links';
import React from 'react';

const RVBDefaultPage = () => {
  return (
    <div>
      <H2>RVB links</H2>
      <nav className='w-max flex flex-col gap-2'>
        {RvbLinks.map((link) => (
          <NavLink key={link.href} name={link.name} href={link.href} />
        ))}
      </nav>
    </div>
  );
};

export default RVBDefaultPage;
