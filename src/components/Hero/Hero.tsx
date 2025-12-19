import Link from 'next/link';
import styles from './Hero.module.scss';

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
  };
  cta: {
    register: string;
    contact: string;
  };
}

export default function Hero({ content, cta }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <h2 className={styles.subtitle}>
            {content.subtitle}
          </h2>
          <p className={styles.description}>
            {content.description}
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryButton}>
              {cta.register}
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              {cta.contact}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

