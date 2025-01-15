import 'server-only';

import { env } from '@/env';
import { SessionPayload, VerifySession } from './types';
import { JWTPayload, SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { cache } from 'react';
import { Role } from '@prisma/client';

const TOKEN_NAME = env.TOKEN_NAME;
const SESSION_SECRET = new TextEncoder().encode(env.SESSION_SECRET);
const NODE_ENV = env.NODE_ENV;

export const encrypt = (payload: SessionPayload, expire: Date) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuer('auth')
    .setExpirationTime(expire)
    .setIssuedAt()
    .sign(SESSION_SECRET);
};

export const decrypt = async (
  token: string | undefined = ''
): Promise<JWTPayload | null> => {
  try {
    // token regex
    const tokenRegex = /^[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+$/;
    if (!token || !tokenRegex.test(token)) {
      return null;
    }
    const { payload } = await jwtVerify(token || '', SESSION_SECRET, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.error('Error decrypting token:', error);
    return null;
  }
};

export const createSession = async (payload: SessionPayload) => {
  const expire = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const token = await encrypt(payload, expire);

  (await cookies()).set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: NODE_ENV === 'production',
    expires: expire,
    sameSite: 'lax',
    path: '/',
  });
};

export const updateSession = async () => {
  const token = (await cookies()).get(TOKEN_NAME)?.value;
  const payload = await decrypt(token);

  if (!payload || !token) {
    return null;
  }

  const expire = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  const coockieStore = await cookies();
  coockieStore.set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: NODE_ENV === 'production',
    expires: expire,
    sameSite: 'lax',
    path: '/',
  });
};

export const deleteSession = async () => {
  const coockieStore = await cookies();
  coockieStore.delete(TOKEN_NAME);
};

// DAL
export const getSession = cache(async (): Promise<VerifySession> => {
  const token = (await cookies()).get(TOKEN_NAME)?.value;
  const payload = await decrypt(token);

  if (!payload || !token) {
    return {
      user: null,
      isAuth: false,
    };
  }

  return {
    user: payload.user as SessionPayload['user'],
    isAuth: payload ? true : false,
  };
});

export const hasAcces = async (role: Role[], route: string) => {
  const routesByUser = {
    ADMIN: ['/admin', '/admin/users'],
    RVB: ['/rvb', '/profile'],
    KAPOENENLEIDING: ['/camps', '/camps/create'],
    WOUTERLEIDING: ['/camps', '/camps/create'],
    JONGGIVERLEIDING: ['/camps', '/camps/create'],
    GIVERLEIDING: ['/camps', '/camps/create'],
    JINLEIDING: ['/camps', '/camps/create'],
    GROEPSLEIDING: ['/camps', '/camps/create'],
    PARENT: ['/camps', '/camps/create'],
    KAPOEN: ['/camps', '/camps/create'],
    WOUTER: ['/camps', '/camps/create'],
    JONGGIVER: ['/camps', '/camps/create'],
    GIVER: ['/camps', '/camps/create'],
    JIN: ['/camps', '/camps/create'],
    UNKNOWN: ['/camps', '/camps/create'],
  };

  const user = await getSession();
};
