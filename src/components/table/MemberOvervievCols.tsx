'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Member } from '@prisma/client';
import { format } from 'date-fns';
import { nlBE } from 'date-fns/locale';

const MembersOverviewCols: ColumnDef<Member>[] = [
  {
    accessorKey: 'firstName',
    accessorFn: (row) => row.firstname,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='hover:bg-primary'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Voornaam
          <ArrowUpDown className='w-4 h-4 ml-2' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'lastName',
    accessorFn: (row) => row.lastname,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='hover:bg-primary'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Familienaam
          <ArrowUpDown className='w-4 h-4 ml-2' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'group',
    accessorFn: (row) => row.group.toLowerCase(),
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='hover:bg-primary'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Tak
          <ArrowUpDown className='w-4 h-4 ml-2' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'dateOfBirth',
    accessorFn: (row) =>
      format(row.dateOfBirth, 'dd-MM-yyyy', { locale: nlBE }),
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='hover:bg-primary text-center'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Geboortedatum
          <ArrowUpDown className='w-4 h-4 ml-2' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'nationalNumber',
    accessorFn: (row) => row.nationalNumber,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='hover:bg-primary'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Rijsregister nr
          <ArrowUpDown className='w-4 h-4 ml-2' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'taxFiles',
    accessorFn: (row) => row.id,
    header: () => {
      return (
        <Button variant='ghost' className='hover:bg-primary'>
          Geneer Attest
        </Button>
      );
    },
  },
];

export default MembersOverviewCols;
