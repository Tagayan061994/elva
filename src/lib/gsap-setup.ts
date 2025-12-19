'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, MotionPathPlugin);

  // Make SplitText available globally
  (window as any).SplitText = SplitText;
}

export { gsap, ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin, MotionPathPlugin };

