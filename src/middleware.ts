import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decrypt, hasAcces } from './lib/auth';
import { env } from './env';
import { UserSession } from './lib/types';
import { Role } from '@prisma/client';

const TOKEN_NAME = env.TOKEN_NAME;

// 1. Specify protected and public routes
const protectedRoutes = ['/rvb', '/profile'];
const publicRoutes = ['/', '/sign-in', '/sign-up', '/forgot-password'];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get(TOKEN_NAME)?.value;
  const session = await decrypt(cookie);
  const user: UserSession = session?.user as UserSession;

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl));
  }

  if (isProtectedRoute && user && !hasAcces(user.role as Role, path)) {
    return NextResponse.redirect(new URL('/403', req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
