import { AddressTable } from '@/database/schema';

export const dietaryRestrictions = [
  'laktóz',
  'glutén',
  'mogyoró',
  'dió',
  'tojás',
] as const;

export type DietaryRestriction = (typeof dietaryRestrictions)[number];
export type Address = typeof AddressTable.$inferSelect;
export type NewAddress = typeof AddressTable.$inferInsert;
export type FormValues = {
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  dietaryRestrictions: DietaryRestriction[];
};
