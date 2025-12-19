'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

interface Waypoint {
  x: number;
  y: number;
  scale?: number;
  rotation?: number;
  opacity?: number;
}

interface MotionPathWaypointsProps {
  children: React.ReactNode;
  waypoints: Waypoint[];
  duration?: number;
  start?: string;
  end?: string;
  autoRotate?: boolean | number;
  className?: string;
  trigger?: string | HTMLElement;
  curviness?: number;
}

export default function MotionPathWaypoints({
  children,
  waypoints,
  duration = 1,
  start = 'top bottom',
  end = 'bottom top',
  autoRotate = true,
  className = '',
  trigger,
  curviness = 1,
}: MotionPathWaypointsProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current.firstElementChild as HTMLElement;
    if (!element) return;

    // Set transform origin for rotation
    if (autoRotate) {
      gsap.set(element, { transformOrigin: '50% 50%' });
    }

    // Create path from waypoints
    const path = waypoints.map((wp) => ({ x: wp.x, y: wp.y }));

    // Create timeline for waypoint animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || elementRef.current,
        start: start,
        end: end,
        scrub: true,
        markers: false,
      },
    });

    // Animate along path
    tl.to(element, {
      motionPath: {
        path: path,
        autoRotate: autoRotate,
        alignOrigin: [0.5, 0.5],
        curviness: curviness,
      },
      duration: duration,
      ease: 'none',
    });

    // Animate properties at waypoints if provided
    waypoints.forEach((waypoint, index) => {
      if (waypoint.scale !== undefined || waypoint.rotation !== undefined || waypoint.opacity !== undefined) {
        const progress = (index + 1) / waypoints.length;
        const props: any = {};

        if (waypoint.scale !== undefined) props.scale = waypoint.scale;
        if (waypoint.rotation !== undefined) props.rotation = waypoint.rotation;
        if (waypoint.opacity !== undefined) props.opacity = waypoint.opacity;

        tl.to(element, {
          ...props,
          duration: 0.1,
          ease: 'power2.inOut',
        }, progress * duration);
      }
    });

    const elementContainer = elementRef.current;
    const triggerElement = trigger || elementContainer;

    return () => {
      if (elementContainer) {
        tl.kill();
      }
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === triggerElement) {
          st.kill();
        }
      });
    };
  }, [waypoints, duration, start, end, autoRotate, trigger, curviness]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

