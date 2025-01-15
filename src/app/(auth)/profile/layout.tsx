import { NavLink } from '@/components/navigation';
import React from 'react';

const ProfileLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <section className='w-full flex gap-4'>
        <nav className='w-max h-[calc(100vh-5rem)] flex flex-col justify-start gap-2 border-r'>
          <NavLink
            name='Profile'
            href='/profile'
            variant={'ghost'}
            className='w-full border-l border-primary rounded-none hover:bg-primary/10'
          />
          <NavLink
            name='Settings'
            href='/profile/settings'
            variant={'ghost'}
            className='w-full border-l border-primary rounded-none hover:bg-primary/10'
          />
        </nav>
        {children}
      </section>
    </>
  );
};

export default ProfileLayout;
