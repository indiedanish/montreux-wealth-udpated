'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { CALENDLY_MEETING_URL } from '@/constants/calendly';

type CalendlyEmbedProps = {
  clipHeader?: boolean;
  height?: string;
};

const CALENDLY_ORIGIN = 'https://calendly.com';
const LOAD_TIMEOUT_MS = 12_000;
const IFRAME_LOAD_FALLBACK_MS = 2_500;

function isCalendlyReadyMessage(data: unknown): boolean {
  if (!data || typeof data !== 'object' || !('event' in data)) return false;
  const event = (data as { event?: string }).event;
  return event === 'calendly.page_height' || event === 'calendly.event_type_viewed';
}

function CalendlyLoader() {
  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white"
      aria-live="polite"
      aria-busy="true"
    >
      <div
        className="h-10 w-10 rounded-full border-2 border-gold/30 border-t-gold animate-spin"
        role="status"
        aria-label="Loading calendar"
      />
      <p className="mt-4 font-body text-sm text-text-muted tracking-wide">Loading calendar…</p>
    </div>
  );
}

export default function CalendlyEmbed({ clipHeader = true, height = '680px' }: CalendlyEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const markedRef = useRef(false);
  const iframeFallbackRef = useRef<number | null>(null);

  const markLoaded = useCallback(() => {
    if (markedRef.current) return;
    markedRef.current = true;
    setLoaded(true);
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== CALENDLY_ORIGIN) return;
      if (isCalendlyReadyMessage(event.data)) markLoaded();
    };

    window.addEventListener('message', onMessage);
    const timeout = window.setTimeout(markLoaded, LOAD_TIMEOUT_MS);

    return () => {
      window.removeEventListener('message', onMessage);
      window.clearTimeout(timeout);
      if (iframeFallbackRef.current !== null) {
        window.clearTimeout(iframeFallbackRef.current);
      }
    };
  }, [markLoaded]);

  const handleIframeLoad = () => {
    if (iframeFallbackRef.current !== null) {
      window.clearTimeout(iframeFallbackRef.current);
    }
    iframeFallbackRef.current = window.setTimeout(markLoaded, IFRAME_LOAD_FALLBACK_MS);
  };

  const iframeClassName = clipHeader
    ? `absolute inset-0 w-full h-[calc(100%+72px)] -top-[72px] border-0 transition-opacity duration-500 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`
    : `w-full border-0 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`;

  const iframe = (
    <iframe
      title="Schedule a meeting with Montreux Wealth"
      src={CALENDLY_MEETING_URL}
      width="100%"
      height={clipHeader ? '100%' : height}
      frameBorder={0}
      onLoad={handleIframeLoad}
      className={iframeClassName}
    />
  );

  if (clipHeader) {
    return (
      <div className="bg-white shadow-sm overflow-hidden border border-gray-100">
        <div className="relative overflow-hidden" style={{ height }}>
          {!loaded && <CalendlyLoader />}
          {iframe}
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white shadow-sm overflow-hidden border border-gray-100" style={{ height }}>
      {!loaded && <CalendlyLoader />}
      {iframe}
    </div>
  );
}
