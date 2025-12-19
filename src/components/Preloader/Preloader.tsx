'use client';

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Preloader.module.scss';

// Dynamic import for ProgressBar to avoid SSR issues
let ProgressBar: any;
if (typeof window !== 'undefined') {
  ProgressBar = require('progressbar.js');
}

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bigLogoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !ProgressBar) return;

    let isMounted = true;

    // Initialize progress bar
    if (circleRef.current && !progressBarRef.current) {
      try {
        progressBarRef.current = new ProgressBar.Circle(circleRef.current, {
          strokeWidth: 8,
          easing: 'easeIn',
          color: '#0273b3',
          trailColor: 'rgba(2, 115, 179, 0.1)',
          trailWidth: 4,
        });
      } catch (error) {
        console.error('Failed to initialize progress bar:', error);
        return;
      }
    }

    // Early return if progress bar not initialized
    if (!progressBarRef.current) return;

    // Create animated particles
    if (particlesRef.current) {
      const particleCount = 30;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = styles.particle;
        const size = Math.random() * 8 + 4;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = Math.random() * 3 + 2;

        particle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: radial-gradient(circle, rgba(2, 115, 179, 0.6) 0%, rgba(0, 183, 216, 0.3) 100%);
          border-radius: 50%;
          left: ${x}%;
          top: ${y}%;
          animation: float ${duration}s ease-in-out infinite;
          animation-delay: ${delay}s;
          box-shadow: 0 0 ${size * 2}px rgba(2, 115, 179, 0.5);
        `;

        particlesRef.current.appendChild(particle);
      }
    }

    // Count up animation
    let currentPercentage = 0;
    const limit = 71;
    let countTimes = 5;
    let loaded = false;

    const count = () => {
      // Don't continue if component unmounted
      if (!isMounted) return;

      let rnd: number;
      if (currentPercentage >= 50 && currentPercentage < limit) {
        rnd = Math.floor(Math.random() * 2) + 1; // slow count 1-2
      } else if (currentPercentage >= limit) {
        rnd = Math.random() * 1.5; // ultra slow count
      } else {
        rnd = Math.floor(Math.random() * 8) + 1; // normal count 1-8
      }

      currentPercentage += parseInt(rnd.toString());
      if (currentPercentage >= 99) {
        currentPercentage = 99;
      }

      setPercentage(currentPercentage);
      if (progressBarRef.current) {
        try {
          progressBarRef.current.animate(currentPercentage / 100, { duration: 100 });
        } catch (error) {
          console.warn('ProgressBar animate error:', error);
        }
      }

      // Check if page is loaded
      if (typeof window !== 'undefined' && window.loaded === true) {
        loaded = true;
      }

      if (loaded && countTimes <= 0) {
        setPercentage(100);
        if (progressBarRef.current) {
          try {
            progressBarRef.current.animate(1, { duration: 300 });
          } catch (error) {
            console.warn('ProgressBar final animate error:', error);
          }
        }

        // Animate logo and text with more effects
        const timeline = gsap.timeline({
          onComplete: () => {
            setIsLoaded(true);
            // Auto-close after 3 seconds
            setTimeout(() => {
              if (isMounted) {
                handleComplete();
              }
            }, 3000);
          },
        });

        timeline.add('start');

        // Logo reveal with scale and rotation
        timeline.from(
          bigLogoRef.current,
          {
            height: window.innerWidth <= 768 ? '4.8rem' : '16rem',
            scale: 0.5,
            rotation: -10,
            duration: 1.6,
            ease: 'power4.inOut',
          },
          'start'
        );

        // Container move up
        timeline.to(
          containerRef.current,
          {
            y: '-30%',
            scale: 1.1,
            duration: 1.6,
            ease: 'power4.inOut',
          },
          'start'
        );

        // Text animation with glow effect
        const textElement = textRef.current;
        if (textElement) {
          const spanElement = textElement.querySelector('span');
          timeline.to(
            textElement,
            {
              opacity: 0,
              scale: 1.2,
              duration: 1.4,
              ease: 'power4.inOut',
              repeat: 1,
              yoyo: true,
              onRepeat: () => {
                if (spanElement) {
                  spanElement.textContent = 'Connect';
                }
              },
            },
            'start'
          );
        }

        // Particle animation
        if (particlesRef.current) {
          const particles = particlesRef.current.querySelectorAll(`.${styles.particle}`);
          particles.forEach((particle, i) => {
            gsap.to(particle, {
              scale: 0,
              opacity: 0,
              duration: 0.8,
              delay: i * 0.05,
              ease: 'power2.in',
            });
          });
        }

        return;
      } else {
        countTimes--;
        setTimeout(count, 200);
      }
    };

    // Start counting
    count();

    // Mark as loaded when DOM is ready
    if (typeof window !== 'undefined') {
      window.loaded = true;
    }

    // Cleanup
    return () => {
      isMounted = false;
      if (progressBarRef.current) {
        try {
          if (typeof progressBarRef.current.destroy === 'function') {
            progressBarRef.current.destroy();
          }
        } catch (error) {
          // Already destroyed, ignore
        }
        progressBarRef.current = null;
      }
    };
  }, []);

  const handleComplete = useRef(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    timeline.add('start');
    timeline.to(
      '.preloader-wrap',
      {
        opacity: 0,
        scale: 1.1,
        display: 'none',
        pointerEvents: 'none',
        duration: 0.6,
        ease: 'expo.inOut',
      },
      'start'
    );
  }).current;

  const handleClick = () => {
    handleComplete();
  };

  return (
    <div className={styles.preloaderWrap}>
      {/* Animated background gradient */}
      <div className={styles.animatedBg}></div>

      {/* Floating particles */}
      <div ref={particlesRef} className={styles.particlesContainer}></div>

      {/* Main logo */}
      <div ref={bigLogoRef} className={styles.bigLogo}>
        <div className={styles.logoTitle}>ELVA</div>
        <div className={styles.logoGlow}></div>
      </div>

      {/* Center content */}
      <div ref={containerRef} className={styles.container}>
        <div ref={circleRef} className={styles.circleWrap}>
          <div className={styles.number}>{percentage}%</div>
        </div>

        <div ref={textRef} className={styles.text}>
          <span>Loading</span>
        </div>

        {isLoaded && (
          <div
            ref={buttonRef}
            className={styles.mouseWrap}
            onClick={handleClick}
          >
            <div className={styles.buttonWrap}>
              <svg className={styles.btn} viewBox="0 0 55 54" fill="none">
                <rect x="0.5" width="54" height="54" rx="27" fill="#0273b3" />
                <path
                  d="M22.5 32L32.5 22M32.5 22H22.5M32.5 22V32"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className={styles.buttonPulse}></div>
            </div>
          </div>
        )}
      </div>

      {/* Decorative rings */}
      <div className={styles.ring1}></div>
      <div className={styles.ring2}></div>
      <div className={styles.ring3}></div>
    </div>
  );
}
