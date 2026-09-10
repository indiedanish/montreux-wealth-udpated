import type { InsightCategory } from '@/lib/insights/types';

export type SiteImageMeta = {
  src: string;
  alt: string;
};

/** Verified Unsplash CDN URLs (free license: https://unsplash.com/license) */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SITE_IMAGES = {
  citySkyline: {
    src: u('photo-1477959858617-67f85cf4f1df'),
    alt: 'City skyline at dusk',
  },
  businessMeeting: {
    src: u('photo-1556761175-5973dc0f32e7'),
    alt: 'Business professionals in a strategy meeting',
  },
  financialDesk: {
    src: u('photo-1454165804606-c3d57bc86b40'),
    alt: 'Financial planning documents and laptop analytics',
  },
  taxDocuments: {
    src: u('photo-1450101499163-c8848c66ca85'),
    alt: 'Tax and financial documents on a desk',
  },
  advisoryTeam: {
    src: u('photo-1522071820081-009f0129c71c'),
    alt: 'Wealth advisory team collaboration',
  },
  financeCharts: {
    src: u('photo-1590283603385-17ffb3a7f29f'),
    alt: 'Financial charts and market data',
  },
  modernOffice: {
    src: u('photo-1497366216548-37526070297c'),
    alt: 'Modern corporate office interior',
  },
  businessOwner: {
    src: u('photo-1560250097-0b93528c311a'),
    alt: 'Business owner in a professional setting',
  },
  workspace: {
    src: u('photo-1504384308090-c894fdcc538d'),
    alt: 'Professional workspace with natural light',
  },
  teamWorkspace: {
    src: u('photo-1517245386807-bb43f82c33c4'),
    alt: 'Team collaborating in a modern office',
  },
  officeCollaboration: {
    src: u('photo-1600880292203-757bb62b4baf'),
    alt: 'Colleagues planning together at a table',
  },
  professionalPortrait: {
    src: u('photo-1507003211169-0a1dd7228f2d'),
    alt: 'Professional advisor in business attire',
  },
  laptopWork: {
    src: u('photo-1486312338219-ce68d2c6f44d'),
    alt: 'Person working on financial analysis on a laptop',
  },
  wealthPlanning: {
    src: u('photo-1563986768609-322da13575f3'),
    alt: 'Wealth planning and investment review',
  },
  businessHandshake: {
    src: u('photo-1521791136064-7986c2920216'),
    alt: 'Business partners shaking hands',
  },
  strategyMeeting: {
    src: u('photo-1553877522-43269d4ea984'),
    alt: 'Executive strategy meeting in a boardroom',
  },
} satisfies Record<string, SiteImageMeta>;

const CATEGORY_IMAGES: Record<InsightCategory, SiteImageMeta> = {
  'cash-balance': SITE_IMAGES.businessMeeting,
  'integrated-wealth': SITE_IMAGES.advisoryTeam,
  'tax-planning': SITE_IMAGES.taxDocuments,
};

/** One unique image per insight article (no repeats) */
const INSIGHT_IMAGE_BY_SLUG: Record<string, SiteImageMeta> = {
  'what-is-a-cash-balance-plan': SITE_IMAGES.financeCharts,
  'cash-balance-plan-vs-401k': SITE_IMAGES.financialDesk,
  'who-qualifies-for-cash-balance-plan': SITE_IMAGES.businessOwner,
  'cash-balance-plan-and-401k-together': SITE_IMAGES.taxDocuments,
  'cash-balance-plan-contribution-limits-by-age': SITE_IMAGES.professionalPortrait,
  'cash-balance-plan-tax-deadlines': SITE_IMAGES.wealthPlanning,
  'when-cash-balance-plan-not-good-fit': SITE_IMAGES.modernOffice,
  'what-is-integrated-wealth-management': SITE_IMAGES.advisoryTeam,
  'wealth-management-new-york-cfa-cpa': SITE_IMAGES.citySkyline,
  'why-cpa-and-advisor-should-coordinate': SITE_IMAGES.officeCollaboration,
  'k1-tax-planning-partnerships': SITE_IMAGES.laptopWork,
  'estate-planning-high-net-worth-new-york': SITE_IMAGES.workspace,
  'defined-benefit-vs-defined-contribution-plans': SITE_IMAGES.teamWorkspace,
};

export function getInsightImage(slug: string, category: InsightCategory): SiteImageMeta {
  return INSIGHT_IMAGE_BY_SLUG[slug] ?? CATEGORY_IMAGES[category];
}
