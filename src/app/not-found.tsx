import { Button } from '@/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-10 text-center font-sans md:text-lg'>
      <h1 className='text-primary m-0 text-3xl font-bold tracking-wider md:text-4xl'>
        404 - Az oldal nem található
      </h1>
      <p className='w-[90%] tracking-wide'>
        Az oldal, amit keresel, nem található.
      </p>
      <Button
        asChild
        className='md:text-lg'
      >
        <Link
          href='/'
          replace
        >
          Vissza a főoldalra
        </Link>
      </Button>
    </main>
  );
}
