import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  locale?: string;
  path?: string;
}

export default function SEO({ title, description, locale = 'en', path = '' }: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://elvaclinic.com';
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = `${title} | ELVA Dental Clinic`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === 'arm' ? 'hy_AM' : locale === 'ru' ? 'ru_RU' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Language alternates */}
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${path}`} />
      <link rel="alternate" hrefLang="hy" href={`${siteUrl}/arm${path}`} />
      <link rel="alternate" hrefLang="ru" href={`${siteUrl}/ru${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${path}`} />
    </Head>
  );
}

