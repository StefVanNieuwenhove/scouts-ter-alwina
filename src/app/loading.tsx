import { Spinner } from '@/components/loaders';

const loading = () => {
  return (
    <main className='flex w-full min-h-screen items-center justify-center'>
      <Spinner />
    </main>
  );
};

export default loading;
