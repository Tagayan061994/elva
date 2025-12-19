import { getContent, type Locale } from '@/lib/content';
import { generateMetadata as genMeta } from '@/lib/metadata';
import styles from './page.module.scss';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  return genMeta(params.locale, 'works');
}

export default function WorksPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const content = getContent(locale);

  // In a real app, this would come from content.json
  const cases = content.works.cases || [];

  return (
    <div className={styles.worksPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{content.works.title}</h1>
          <h2 className={styles.subtitle}>{content.works.subtitle}</h2>
          <p className={styles.description}>{content.works.description}</p>
        </div>
      </section>

      <section className={styles.cases}>
        <div className={styles.container}>
          {cases.length > 0 ? (
            <div className={styles.grid}>
              {cases.map((caseItem) => (
                <div key={caseItem.id} className={styles.caseCard}>
                  <div className={styles.imagePlaceholder}>
                    <span>Before / After</span>
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.caseTitle}>{caseItem.patientName}</h3>
                    <p className={styles.procedure}>{caseItem.procedure}</p>
                    <div className={styles.meta}>
                      <span className={styles.price}>{caseItem.price}</span>
                      <span className={styles.time}>{caseItem.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>More cases coming soon...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

