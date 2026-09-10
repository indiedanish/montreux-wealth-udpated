'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

type TrackedLinkProps = ComponentProps<typeof Link> & {
  tracking:
    | { type: 'cta'; text: string; location: string }
    | { type: 'nav'; item: string; location: string };
};

function destinationFromHref(href: ComponentProps<typeof Link>['href']): string {
  if (typeof href === 'string') return href;
  if (typeof href === 'object' && href !== null && 'pathname' in href && href.pathname) {
    return href.pathname;
  }
  return String(href);
}

export default function TrackedLink({ tracking, href, onClick, ...props }: TrackedLinkProps) {
  const { trackCta, trackNavClick } = useAnalytics();
  const destination = destinationFromHref(href);

  return (
    <Link
      href={href}
      onClick={(e) => {
        if (tracking.type === 'cta') {
          trackCta(tracking.text, tracking.location, destination);
        } else {
          trackNavClick(tracking.item, destination, tracking.location);
        }
        onClick?.(e);
      }}
      {...props}
    />
  );
}
