import { getContent, type Locale } from '@/lib/content';
import { generateMetadata as genMeta } from '@/lib/metadata';
import styles from './page.module.scss';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  return genMeta(params.locale, 'doctors');
}

export default function DoctorsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const content = getContent(locale);

  return (
    <div className={styles.doctorsPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{content.doctors.title}</h1>
          <h2 className={styles.subtitle}>{content.doctors.subtitle}</h2>
          <p className={styles.description}>{content.doctors.description}</p>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {(content.doctors.team || []).map((doctor) => (
              <div key={doctor.id} className={styles.doctorCard}>
                <div className={styles.avatar}>
                  <span>{doctor.name.charAt(0)}</span>
                </div>
                <h3 className={styles.doctorName}>{doctor.name}</h3>
                <p className={styles.specialization}>{doctor.specialization}</p>
                <p className={styles.experience}>{doctor.experience}</p>
                <p className={styles.doctorDescription}>{doctor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

