import { env } from '@/env';

export const validatePassword = (password: string | null): void => {
  if (!password) {
    throw new Error('A jelszó megadása kötelező');
  }
  if (password !== env.SEED_PASSWORD) {
    throw new Error('Érvénytelen jelszó');
  }
};
