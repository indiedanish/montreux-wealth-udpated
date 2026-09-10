'use client';

import type { ComponentProps } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

type TrackedExternalLinkProps = ComponentProps<'a'> & {
  label: string;
  linkLocation: string;
  linkType?: 'external' | 'email';
};

export default function TrackedExternalLink({
  label,
  linkLocation,
  linkType = 'external',
  href,
  onClick,
  ...props
}: TrackedExternalLinkProps) {
  const { trackExternal } = useAnalytics();

  return (
    <a
      href={href}
      onClick={(e) => {
        if (href) trackExternal(label, href, linkLocation, linkType);
        onClick?.(e);
      }}
      {...props}
    />
  );
}
