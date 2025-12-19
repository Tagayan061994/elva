'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother?.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} id="smooth-wrapper" style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      <div ref={contentRef} id="smooth-content" style={{ width: '100%', overflow: 'visible' }}>
        {children}
      </div>
    </div>
  );
}

