'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

interface MotionPathProps {
  children: React.ReactNode;
  path: string | Array<{ x: number; y: number }>;
  duration?: number;
  start?: string;
  end?: string;
  autoRotate?: boolean | number;
  className?: string;
  trigger?: string | HTMLElement;
}

export default function MotionPath({
  children,
  path,
  duration = 1,
  start = 'top bottom',
  end = 'bottom top',
  autoRotate = true,
  className = '',
  trigger,
}: MotionPathProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current.firstElementChild as HTMLElement;
    if (!element) return;

    // Set transform origin for rotation
    if (autoRotate) {
      gsap.set(element, { transformOrigin: '50% 50%' });
    }

    const animation = gsap.to(element, {
      motionPath: {
        path: path,
        autoRotate: autoRotate,
        alignOrigin: [0.5, 0.5],
      },
      duration: duration,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger || elementRef.current,
        start: start,
        end: end,
        scrub: true,
        markers: false, // Set to true for debugging
      },
    });

    const elementContainer = elementRef.current;
    const triggerElement = trigger || elementContainer;

    return () => {
      if (elementContainer) {
        animation.kill();
      }
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === triggerElement) {
          st.kill();
        }
      });
    };
  }, [path, duration, start, end, autoRotate, trigger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

