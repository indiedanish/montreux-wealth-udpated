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

  const trackCta = useCallback(
    (cta_text: string, cta_location: string, destination: string, extra?: EventProperties) => {
      track(ANALYTICS_EVENTS.CTA_CLICKED, {
        cta_text,
        cta_location,
        destination,
        ...extra,
      });
    },
    [track],
  );

  const trackNavClick = useCallback(
    (nav_item: string, destination: string, nav_location: string) => {
      track(ANALYTICS_EVENTS.NAV_CLICKED, { nav_item, destination, nav_location });
    },
    [track],
  );

  const trackContactScroll = useCallback(
    (cta_location: string, cta_text = 'Begin the Conversation') => {
      trackCta(cta_text, cta_location, '/#contact');
    },
    [trackCta],
  );

  const trackExternal = useCallback(
    (
      label: string,
      external_url: string,
      link_location: string,
      link_type: 'external' | 'email' = 'external',
    ) => {
      track(ANALYTICS_EVENTS.EXTERNAL_LINK_CLICKED, {
        label,
        external_url,
        link_location,
        link_type,
      });
    },
    [track],
  );

  return {
    track,
    trackCta,
    trackNavClick,
    trackContactScroll,
    trackExternal,
    posthog,
    events: ANALYTICS_EVENTS,
  };
}
