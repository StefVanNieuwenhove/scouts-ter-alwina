'use client';

import { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { usePathname } from 'next/navigation';

const BreadCrumbs = () => {
  const pathname = usePathname().split('/').splice(1);
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {pathname.map((name, index) => (
            <Fragment key={`${name}-${index}`}>
              {index >= 1 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                <BreadcrumbLink
                  className='normal-case hover:underline'
                  href={`/${pathname.slice(0, index + 1).join('/')}`}>
                  {name || 'Home'}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default BreadCrumbs;
