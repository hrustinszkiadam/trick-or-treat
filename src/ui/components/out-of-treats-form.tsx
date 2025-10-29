'use client';

import { ranOutOfTreats } from '@/features/addresses/lib/actions';
import { Address } from '@/lib/definitions';
import { Button } from '@/ui/button';

export default function OutOfTreatsForm({
  id,
  firstName,
  lastName,
}: Pick<Address, 'id' | 'firstName' | 'lastName'>) {
  return (
    <form action={ranOutOfTreats.bind(null, id)}>
      <Button
        variant='link'
        className='text-lg tracking-widest underline'
        type='submit'
        onClick={(e) => {
          if (
            !confirm(
              `Biztosan elfogyott a cukorka ${lastName} ${firstName} házánál?`,
            )
          ) {
            e.preventDefault();
          }
        }}
      >
        Elfogyott a cukorka?
      </Button>
    </form>
  );
}
