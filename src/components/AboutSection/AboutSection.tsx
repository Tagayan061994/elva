'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../Animations/FadeIn';
import Parallax from '../Animations/Parallax';
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
      <Parallax speed={0.2} className={styles.parallaxBg} />
      <div className={styles.container}>
        <div className={styles.content}>
          <FadeIn delay={0.2}>
            <h2 className={styles.title}>{content.title}</h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className={styles.description}>{content.description}</p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className={styles.ctaButton}>
                {cta.contact}
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

