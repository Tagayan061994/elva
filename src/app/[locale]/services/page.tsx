import { getContent, type Locale } from '@/lib/content';
import { generateMetadata as genMeta } from '@/lib/metadata';
import styles from './page.module.scss';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  return genMeta(params.locale, 'services');
}

export default function ServicesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const content = getContent(locale);

  return (
    <div className={styles.servicesPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{content.services.title}</h1>
          <p className={styles.description}>{content.services.description}</p>
        </div>
      </section>

      <section className={styles.servicesList}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {content.services.items.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.icon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
                {service.features && (
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={styles.feature}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

