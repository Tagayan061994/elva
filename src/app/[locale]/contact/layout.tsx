import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { type Locale } from '@/lib/content';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return genMeta(params.locale, 'contact');
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

