import { Link } from 'lucide-react';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardAction, CardContent } from './card';
import Form from './components/create-address';

export function AddressCardSkeleton() {
  return (
    <div className='bg-foreground flex h-60 w-full animate-pulse flex-col justify-between rounded-md p-4'>
      <div className='space-y-2'>
        <div className='bg-background h-4 w-full rounded-md' />
        <div className='bg-background h-4 w-2/3 rounded-md' />
      </div>
      <div className='space-y-4'>
        <div className='bg-background mx-auto h-6 w-3/4 rounded-md' />
        <div className='bg-background mx-auto h-6 w-1/3 rounded-md' />
      </div>
      <div className='bg-background mx-auto h-6 w-1/3 rounded-md' />
    </div>
  );
}

export function AddressListSkeleton() {
  return (
    <section className='grid h-full w-full gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16'>
      {Array.from({ length: 9 }).map((_, index) => (
        <AddressCardSkeleton key={index} />
      ))}
    </section>
  );
}

export function SummarySkeleton() {
  return (
    <div className='bg-foreground flex h-48 w-full animate-pulse flex-col justify-between rounded-md p-8'>
      <div className='flex justify-between'>
        <div className='bg-background h-8 w-1/3 rounded-md' />
        <div className='bg-background h-8 w-1/3 rounded-md' />
      </div>
      <div className='space-y-4'>
        <div className='flex justify-center space-x-8'>
          <div className='bg-background h-4 w-1/3 rounded-md' />
          <div className='bg-background h-4 w-1/3 rounded-md' />
        </div>
        <div className='flex justify-center space-x-8'>
          <div className='bg-background h-4 w-1/3 rounded-md' />
          <div className='bg-background h-4 w-1/3 rounded-md' />
        </div>
      </div>
    </div>
  );
}

export function AddressPageSkeleton() {
  return (
    <main className='flex min-h-screen flex-col gap-16 px-5 py-20 font-sans md:p-20 lg:py-32'>
      <SummarySkeleton />
      <AddressListSkeleton />
    </main>
  );
}
