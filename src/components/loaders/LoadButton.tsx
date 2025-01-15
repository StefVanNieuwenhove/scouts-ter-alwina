import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LoadButton = () => {
  return (
    <Button disabled className='w-full' variant='outline'>
      <Loader2 className='animate-spin' />
    </Button>
  );
};

export default LoadButton;
