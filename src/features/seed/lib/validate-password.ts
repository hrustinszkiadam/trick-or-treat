export const validatePassword = (password: string | null): void => {
  if (!process.env.SEED_PASSWORD) {
    throw new Error('SEED_PASSWORD is not set in environment variables');
  }
  if (!password) {
    throw new Error('Password is required');
  }
  if (password !== process.env.SEED_PASSWORD) {
    throw new Error('Unauthorized');
  }
};
