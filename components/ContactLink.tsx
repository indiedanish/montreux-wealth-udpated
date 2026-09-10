'use client';

import Link from 'next/link';

type ContactLinkProps = {
  className?: string;
  children: React.ReactNode;
};

export default function ContactLink({ className, children }: ContactLinkProps) {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
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
