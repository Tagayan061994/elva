import { Inter, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';
import '@/styles/globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getContent, type Locale } from '@/lib/content';

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

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const content = getContent(params.locale);
  const lang = params.locale === 'arm' ? 'hy' : params.locale;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://elvaclinic.com'),
    alternates: {
      languages: {
        en: '/en',
        hy: '/arm',
        ru: '/ru',
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const lang = locale === 'arm' ? 'hy' : locale;

  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
