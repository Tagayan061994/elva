'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import TextReveal from '../TextReveal/TextReveal';
import MotionPathWaypoints from '../MotionPathWaypoints/MotionPathWaypoints';
import styles from './Works.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

interface WorksProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
    cases?: Array<{
      id: number;
      patientName: string;
      procedure: string;
      price: string;
      time: string;
    }>;
  };
}

export default function Works({ content }: WorksProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Set initial state
      gsap.set(card, { opacity: 0, y: 50, scale: 0.9 });

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out',
      });

      // Hover effect
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }, [content.cases]);

  // Use cases from content, or fallback to placeholder
  const works = content.cases || [
    { id: 1, patientName: 'Case 1', procedure: 'Dental Treatment', price: '€€', time: '1 month' },
    { id: 2, patientName: 'Case 2', procedure: 'Smile Makeover', price: '€€€', time: '2 months' },
    { id: 3, patientName: 'Case 3', procedure: 'Orthodontic Treatment', price: '€€', time: '3 months' },
  ];

  return (
    <section ref={sectionRef} className={styles.works}>
      {/* Floating element with motion path */}
      <MotionPathWaypoints
        waypoints={[
          { x: 0, y: 0, scale: 0.6, opacity: 0.15 },
          { x: -60, y: 50, scale: 0.8, opacity: 0.3 },
          { x: -120, y: 30, scale: 1, opacity: 0.5 },
          { x: -180, y: 70, scale: 0.9, opacity: 0.4 },
          { x: -240, y: 20, scale: 0.7, opacity: 0.25 },
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
        <div className={styles.header}>
          <TextReveal splitBy="words">
            <h2 className={styles.title}>{content.title}</h2>
          </TextReveal>
          <TextReveal delay={0.2} splitBy="words">
            <h3 className={styles.subtitle}>{content.subtitle}</h3>
          </TextReveal>
          <TextReveal delay={0.4} splitBy="words">
            <p className={styles.description}>{content.description}</p>
          </TextReveal>
        </div>
        <div className={styles.grid}>
          {works.map((work, index) => (
            <div
              key={work.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={styles.card}
            >
              <div className={styles.imagePlaceholder}>
                <span>Before / After</span>
              </div>
              <div className={styles.content}>
                <h4 className={styles.cardTitle}>{work.patientName}</h4>
                <p className={styles.procedure}>{work.procedure}</p>
                <div className={styles.meta}>
                  <span className={styles.price}>{work.price}</span>
                  <span className={styles.time}>{work.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <Link href="/works" className={styles.viewAllButton}>
            View All Cases
          </Link>
        </div>
      </div>
    </section>
  );
}
