import enContent from '@/content/en.json';
import armContent from '@/content/arm.json';
import ruContent from '@/content/ru.json';

export type Locale = 'en' | 'arm' | 'ru';

export const locales: Locale[] = ['en', 'arm', 'ru'];

const contentMap = {
  en: enContent,
  arm: armContent,
  ru: ruContent,
};

export function getContent(locale: Locale = 'en') {
  return contentMap[locale] || contentMap.en;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') {
    return path;
  }
  return `/${locale}${path}`;
}

