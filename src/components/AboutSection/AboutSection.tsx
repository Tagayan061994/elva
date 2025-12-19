'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import TextReveal from '../TextReveal/TextReveal';
import MagneticButton from '../MagneticButton/MagneticButton';
import MotionPathWaypoints from '../MotionPathWaypoints/MotionPathWaypoints';
import styles from './AboutSection.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

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
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className={styles.aboutSection}>
      {/* Floating element with motion path */}
      <MotionPathWaypoints
        waypoints={[
          { x: 0, y: 0, scale: 0.8, opacity: 0.2 },
          { x: 100, y: -60, scale: 1, opacity: 0.5 },
          { x: 200, y: -40, scale: 1.2, opacity: 0.7 },
          { x: 300, y: -80, scale: 1.1, opacity: 0.6 },
          { x: 400, y: -20, scale: 0.9, opacity: 0.35 },
        ]}
        start="top bottom"
        end="bottom top"
        curviness={1.6}
        className={styles.floatingElement}
        trigger={sectionRef.current || undefined}
      >
        <div className={styles.floatingCircle}></div>
      </MotionPathWaypoints>

      <div className={styles.container}>
        <div className={styles.content}>
          <TextReveal delay={0.2} splitBy="words">
            <h2 className={styles.title}>{content.title}</h2>
          </TextReveal>
          <TextReveal delay={0.4} splitBy="words">
            <p className={styles.description}>{content.description}</p>
          </TextReveal>
          <TextReveal delay={0.6}>
            <MagneticButton>
              <Link href="/contact" className={styles.ctaButton}>
                {cta.contact}
              </Link>
            </MagneticButton>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
