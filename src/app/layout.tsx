import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { ThemeProvider } from '@/ui/components/theme-provider';
import { ModeToggle } from '@/ui/components/theme-toggler';
import PumpkinBackground from '@/ui/components/pumpkin-background';

import '@/ui/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  fallback: ['ui-sans-serif', 'system-ui'],
});

export const metadata: Metadata = {
  title: {
    default: 'Csokit vagy csalunk',
    template: '%s | Csokit vagy csalunk',
  },
  keywords: [
    'Halloween',
    'Csokit vagy csalunk',
    'Cukorka',
    'Házak',
    'Szórakozás',
  ],
  description:
    'Egyszerű Halloweeni alkalmazás, amely segít a csokit kérőknek megtalálni a legjobb házakat. 🎃',
  authors: [{ name: 'Hrustinszki Ádám', url: 'https://gh.hrustinszki.tech' }],
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
