import prisma from '@/lib/prisma';
import { MemberCertificate } from '@/lib/types';
import { Member, User } from '@prisma/client';

export const getMembers = async (): Promise<Member[] | null> => {
  try {
    const members = await prisma.member.findMany({
      orderBy: [
        { group: 'asc' },
        { lastname: 'asc' },
        { firstname: 'asc' },
        { dateOfBirth: 'asc' },
      ],
    });
    return members;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getMemberById = async (id: string): Promise<Member | null> => {
  try {
    const member = await prisma.member.findUnique({
      where: {
        id,
      },
      include: {
        camps: true,
        parents: true,
        address: true,
      },
    });
    return member;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getMembersCertificates = async (): Promise<
  MemberCertificate[] | null
> => {
  try {
    const members = await prisma.member.findMany({
      orderBy: [
        { group: 'asc' },
        { lastname: 'asc' },
        { firstname: 'asc' },
        { dateOfBirth: 'asc' },
      ],
      include: {
        parents: true,
        address: true,
        camps: true,
      },
    });

    return members;
  } catch (error) {
    console.error(error);
    return null;
  }
};
