import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: [process.env.DEV_URL || 'localhost'],
  reactCompiler: true,
  cacheComponents: true,
};

export default nextConfig;
