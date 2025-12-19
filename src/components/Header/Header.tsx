'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { getContent, type Locale } from '@/lib/content';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = getContent(locale);
  const pathname = usePathname();
  const router = useRouter();

  const getLocalizedPath = (path: string) => {
    if (locale === 'en') return path;
    return `/${locale}${path}`;
  };

  const menuItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'works', path: '/works' },
    { key: 'doctors', path: '/doctors' },
    { key: 'contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo href={getLocalizedPath('/')} />

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {menuItems.map((item) => {
            const href = getLocalizedPath(item.path);
            // Remove locale from pathname for comparison
            const pathWithoutLocale = pathname.replace(/^\/(en|arm|ru)/, '') || '/';
            const itemPath = item.path === '/' ? '/' : item.path;
            const isActive = pathWithoutLocale === itemPath ||
              (itemPath !== '/' && pathWithoutLocale.startsWith(itemPath));
            return (
              <Link
                key={item.key}
                href={href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {content.common.menu[item.key as keyof typeof content.common.menu]}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher currentLocale={locale} />
          <Link href={getLocalizedPath('/contact')} className={styles.ctaButton}>
            {content.common.cta.register}
          </Link>
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

