import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DEV_URL: z.string().nonempty(),
    DATABASE_URL: z.string().nonempty(),
    SEED_PASSWORD: z.string().nonempty(),
  },
  client: {},
  runtimeEnv: {
    DEV_URL: process.env.DEV_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    SEED_PASSWORD: process.env.SEED_PASSWORD,
  },
});
