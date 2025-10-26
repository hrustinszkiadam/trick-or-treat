import { timestamp, uuid } from 'drizzle-orm/pg-core';

export const id = uuid('id').defaultRandom().primaryKey();
export const createdAt = timestamp('created_at')
  .defaultNow()
  .$onUpdate(() => new Date());
export const updatedAt = timestamp('updated_at')
  .defaultNow()
  .$onUpdate(() => new Date());
