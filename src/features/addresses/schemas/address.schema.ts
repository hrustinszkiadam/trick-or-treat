import { createdAt, id, updatedAt } from '@/database/schema-presets';
import { dietaryRestrictions } from '@/lib/definitions';
import { boolean, pgEnum, pgTable, text } from 'drizzle-orm/pg-core';

export const DietaryRestrictionsEnum = pgEnum(
  'dietary_restrictions',
  dietaryRestrictions,
);

export const AddressTable = pgTable('addresses', {
  id,
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  city: text('city').notNull(),
  address: text('address').notNull(),
  dietaryRestrictions: DietaryRestrictionsEnum('dietary_restrictions')
    .array()
    .notNull()
    .default([]),
  doesHaveTreats: boolean('does_have_treats').notNull().default(true),
  createdAt,
  updatedAt,
});
