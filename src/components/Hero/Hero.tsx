'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import TextReveal from '../TextReveal/TextReveal';
import MagneticButton from '../MagneticButton/MagneticButton';
import ThreeBackground from '../ThreeBackground/ThreeBackground';
import MotionPathWaypoints from '../MotionPathWaypoints/MotionPathWaypoints';
import styles from './Hero.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

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
  const sectionRef = useRef<HTMLElement>(null);
  const floatingElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax effect for background
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 100,
      ease: 'none',
    });

    // Floating element with motion path
    if (floatingElementRef.current) {
      const waypoints = [
        { x: 0, y: 0, scale: 1, opacity: 0.8 },
        { x: 50, y: -30, scale: 1.1, opacity: 1 },
        { x: 100, y: -20, scale: 1, opacity: 0.9 },
        { x: 150, y: -40, scale: 1.15, opacity: 1 },
        { x: 200, y: -10, scale: 1, opacity: 0.8 },
      ];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      tl.to(floatingElementRef.current, {
        motionPath: {
          path: waypoints.map((wp) => ({ x: wp.x, y: wp.y })),
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          curviness: 1.5,
        },
        duration: 10,
        ease: 'none',
      });

      // Animate scale and opacity separately
      waypoints.forEach((wp, index) => {
        const progress = index / (waypoints.length - 1);
        tl.to(
          floatingElementRef.current,
          {
            scale: wp.scale || 1,
            opacity: wp.opacity || 1,
            duration: 0.1,
            ease: 'none',
          },
          progress * 10
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <ThreeBackground className={styles.threeBg} />

      {/* Floating decorative element with motion path */}
      <MotionPathWaypoints
        waypoints={[
          { x: 0, y: 0, scale: 0.8, opacity: 0.3 },
          { x: 100, y: -50, scale: 1, opacity: 0.5 },
          { x: 200, y: -30, scale: 0.9, opacity: 0.4 },
          { x: 300, y: -70, scale: 1.1, opacity: 0.6 },
          { x: 400, y: -20, scale: 0.8, opacity: 0.3 },
        ]}
        start="top bottom"
        end="bottom top"
        curviness={2}
        className={styles.floatingElement}
        trigger={sectionRef.current || undefined}
      >
        <div className={styles.floatingCircle}></div>
      </MotionPathWaypoints>

      <div className={styles.container}>
        <div className={styles.content}>
          <TextReveal delay={0.2} splitBy="words" className={styles.titleWrapper}>
            <h1 className={styles.title}>{content.title}</h1>
          </TextReveal>

          <TextReveal delay={0.4} splitBy="words" className={styles.subtitleWrapper}>
            <h2 className={styles.subtitle}>{content.subtitle}</h2>
          </TextReveal>

          <TextReveal delay={0.6} splitBy="words" className={styles.descriptionWrapper}>
            <p className={styles.description}>{content.description}</p>
          </TextReveal>

          <div className={styles.actions}>
            <MagneticButton>
              <Link href="/contact" className={styles.primaryButton}>
                {cta.register}
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/contact" className={styles.secondaryButton}>
                {cta.contact}
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
