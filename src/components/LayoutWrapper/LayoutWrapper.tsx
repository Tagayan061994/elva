'use client';

import { useState } from 'react';
import SmoothScroll from '../SmoothScroll/SmoothScroll';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import type { Locale } from '@/lib/content';

interface LayoutWrapperProps {
  children: React.ReactNode;
  locale: Locale;
}

export default function LayoutWrapper({ children, locale }: LayoutWrapperProps) {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <>
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}
      <SmoothScroll>
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </SmoothScroll>
    </>
  );
}
