import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './site';

type PageSeo = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function createMetadata({ title, description, path, noIndex }: PageSeo): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === '/' ? `${SITE_NAME} | Integrated Wealth Management Across the US` : `${title} | ${SITE_NAME}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}

export const PAGE_SEO = {
  home: {
    title: SITE_NAME,
    description:
      'CFA & CPA-led integrated wealth management serving clients across the US - investment management, financial planning, and tax services under one roof.',
    path: '/',
  },
  investmentManagement: {
    title: 'Investment Management',
    description:
      'Custom investment portfolios across equities, fixed income, alternatives, and private markets - managed with discipline across every market environment.',
    path: '/investment-management',
  },
  financialPlanning: {
    title: 'Financial Planning',
    description:
      'Comprehensive financial planning - retirement, estate, succession, insurance, and multi-generational wealth transfer coordinated with your investments and taxes.',
    path: '/financial-planning',
  },
  accountingTax: {
    title: 'Accounting & Tax Services',
    description:
      'Proactive tax planning, K-1 preparation, compliance, partnership accounting, and integrated tax strategy coordinated with your wealth plan.',
    path: '/accounting-tax',
  },
  cashBalancePlans: {
    title: 'Cash Balance Plans for Business Owners',
    description:
      'Deduct $150K–$300K+ annually with an IRS-approved Cash Balance Plan. Reduce taxes and accelerate retirement savings for high-income business owners.',
    path: '/cash-balance-plans',
  },
  cashBalanceCalculator: {
    title: 'Cash Balance Tax Savings Calculator',
    description:
      'Free 60-second calculator. Estimate your potential tax savings with a Cash Balance Plan compared to a 401(k) alone. Illustrative only.',
    path: '/cash-balance-calculator',
  },
  clientPortal: {
    title: 'Client Portal',
    description: 'Secure client portal access for Montreux Wealth Management clients.',
    path: '/client-portal',
    noIndex: true,
  },
  disclosures: {
    title: 'Disclosures',
    description: 'Important regulatory disclosures, terms of use, and privacy information for Montreux Wealth Management.',
    path: '/disclosures',
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    description: 'Privacy policy for Montreux Wealth Management and Montreux Group LLC.',
    path: '/privacy-policy',
  },
  insights: {
    title: 'Insights - Wealth & Tax Guides',
    description:
      'Educational articles on Cash Balance Plans, integrated wealth management, and tax strategy for business owners and high-net-worth families across the US.',
    path: '/insights',
  },
} as const;
