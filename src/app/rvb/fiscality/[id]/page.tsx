import { getMemberById } from '@/data-acces/members';
type FiscalityFileMemberProps = {
  params: { id: string };
};

const FiscalityFileMember = async ({ params }: FiscalityFileMemberProps) => {
  const member = await getMemberById(params.id);

  return <div>{JSON.stringify(member)}</div>;
};

export default FiscalityFileMember;
