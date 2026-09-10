'use client';

import Link from 'next/link';
import { useAnalytics } from '@/hooks/useAnalytics';

type ContactLinkProps = {
  className?: string;
  children: React.ReactNode;
  trackingLocation?: string;
};

export default function ContactLink({
  className,
  children,
  trackingLocation = 'contact_link',
}: ContactLinkProps) {
  const { trackContactScroll } = useAnalytics();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    trackContactScroll(trackingLocation, typeof children === 'string' ? children : 'Contact');
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.location.href = '/#contact';
  };

  return (
    <Link href="/#contact" onClick={scrollToContact} className={className}>
      {children}
    </Link>
  );
}
