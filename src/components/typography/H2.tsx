import React from 'react';

const H2 = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
      {children}
    </h2>
  );
};

export default H2;
