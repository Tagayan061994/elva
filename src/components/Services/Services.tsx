'use client';

import { motion } from 'framer-motion';
import FadeIn from '../Animations/FadeIn';
import StaggerContainer from '../Animations/StaggerContainer';
import StaggerItem from '../Animations/StaggerItem';
import ScaleIn from '../Animations/ScaleIn';
import styles from './Services.module.scss';

interface ServicesProps {
  content: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

export default function Services({ content }: ServicesProps) {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.header}>
            <h2 className={styles.title}>{content.title}</h2>
            <p className={styles.subtitle}>{content.subtitle}</p>
          </div>
        </FadeIn>
        <StaggerContainer className={styles.grid} staggerDelay={0.15}>
          {content.items.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                className={styles.card}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <ScaleIn delay={index * 0.1}>
                  <div className={styles.icon}>
                    <motion.svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                  </div>
                </ScaleIn>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

