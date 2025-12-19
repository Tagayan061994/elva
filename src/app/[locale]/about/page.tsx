import { getContent, type Locale } from '@/lib/content';
import { generateMetadata as genMeta } from '@/lib/metadata';
import styles from './page.module.scss';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  return genMeta(params.locale, 'about');
}

export default function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const content = getContent(locale);

  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{content.about.title}</h1>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>{content.about.mission.title}</h2>
            <p className={styles.sectionDescription}>{content.about.mission.description}</p>
          </div>
        </div>
      </section>

      <section className={styles.vision}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>{content.about.vision.title}</h2>
            <p className={styles.sectionDescription}>{content.about.vision.description}</p>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.valuesTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            {content.about.values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

