import { MetadataRoute } from 'next';
import { locales, type Locale } from '@/lib/content';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://elvaclinic.com';

const routes = [
  '',
  '/about',
  '/services',
  '/works',
  '/doctors',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  (locales as Locale[]).forEach((locale) => {
    routes.forEach((route) => {
      const url = locale === 'en'
        ? `${baseUrl}${route}`
        : `${baseUrl}/${locale}${route}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: locale === 'en' ? url : `${baseUrl}${route}`,
            hy: locale === 'arm' ? url : `${baseUrl}/arm${route}`,
            ru: locale === 'ru' ? url : `${baseUrl}/ru${route}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}

