import { env } from '@/env';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${env.FULL_URL}/sitemap.xml`,
    host: env.FULL_URL.split('://')[1],
  };
}
