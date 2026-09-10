'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { SiteImageMeta } from '@/lib/images';

type SiteImageProps = SiteImageMeta & {
  className?: string;
  priority?: boolean;
  sizes?: string;
} & (
    | { fill: true; width?: never; height?: never }
    | { fill?: false; width: number; height: number }
  );

export default function SiteImage({
  src,
  alt,
  className,
  priority = false,
  sizes,
  fill,
  width,
  height,
}: SiteImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`bg-navy/80 ${className ?? ''} ${fill ? 'absolute inset-0' : ''}`}
        role="img"
        aria-label={alt}
      />
    );
  }

  const shared = {
    src,
    alt,
    priority,
    onError: () => setFailed(true),
  };

  if (fill) {
    return (
      <Image
        {...shared}
        fill
        sizes={sizes ?? '(max-width: 768px) 100vw, 1200px'}
        className={className}
      />
    );
  }

  return (
    <Image
      {...shared}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
    />
  );
}
