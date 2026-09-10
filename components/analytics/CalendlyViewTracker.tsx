'use client';

import { useEffect, useRef } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

type CalendlyViewTrackerProps = {
  location: string;
  children: React.ReactNode;
};

/** Fires calendly_viewed once when the embed scrolls into view. */
export default function CalendlyViewTracker({ location, children }: CalendlyViewTrackerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { track, events } = useAnalytics();
  const hasTracked = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked.current) {
          hasTracked.current = true;
          track(events.CALENDLY_VIEWED, { location });
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [events.CALENDLY_VIEWED, location, track]);

  return <div ref={ref}>{children}</div>;
}
