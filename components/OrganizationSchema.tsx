import {
  ADDRESS,
  CONTACT_EMAIL,
  FINRA_CRD,
  LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site';
import JsonLd from './JsonLd';

export default function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        url: SITE_URL,
        email: CONTACT_EMAIL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.zip,
          addressCountry: ADDRESS.country,
        },
        areaServed: 'US',
        description:
          'Integrated wealth management - investment management, financial planning, and tax services for high-net-worth individuals and business owners.',
        knowsAbout: [
          'Investment Management',
          'Financial Planning',
          'Tax Planning',
          'Cash Balance Plans',
          'Estate Planning',
        ],
        identifier: {
          '@type': 'PropertyValue',
          name: 'FINRA CRD',
          value: FINRA_CRD,
        },
      }}
    />
  );
}
