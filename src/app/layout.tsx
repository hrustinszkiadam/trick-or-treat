import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { ThemeProvider } from '@/ui/components/theme-provider';
import { ModeToggle } from '@/ui/components/theme-toggler';
import PumpkinBackground from '@/ui/components/pumpkin-background';
import { env } from '@/env';

import '@/ui/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  fallback: ['ui-sans-serif', 'system-ui'],
});

const appName = 'Csokit vagy csalunk';
const description =
  'Egyszerű Halloweeni alkalmazás, amely segít a csokit kérőknek megtalálni a legjobb házakat. 🎃';

export const metadata: Metadata = {
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  keywords: ['Halloween', appName, 'Cukorka', 'Házak', 'Szórakozás'],
  description,
  authors: [{ name: 'Hrustinszki Ádám', url: env.AUTHOR_URL }],
  applicationName: appName,
  openGraph: {
    title: appName,
    siteName: appName,
    description,
    url: env.FULL_URL,
    type: 'website',
    locale: 'hu_HU',
    images: [
      {
        url: `${env.FULL_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: appName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: appName,
    description,
    images: [`${env.FULL_URL}/opengraph.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='hu'
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableColorScheme
          enableSystem
          disableTransitionOnChange
        >
          <PumpkinBackground />
          <ModeToggle className='absolute top-4 right-4 p-5 transition-transform hover:scale-115' />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
