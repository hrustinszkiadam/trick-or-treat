import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/ui/globals.css';
import { ThemeProvider } from '@/ui/components/theme-provider';
import { ModeToggle } from '@/ui/components/theme-toggler';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Trick or Treat',
    template: '%s | Trick or Treat',
  },
  keywords: [
    'Halloween',
    'Trick or Treat',
    'Candy',
    'Houses',
    'Fun',
    'Csokit vagy csalunk',
    'Cukorka',
    'Házak',
    'Szórakozás',
  ],
  description:
    'A simple Halloween application for trick or treaters to find the best houses. 🎃',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          enableColorScheme
          disableTransitionOnChange
        >
          <ModeToggle className='absolute top-4 right-4 p-5 transition-transform hover:scale-115' />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
