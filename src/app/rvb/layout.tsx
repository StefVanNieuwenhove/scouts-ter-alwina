import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RVB',
};

const RVBLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div>{children}</div>;
};

export default RVBLayout;
