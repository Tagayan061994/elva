'use client';

import { useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import styles from './MagneticButton.module.scss';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  distance?: number;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  distance = 0.15,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const normalizedX = (x / (rect.width / 2)) * distance;
    const normalizedY = (y / (rect.height / 2)) * distance;

    gsap.to(buttonRef.current, {
      x: normalizedX * 100,
      y: normalizedY * 100,
      duration: 0.3,
      ease: 'none',
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'power4.out',
    });
  };

  return (
    <div
      ref={buttonRef}
      className={`${styles.magneticButton} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

