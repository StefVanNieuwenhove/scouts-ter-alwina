import { getMembers } from '@/data-acces/members';
import { MembersOverviewCols, DataTable } from '@/components/table';

const RVBChildrenPage = async () => {
  const members = await getMembers();
  return (
    <>
      {members?.length ? (
        <DataTable data={members} columns={MembersOverviewCols} />
      ) : (
        <div>No data</div>
      )}
    </>
  );
};

export default RVBChildrenPage;
