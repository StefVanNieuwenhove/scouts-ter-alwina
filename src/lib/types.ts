import { Group, Member, Prisma, User } from '@prisma/client';
import { ReactNode } from 'react';

export type FormResponse = {
  message: string;
  type: 'success' | 'error';
};

export type CreateUserProps = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
export type UserSession = Omit<User, 'password'>;

export type SessionPayload = {
  user: UserSession;
};

export type VerifySession = {
  user: UserSession | null;
  isAuth: boolean;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type ForgotPasswordProps = {
  email: string;
  password: string;
};

export type Link = {
  name: string;
  href: string;
  icon: ReactNode;
  current?: boolean;
  disabled?: boolean;
  subnav?: Link[];
};

export type MemberTable = {
  firstName: Member['firstname'];
  lastName: Member['lastname'];
  group: Group;
  dateOfBirth: Member['dateOfBirth'];
  nationalNumber: Member['nationalNumber'];
};

export type MemberCertificate = Prisma.MemberGetPayload<{
  include: {
    address: true;
    parents: true;
    //ParentsWithAddress: true;
    camps: true;
  };
}>;

export type ParentsWithAddress = Prisma.UserGetPayload<{
  include: {
    address: true;
  };
}>;
