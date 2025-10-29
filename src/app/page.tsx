import { Button } from '@/ui/button';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-10 text-center font-sans md:gap-14 md:text-lg'>
      <h1 className='text-primary m-0 text-3xl font-bold tracking-wider md:text-4xl'>
        Csokit vagy csalunk!
      </h1>
      <p className='dark:text-muted-foreground w-[90%] tracking-wide'>
        Cukorkát keresel, vagy te kínálsz? Válassz, melyik oldalán állsz a
        Halloweennek 🎃
      </p>
      <section className='flex items-center justify-center gap-4 md:gap-8'>
        <Button
          asChild
          className='w-1/2 md:w-2/3 md:text-lg'
        >
          <Link href='/addresses'>Felfedezem a címeket</Link>
        </Button>
        <Button
          asChild
          className='w-1/2 md:w-2/3 md:text-lg'
        >
          <Link href='/addresses/new'>Cukorkát kínálok</Link>
        </Button>
      </section>
    </main>
  );
}
