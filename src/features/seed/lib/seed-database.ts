import { db } from '@/database';
import { placeholderAddresses } from './placeholder-addresses';
import { AddressTable } from '@/database/schema';
import { Address } from '@/lib/definitions';

export const seedDatabase = async (): Promise<object> => {
  await db.delete(AddressTable);

  const results: Address[] = await db
    .insert(AddressTable)
    .values(placeholderAddresses)
    .returning();
  if (!results.length) {
    throw new Error('Database Error: Failed to Seed Database');
  }
  return results;
};
