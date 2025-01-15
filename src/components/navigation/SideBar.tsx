import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { PublicLinks, RvbLinks } from '@/lib/links';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { ChevronDown, ChevronUp, User } from 'lucide-react';
import { getSession } from '@/lib/auth';
import SignOutButton from './SignOutButton';
import NavLink from './NavLink';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';

const SideBar = async () => {
  const { user, isAuth } = await getSession();
  return (
    <Sidebar side='left' variant='sidebar' collapsible='icon'>
      <SidebarHeader className='flex flex-col items-center justify-center gap-3 mb-2'>
        <Image src='/img/scouts.jpg' width={50} height={50} alt='Scouts logo' />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {PublicLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton asChild>
                    <Link href={link.href} className='flex items-center gap-2'>
                      {link.icon} <span>{link.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <Collapsible title='RVB' defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Raad Van Bestuur
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {RvbLinks.map((link) => (
                    <SidebarMenuItem key={link.href}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={link.href}
                          className='flex items-center gap-2'>
                          {link.icon} <span>{link.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarSeparator />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User />{' '}
                  <span className='tuncate'>{user?.name || 'Sign in'}</span>
                  <ChevronUp className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side='top'
                className='w-[--radix-popper-anchor-width]'>
                {isAuth ? (
                  <>
                    <DropdownMenuItem>
                      <NavLink
                        name='Account'
                        href={'/profile'}
                        variant={'ghost'}
                      />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SignOutButton variant={'ghost'} className='w-full' />
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>
                      <NavLink
                        name='Maak account'
                        href={'/sign-up'}
                        variant={'ghost'}
                      />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <NavLink
                        name='Login'
                        href={'/sign-in'}
                        variant={'ghost'}
                      />
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
