'use client';

import { ranOutOfTreats } from '@/features/addresses/lib/actions';
import { Button } from '@/ui/button';

export default function OutOfTreatsForm({ id }: { id: string }) {
  return (
    <form action={ranOutOfTreats.bind(null, id)}>
      <Button
        variant='link'
        className='text-lg underline'
        type='submit'
        onClick={(e) => {
          if (!confirm('Biztosan elfogyott a cukorka?')) {
            e.preventDefault();
          }
        }}
      >
        Elfogyott a cukorka
      </Button>
    </form>
  );
}
