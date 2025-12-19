'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  splitBy?: 'words' | 'chars' | 'lines';
  className?: string;
}

export default function TextReveal({
  children,
  delay = 0,
  stagger = 0.05,
  splitBy = 'words',
  className = '',
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || typeof window === 'undefined') return;

    // Dynamically import SplitText
    import('gsap/SplitText').then(({ SplitText }) => {
      if (!textRef.current) return;

      const split = new SplitText(textRef.current, {
        type: splitBy,
      });

      const elements = splitBy === 'lines' ? split.lines : splitBy === 'chars' ? split.chars : split.words;

      gsap.set(elements, { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay,
      });

      tl.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        ease: 'power3.out',
      });

      return () => {
        split?.revert();
      };
    });
  }, [children, delay, stagger, splitBy]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}

