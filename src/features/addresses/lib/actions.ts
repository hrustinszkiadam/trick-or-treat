'use server';

import { db } from '@/database';
import {
  Address,
  DietaryRestriction,
  dietaryRestrictions,
} from '@/lib/definitions';
import { AddressTable } from '../schemas/address.schema';
import { cacheTag, updateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { and, arrayOverlaps, desc, eq } from 'drizzle-orm';
import z from 'zod';

const DietaryRestrictionsSchema = z.enum(dietaryRestrictions);

const AddressSchema = z.object({
  id: z.uuid(),
  firstName: z.string().nonempty('A keresztnév megadása kötelező'),
  lastName: z.string().nonempty('A vezetéknév megadása kötelező'),
  city: z.string().nonempty('A város megadása kötelező'),
  address: z.string().nonempty('Az utca cím megadása kötelező'),
  dietaryRestrictions: z.array(DietaryRestrictionsSchema, {
    error: 'Érvénytelen étrendi korlátozás',
  }),
  doesHaveTreats: z.boolean('Érvénytelen érték a "cukorkája van" mezőben'),
});

const CreateAddressSchema = AddressSchema.omit({
  id: true,
  doesHaveTreats: true,
  dietaryRestrictions: true,
}).extend({
  dietaryRestrictions: z
    .array(DietaryRestrictionsSchema, {
      error: 'Érvénytelen étrendi korlátozás',
    })
    .optional(),
});

const RanOutOfTreatsSchema = AddressSchema.pick({
  id: true,
});

export type State = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    city?: string[];
    address?: string[];
    dietaryRestrictions?: string[];
  };
  message?: string | null;
};

export async function getAddresses(): Promise<Address[]> {
  'use cache';
  cacheTag('addresses');

  return await db.query.AddressTable.findMany({
    orderBy: (address) => [
      desc(address.doesHaveTreats),
      address.lastName,
      address.firstName,
    ],
  });
}

export async function getSummary(): Promise<{
  withTreats: number;
  withDietaryAlternatives: number;
  addressCount: number;
}> {
  'use cache';
  cacheTag('addresses');

  const addressCount = await db.$count(AddressTable);
  const withTreats = await db.$count(
    AddressTable,
    eq(AddressTable.doesHaveTreats, true),
  );
  const withDietaryAlternatives = await db.$count(
    AddressTable,
    and(
      eq(AddressTable.doesHaveTreats, true),
      arrayOverlaps(
        AddressTable.dietaryRestrictions,
        dietaryRestrictions as unknown as DietaryRestriction[],
      ),
    ),
  );

  return { withTreats, withDietaryAlternatives, addressCount };
}

export async function createAddress(prevState: State, data: FormData) {
  const validatedFields = CreateAddressSchema.safeParse({
    firstName: data.get('firstName'),
    lastName: data.get('lastName'),
    city: data.get('city'),
    address: data.get('address'),
    dietaryRestrictions: data.getAll('dietaryRestrictions'),
  });

  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error).errors,
      message: 'Hiányzó mezők. Cím létrehozása sikertelen.',
    };
  }
  const newAddressData = validatedFields.data;
  const [newAddress] = await db
    .insert(AddressTable)
    .values(newAddressData)
    .returning();

  if (!newAddress) {
    throw new Error('Adatbázis hiba: Cím létrehozása sikertelen');
  }

  updateTag('addresses');
  redirect('/');
}

export async function ranOutOfTreats(id: string) {
  const validatedFields = RanOutOfTreatsSchema.safeParse({ id });

  if (!validatedFields.success) {
    throw new Error('Érvénytelen cím azonosító');
  }

  const [updatedAddress] = await db
    .update(AddressTable)
    .set({ doesHaveTreats: false })
    .where(eq(AddressTable.id, validatedFields.data.id))
    .returning();

  if (!updatedAddress) {
    throw new Error('Adatbázis hiba: Nem sikerült frissíteni a címet');
  }

  updateTag('addresses');
}
