'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Parallax from '../Animations/Parallax';
import FadeIn from '../Animations/FadeIn';
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
      <Parallax speed={0.3} className={styles.parallaxBg} />
      <div className={styles.container}>
        <div className={styles.content}>
          <FadeIn delay={0.2}>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {content.title}
            </motion.h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h2 className={styles.subtitle}>
              {content.subtitle}
            </h2>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className={styles.description}>
              {content.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <div className={styles.actions}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className={styles.primaryButton}>
                  {cta.register}
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className={styles.secondaryButton}>
                  {cta.contact}
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

