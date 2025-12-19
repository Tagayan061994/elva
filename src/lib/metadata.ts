import type { Metadata } from 'next';
import { type Locale, getContent } from './content';

export function generateMetadata(
  locale: Locale,
  page: 'home' | 'about' | 'services' | 'works' | 'doctors' | 'contact'
): Metadata {
  const content = getContent(locale);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://elvaclinic.com';

  const getPageData = () => {
    switch (page) {
      case 'home':
        return {
          title: content.home.hero.title,
          description: content.home.hero.description,
          path: locale === 'en' ? '' : `/${locale}`,
        };
      case 'about':
        return {
          title: content.about.title,
          description: content.about.mission.description,
          path: locale === 'en' ? '/about' : `/${locale}/about`,
        };
      case 'services':
        return {
          title: content.services.title,
          description: content.services.description,
          path: locale === 'en' ? '/services' : `/${locale}/services`,
        };
      case 'works':
        return {
          title: content.works.title,
          description: content.works.description,
          path: locale === 'en' ? '/works' : `/${locale}/works`,
        };
      case 'doctors':
        return {
          title: content.doctors.title,
          description: content.doctors.description,
          path: locale === 'en' ? '/doctors' : `/${locale}/doctors`,
        };
      case 'contact':
        return {
          title: content.contact.title,
          description: content.contact.description,
          path: locale === 'en' ? '/contact' : `/${locale}/contact`,
        };
    }
  };

  const pageData = getPageData();
  const fullTitle = `${pageData.title} | ${content.common.clinicName}`;
  const url = `${baseUrl}${pageData.path}`;

  // Generate alternate language URLs
  const getAlternatePath = (targetLocale: Locale) => {
    const basePath = page === 'home' ? '' : `/${page}`;
    return targetLocale === 'en' ? basePath : `/${targetLocale}${basePath}`;
  };

  return {
    title: fullTitle,
    description: pageData.description,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}${getAlternatePath('en')}`,
        hy: `${baseUrl}${getAlternatePath('arm')}`,
        ru: `${baseUrl}${getAlternatePath('ru')}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description: pageData.description,
      url,
      siteName: content.common.clinicName,
      locale: locale === 'arm' ? 'hy_AM' : locale === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: pageData.description,
    },
  };
}

