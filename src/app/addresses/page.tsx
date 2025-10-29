import AddressList from '@/ui/components/address-list';
import { AddressListSkeleton } from '@/ui/skeletons';
import { Suspense } from 'react';

export default async function AddressPage() {
  return (
    <main className='min-h-screen px-5 py-20 font-sans md:p-20'>
      <Suspense fallback={<AddressListSkeleton />}>
        <AddressList />
      </Suspense>
    </main>
  );
}
