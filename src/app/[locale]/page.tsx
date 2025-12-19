import { getContent, type Locale } from '@/lib/content';
import { generateMetadata as genMeta } from '@/lib/metadata';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Works from '@/components/Works/Works';
import AboutSection from '@/components/AboutSection/AboutSection';
import styles from './page.module.scss';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  return genMeta(params.locale, 'home');
}

export default function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const content = getContent(locale);

  return (
    <div className={styles.homePage}>
      <Hero content={content.home.hero} cta={content.common.cta} />
      <Services content={content.home.services} />
      <Works content={content.home.works} />
      <AboutSection content={content.home.about} cta={content.common.cta} />
    </div>
  );
}

