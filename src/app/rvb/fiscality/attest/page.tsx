'use client';

import { FiscalityCert } from '@/components/pdf';
import { PDFViewer } from '@react-pdf/renderer';

const page = () => {
  return (
    <section className='w-full h-full'>
      <PDFViewer className='w-full h-[calc(100vh-5rem)]'>
        <FiscalityCert {...mockdata} />
      </PDFViewer>
    </section>
  );
};

export default page;

const mockdata = {
  parents: [
    {
      firstname: 'Joeri',
      lastname: 'Leupe',
      nationalNumber: '91093031559',
      address: {
        street: 'Driesstraat 7a',
        houseNumber: '1790',
        zipcode: '1790',
        city: 'Affligem',
      },
    },
  ],
  camps: [
    {
      name: 'Camping',
      description: 'Camping in de buurt',
      startDate: new Date(),
      endDate: new Date(),
      totalDays: 10,
      location: 'Camping in de buurt',
      dailyCost: 10,
      amountReceived: 10,
      members: [
        {
          firstname: 'Joeri',
          lastname: 'Leupe',
          nationalNumber: '91093031559',
          address: {
            street: 'Driesstraat 7a',
            houseNumber: '1790',
            zipcode: '1790',
            city: 'Affligem',
          },
        },
      ],
    },
  ],
  address: {
    street: 'Driesstraat 7a',
    houseNumber: '1790',
    zipcode: '1790',
    city: 'Affligem',
  },
  firstname: 'Joeri',
  lastname: 'Leupe',
  nationalNumber: ' 90193031559',
};
