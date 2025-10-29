import { getSummary } from '@/features/addresses/lib/actions';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '../card';
import { Button } from '../button';
import Link from 'next/link';

export default async function Summary() {
  const { addressCount, withTreats, withDietaryAlternatives } =
    await getSummary();
  return (
    <Card className='bg-transparent tracking-wider shadow-lg backdrop-blur-xs'>
      <CardHeader className='justify-between'>
        <CardTitle className='text-2xl lg:text-3xl'>Összegzés</CardTitle>
        <CardAction>
          <Button>
            <Link href='/'>Vissza</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className='grid items-center gap-4 text-center text-lg md:grid-cols-2 md:text-xl'>
        <SummaryText
          title='Van édesség'
          text={`${withTreats}/${addressCount} db`}
        />
        <SummaryText
          title='Van alternatíva érzékenységekre'
          text={`${withDietaryAlternatives}/${withTreats} db`}
        />
      </CardContent>
    </Card>
  );
}

export function SummaryText({ title, text }: { title: string; text: string }) {
  return (
    <p className='grid grid-cols-2 place-items-center items-center gap-x-4 gap-y-2 md:grid-cols-1'>
      <span>{title}</span>
      <span className='w-1/3 text-nowrap'>{text}</span>
    </p>
  );
}
