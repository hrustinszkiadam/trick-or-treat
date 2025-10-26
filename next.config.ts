import { env } from '@/env';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: [env.DEV_URL],
  reactCompiler: true,
  cacheComponents: true,
};

export default nextConfig;
