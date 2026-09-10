import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/site';

export const runtime = 'edge';
export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1C1C1E 100%)',
          padding: 80,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: '#C9A84C', textTransform: 'uppercase' }}>
          Montreux
        </div>
        <div style={{ fontSize: 56, color: '#F5F0EB', marginTop: 24, textAlign: 'center', lineHeight: 1.2 }}>
          Integrated Wealth Management
        </div>
        <div style={{ fontSize: 24, color: 'rgba(245,240,235,0.7)', marginTop: 20, textAlign: 'center' }}>
          Investments · Planning · Taxation
        </div>
      </div>
    ),
    { ...size },
  );
}
