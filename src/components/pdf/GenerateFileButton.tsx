'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '../ui/button';
import FiscalityCert from './FiscalityCert';
import { MemberCertificate } from '@/lib/types';

type GenerateFileButtonProps = {
  data: MemberCertificate;
};

const GenerateFileButton = ({ data }: GenerateFileButtonProps) => {
  console.log(data);
  return (
    <>
      <PDFDownloadLink
        fileName={`attest-${data.firstname}_${data.lastname.replace(
          ' ',
          '_'
        )}.pdf`}
        document={<FiscalityCert {...data} />}>
        {({ url, loading }) => {
          return (
            <Button
              onClick={loading ? () => {} : url}
              disabled={loading}
              className='bg-primary text-white'>
              Download
            </Button>
          );
        }}
      </PDFDownloadLink>
    </>
  );
};

export default GenerateFileButton;
