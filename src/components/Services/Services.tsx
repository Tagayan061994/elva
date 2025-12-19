'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import TextReveal from '../TextReveal/TextReveal';
import MotionPathWaypoints from '../MotionPathWaypoints/MotionPathWaypoints';
import styles from './Services.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

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
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Set initial state
      gsap.set(card, { opacity: 0, y: 50 });

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
      });

      // Hover effect
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className={styles.services}>
      {/* Floating element with motion path */}
      <MotionPathWaypoints
        waypoints={[
          { x: 0, y: 0, scale: 0.7, opacity: 0.2 },
          { x: 80, y: -40, scale: 0.9, opacity: 0.4 },
          { x: 160, y: -20, scale: 1.1, opacity: 0.6 },
          { x: 240, y: -50, scale: 1, opacity: 0.5 },
          { x: 320, y: -10, scale: 0.8, opacity: 0.3 },
        ]}
        start="top bottom"
        end="bottom top"
        curviness={1.8}
        className={styles.floatingElement}
        trigger={sectionRef.current || undefined}
      >
        <div className={styles.floatingCircle}></div>
      </MotionPathWaypoints>

      <div className={styles.container}>
        <div className={styles.header}>
          <TextReveal splitBy="words">
            <h2 className={styles.title}>{content.title}</h2>
          </TextReveal>
          <TextReveal delay={0.2} splitBy="words">
            <p className={styles.subtitle}>{content.subtitle}</p>
          </TextReveal>
        </div>
        <div className={styles.grid}>
          {content.items.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={styles.card}
            >
              <div className={styles.icon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
