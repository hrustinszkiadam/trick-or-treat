import { Button } from '@/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/ui/card';
import Form from '@/ui/components/create-address';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Új cím',
};

export default async function NewAddressPage() {
  return (
    <main className='min-h-screen px-5 py-20 font-sans md:p-20 lg:py-32'>
      <Card className='mx-auto w-full bg-transparent tracking-wider shadow-lg backdrop-blur-xs md:w-1/2 md:scale-110'>
        <CardHeader className='flex h-full items-center justify-between'>
          <CardTitle className='text-2xl lg:text-3xl'>
            Új cím hozzáadása
          </CardTitle>
          <CardAction className='my-auto'>
            <Button asChild>
              <Link href='/'>Vissza</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className='mt-8'>
          <Form />
        </CardContent>
      </Card>
    </main>
  );
}
