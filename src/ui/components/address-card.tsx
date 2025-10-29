import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/card';
import { Address } from '@/lib/definitions';
import { Activity } from 'react';
import OutOfTreatsForm from './out-of-treats-form';
import { cn, sortedDietaryRestrictions } from '@/lib/utils';

type AddressCardProps = {
  address: Address;
};
export default function AddressCard({ address }: AddressCardProps) {
  const {
    firstName,
    lastName,
    city,
    address: addressLine,
    dietaryRestrictions,
    doesHaveTreats,
  } = address;
  return (
    <Card className='justify-between gap-8 bg-transparent tracking-wider shadow-lg backdrop-blur-xs'>
      <CardHeader>
        <CardTitle
          className={cn('text-lg md:text-xl', {
            'text-muted-foreground': !doesHaveTreats,
          })}
        >
          {lastName} {firstName}
        </CardTitle>
        <CardDescription className='text-foreground'>
          {city}, {addressLine}
        </CardDescription>
      </CardHeader>
      <CardContent className='justify-center text-center'>
        <Activity
          mode={
            dietaryRestrictions.length > 0 && doesHaveTreats
              ? 'visible'
              : 'hidden'
          }
        >
          <h3 className='mx-auto mb-4'>
            A következő érzékenységekre tud figyelni:
          </h3>
          {dietaryRestrictions.length > 0 && (
            <ul className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2 overflow-x-auto lg:gap-x-4 lg:gap-y-4'>
              {sortedDietaryRestrictions(dietaryRestrictions).map(
                (restriction) => (
                  <li
                    className='w-[45%] border px-6 py-1 text-lg md:px-4 lg:px-6'
                    key={restriction}
                  >
                    {restriction}
                  </li>
                ),
              )}
            </ul>
          )}
        </Activity>
        <Activity
          mode={
            dietaryRestrictions.length === 0 && doesHaveTreats
              ? 'visible'
              : 'hidden'
          }
        >
          <span>Nem tud érzékenységekre figyelni.</span>
        </Activity>
      </CardContent>
      <Activity mode={doesHaveTreats ? 'visible' : 'hidden'}>
        <CardAction className='mx-auto'>
          <OutOfTreatsForm
            id={address.id}
            firstName={firstName}
            lastName={lastName}
          />
        </CardAction>
      </Activity>
      <Activity mode={!doesHaveTreats ? 'visible' : 'hidden'}>
        <CardFooter className='justify-center'>
          <span className='text-muted-foreground'>
            Sajnos itt már elfogyott az édesség.
          </span>
        </CardFooter>
      </Activity>
    </Card>
  );
}
