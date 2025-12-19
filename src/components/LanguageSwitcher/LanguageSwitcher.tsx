'use client';

import { usePathname, useRouter } from 'next/navigation';
import { type Locale } from '@/lib/content';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'arm', label: 'ARM' },
  { code: 'ru', label: 'RU' },
];

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/(en|arm|ru)/, '') || '/';

    // Add new locale
    const newPath = newLocale === 'en'
      ? pathWithoutLocale
      : `/${newLocale}${pathWithoutLocale}`;

    router.push(newPath);
  };

  return (
    <div className={styles.languageSwitcher}>
      {locales.map((locale) => (
        <button
          key={locale.code}
          onClick={() => switchLanguage(locale.code)}
          className={`${styles.languageButton} ${
            currentLocale === locale.code ? styles.active : ''
          }`}
          aria-label={`Switch to ${locale.label}`}
        >
          {locale.label}
        </button>
      ))}
    </div>
  );
}

