import { NavLink } from '@/components/navigation';
import React from 'react';

const FiscalityLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className='mb-2 flex gap-2'>
        <NavLink href='/rvb/fiscality' name='Leden attest' />
        <NavLink href='/rvb/fiscality/attest' name='Bestand' />
      </nav>
      <div>{children}</div>
    </>
  );
};

export default FiscalityLayout;
