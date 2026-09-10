'use client';

import { usePostHog } from '@posthog/next';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import {
  ANALYTICS_EVENTS,
  type AnalyticsEventName,
  getPageContext,
} from '@/lib/analytics/events';

type EventProperties = Record<string, string | number | boolean | null | undefined>;

export function useAnalytics() {
  const posthog = usePostHog();
  const pathname = usePathname();

  const track = useCallback(
    (event: AnalyticsEventName, properties?: EventProperties) => {
      if (!posthog) return;
      const pageContext = getPageContext(pathname);
      posthog.capture(event, {
        ...pageContext,
        ...properties,
      });
    },
    [pathname, posthog],
  );

  return { track, posthog, events: ANALYTICS_EVENTS };
}
