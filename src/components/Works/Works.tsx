import Link from 'next/link';
import styles from './Works.module.scss';

interface WorksProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export default function Works({ content }: WorksProps) {
  // Placeholder works - in real app, this would come from content
  const works = [
    { id: 1, title: 'Case 1' },
    { id: 2, title: 'Case 2' },
    { id: 3, title: 'Case 3' },
  ];

  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{content.title}</h2>
          <h3 className={styles.subtitle}>{content.subtitle}</h3>
          <p className={styles.description}>{content.description}</p>
        </div>
        <div className={styles.grid}>
          {works.map((work) => (
            <div key={work.id} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span>Before / After</span>
              </div>
              <div className={styles.content}>
                <h4 className={styles.cardTitle}>{work.title}</h4>
                <p className={styles.cardDescription}>
                  Professional dental treatment with amazing results
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <Link href="/works" className={styles.viewAllButton}>
            View All Cases
          </Link>
        </div>
      </div>
    </section>
  );
}

