import { env } from '@/env';

export const validatePassword = (password: string | null): void => {
  if (!password) {
    throw new Error('Password is required');
  }
  if (password !== env.SEED_PASSWORD) {
    throw new Error('Unauthorized');
  }
};
