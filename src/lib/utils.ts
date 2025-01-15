import { Role } from '@prisma/client';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const castToRole = (role: string): Role => {
  switch (role.toLowerCase()) {
    case 'kapoenenleiding':
      return Role.KAPOENENLEIDING;
    case 'wouterleiding':
      return Role.WOUTERLEIDING;
    case 'jonggiverleiding':
      return Role.JONGGIVERLEIDING;
    case 'giverleiding':
      return Role.GIVERLEIDING;
    case 'jinleiding':
      return Role.JINLEIDING;
    case 'groepsleiding':
      return Role.GROEPSLEIDING;
    case 'rvb':
      return Role.RVB;
    case 'parent':
      return Role.PARENT;
    case 'admin':
      return Role.ADMIN;
    case 'kapoen':
      return Role.KAPOEN;
    case 'wouter':
      return Role.WOUTER;
    case 'jonggiver':
      return Role.JONGGIVER;
    case 'giver':
      return Role.GIVER;
    case 'jin':
      return Role.JIN;
    default:
      return Role.UNKNOWN;
  }
};

export const formatNationalNumber = (nationalNumber: string): string => {
  return nationalNumber
    .trim()
    .replace(/(\d{2})(\d{2})(\d{2})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};
