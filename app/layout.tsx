import type { Metadata } from 'next';
import { PostHogPageView, PostHogProvider } from '@posthog/next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Suspense } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import OrganizationSchema from '@/components/OrganizationSchema';
import ScrollToTop from '@/components/ScrollToTop';
import { createMetadata, PAGE_SEO } from '@/lib/seo';
import './globals.css';

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = createMetadata(PAGE_SEO.home);

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrganizationSchema />
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-body antialiased">
        {posthogKey ? (
          <PostHogProvider apiKey={posthogKey} clientOptions={{ api_host: '/ingest' }}>
            <Suspense fallback={null}>
              <PostHogPageView />
            </Suspense>
            <AppShell>{children}</AppShell>
          </PostHogProvider>
        ) : (
          <AppShell>{children}</AppShell>
        )}
      </body>
    </html>
  );
}
