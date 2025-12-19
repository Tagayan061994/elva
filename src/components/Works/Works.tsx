'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../Animations/FadeIn';
import StaggerContainer from '../Animations/StaggerContainer';
import StaggerItem from '../Animations/StaggerItem';
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
        <FadeIn>
          <div className={styles.header}>
            <h2 className={styles.title}>{content.title}</h2>
            <h3 className={styles.subtitle}>{content.subtitle}</h3>
            <p className={styles.description}>{content.description}</p>
          </div>
        </FadeIn>
        <StaggerContainer className={styles.grid} staggerDelay={0.2}>
          {works.map((work) => (
            <StaggerItem key={work.id}>
              <motion.div
                className={styles.card}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.div
                  className={styles.imagePlaceholder}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Before / After</span>
                </motion.div>
                <div className={styles.content}>
                  <h4 className={styles.cardTitle}>{work.title}</h4>
                  <p className={styles.cardDescription}>
                    Professional dental treatment with amazing results
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn delay={0.6}>
          <div className={styles.footer}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/works" className={styles.viewAllButton}>
                View All Cases
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

