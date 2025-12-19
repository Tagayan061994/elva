import Link from 'next/link';
import styles from './AboutSection.module.scss';

interface AboutSectionProps {
  content: {
    title: string;
    description: string;
  };
  cta: {
    contact: string;
  };
}

export default function AboutSection({ content, cta }: AboutSectionProps) {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.description}>{content.description}</p>
          <Link href="/contact" className={styles.ctaButton}>
            {cta.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}

