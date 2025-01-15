import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {
  BreadCrumbs,
  NavLink,
  ScreenSize,
  SideBar,
  SignOutButton,
} from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { H1 } from '@/components/typography';
import { getSession } from '@/lib/auth';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    template: 'Scouts ter Alwina | %s',
    default: 'Scouts ter Alwina',
  },
  description: '',
  authors: [
    {
      name: 'Stef van Nieuwenhove',
      url: 'https://github.com/stefvannieuwenhove',
    },
  ],
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isAuth } = await getSession();
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider defaultOpen={false}>
          <SideBar />
          <main className='container mx-auto w-full min-h-screen max-h-full'>
            <H1 className='md:hidden text-center underline py-1 text-primary'>
              Scouts Ter Alwina
            </H1>
            <div className='w-full h-fit flex justify-between items-center gap-6 border-b py-1 mb-2'>
              <div className='flex items-center gap-6'>
                <SidebarTrigger />
                <BreadCrumbs />
              </div>
              <H1 className='hidden md:block'>Scouts Ter Alwina</H1>
              <div className='flex items-center gap-1'>
                {isAuth ? (
                  <>
                    <SignOutButton />
                  </>
                ) : (
                  <>
                    <NavLink name='Registreer' href='/sign-up' />
                    <NavLink name='Login' href='/sign-in' />
                  </>
                )}
              </div>
            </div>
            {children}
          </main>
        </SidebarProvider>
        <Toaster richColors theme='light' duration={4000} expand closeButton />
        <ScreenSize />
      </body>
    </html>
  );
};

export default RootLayout;
