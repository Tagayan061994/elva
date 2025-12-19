import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ELVA Dental Clinic - Professional Dental Care',
  description: 'Professional dental care with modern technology and experienced team. Smile wider, smile better!',
  keywords: 'dental clinic, dentistry, dental care, veneers, smile makeover',
  authors: [{ name: 'ELVA Dental Clinic' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['hy_AM', 'ru_RU'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

