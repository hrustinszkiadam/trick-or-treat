import { Button } from '@/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-10 text-center font-sans md:text-lg'>
      <h1 className='text-primary m-0 flex flex-col items-center justify-center text-4xl font-bold tracking-wider'>
        <span>404</span>
        <span className='text-3xl'>Az oldal nem található</span>
      </h1>
      <p className='m-0 w-[90%] tracking-wide'>
        Az oldal, amit keresel, nem található. Lehet, hogy el lett távolítva,
        átnevezve, vagy ideiglenesen nem elérhető.
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
