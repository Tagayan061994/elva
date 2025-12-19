'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import styles from './Logo.module.scss';

interface LogoProps {
  href?: string;
  className?: string;
}

// Deterministic particle positions for SSR consistency
const particlePositions = Array.from({ length: 20 }, (_, i) => {
  const angle = (i / 20) * Math.PI * 2;
  const radius = 30 + (i % 5) * 5;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
});

export default function Logo({ href = '/', className }: LogoProps) {
  const particles = useMemo(() =>
    particlePositions.map((pos, i) => ({
      ...pos,
      delay: i * 0.05,
    }))
  , []);

  return (
    <Link href={href} className={`${styles.logo} ${className || ''}`}>
      <div className={styles.logoContainer}>
        <div className={styles.elvaText}>
          <span className={styles.letterE}>
            <span className={styles.eMain}>E</span>
            <span className={styles.eParticles}>
              {particles.map((particle, i) => (
                <span
                  key={i}
                  className={styles.particle}
                  style={{
                    '--delay': `${particle.delay}s`,
                    '--x': `${particle.x}px`,
                    '--y': `${particle.y}px`,
                  } as React.CSSProperties}
                />
              ))}
            </span>
          </span>
          <span className={styles.letterL}>L</span>
          <span className={styles.letterV}>V</span>
          <span className={styles.letterA}>A</span>
        </div>
        <div className={styles.tagline}>
          <span className={styles.line}></span>
          <span className={styles.text}>DENTAL CLINIC</span>
          <span className={styles.line}></span>
        </div>
      </div>
    </Link>
  );
}

