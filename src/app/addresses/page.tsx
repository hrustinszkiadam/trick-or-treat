import AddressList from '@/ui/components/address-list';
import Summary from '@/ui/components/summary';
import { AddressListSkeleton, SummarySkeleton } from '@/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Házak',
};

export default async function AddressPage() {
  return (
    <main className='min-h-screen px-5 py-20 font-sans md:p-20'>
      <Suspense fallback={<SummarySkeleton />}>
        <Summary />
      </Suspense>
      <Suspense fallback={<AddressListSkeleton />}>
        <AddressList />
      </Suspense>
    </main>
  );
}
