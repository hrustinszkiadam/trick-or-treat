import { db } from '@/database';
import { placeholderAddresses } from './placeholder-addresses';
import { AddressTable } from '@/database/schema';

export const seedDatabase = async (): Promise<object> => {
  const results = await db
    .insert(AddressTable)
    .values(placeholderAddresses)
    .returning();
  if (!results.length) {
    throw new Error('Database Error: Failed to Seed Database');
  }
  return results;
};
