import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DEV_URL: z.string().nonempty(),
    DATABASE_URL: z.string().nonempty(),
    SEED_PASSWORD: z.string().nonempty(),
    FULL_URL: z.string().nonempty(),
    AUTHOR_URL: z.string().nonempty(),
  },
  client: {},
  runtimeEnv: {
    DEV_URL: process.env.DEV_URL,
    FULL_URL: process.env.FULL_URL,
    AUTHOR_URL: process.env.AUTHOR_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    SEED_PASSWORD: process.env.SEED_PASSWORD,
  },
});
