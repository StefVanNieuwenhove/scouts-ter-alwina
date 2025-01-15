import { GenerateFileButton } from '@/components/pdf';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getMembersCertificates } from '@/data-acces/members';

const RVBFiscalityPage = async () => {
  const members = await getMembersCertificates();

  return (
    <section className='w-full h-full'>
      <Table className='border'>
        <TableHeader>
          <TableRow className='bg-primary text-white'>
            <TableHead className='text-center text-white'>Naame</TableHead>
            <TableHead className='text-center text-white'>Tak</TableHead>
            <TableHead className='text-center text-white'>
              Genereer attest
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members?.map((member) => (
            <TableRow key={member.id} className='text-center'>
              <TableHead className='text-center'>{member.firstname}</TableHead>
              <TableHead className='text-center'>{member.lastname}</TableHead>
              <TableHead className='text-center'>
                <GenerateFileButton data={member} />
              </TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default RVBFiscalityPage;
