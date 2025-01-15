import { LoadButton, Spinner } from '@/components/loaders';

const PprofileLoading = async () => {
  return (
    <>
      <section>
        <nav className='w-full flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-5 mb-2'>
          <LoadButton />
          <LoadButton />
        </nav>
        <Spinner />
      </section>
    </>
  );
};

export default PprofileLoading;
