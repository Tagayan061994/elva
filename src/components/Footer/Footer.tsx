import Link from 'next/link';
import { getContent, type Locale, getLocalizedPath } from '@/lib/content';
import Logo from '../Logo/Logo';
import styles from './Footer.module.scss';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const content = getContent(locale);

  const menuItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'works', path: '/works' },
    { key: 'doctors', path: '/doctors' },
    { key: 'contact', path: '/contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
        <div className={styles.brand}>
          <Logo href={getLocalizedPath('/', locale)} />
          <p className={styles.tagline}>{content.common.tagline}</p>
        </div>

          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Navigation</h4>
            <ul className={styles.navList}>
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link href={getLocalizedPath(item.path, locale)}>
                    {content.common.menu[item.key as keyof typeof content.common.menu]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <h4 className={styles.contactTitle}>Contact</h4>
            <p>{content.contact.info.phone}</p>
            <p>{content.contact.info.email}</p>
            <p>{content.contact.info.address}</p>
            <p>{content.contact.info.hours}</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} {content.common.clinicName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

