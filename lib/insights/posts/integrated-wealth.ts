import type { InsightPost } from '../types';

export const integratedWealthPosts: InsightPost[] = [
  {
    slug: 'what-is-integrated-wealth-management',
    title: 'What Is Integrated Wealth Management?',
    description:
      'Integrated wealth management coordinates investments, financial planning, and tax strategy under one advisory relationship - reducing gaps and inefficiencies.',
    category: 'integrated-wealth',
    publishedAt: '2026-05-01',
    updatedAt: '2026-09-10',
    readTimeMinutes: 6,
    directAnswer:
      'Integrated wealth management means your investments, financial plan, and tax strategy are designed and managed together by advisors who share the same view of your complete financial picture - rather than siloed across separate firms that rarely communicate.',
    sections: [
      {
        heading: 'The problem with fragmented advice',
        paragraphs: [
          'Many affluent households work with an investment manager, a CPA, and perhaps an estate attorney - but no one holds the full picture. Tax consequences of portfolio moves go unreviewed. Estate documents drift from actual holdings. Cash sits idle because no one owns liquidity planning end-to-end.',
          'The gaps between advisors are where inefficiencies hide.',
        ],
      },
      {
        heading: 'What integration looks like in practice',
        paragraphs: [
          'At Montreux, CFA-led investment management, comprehensive financial planning, and CPA-led tax services operate as one coordinated strategy. Roth conversions, charitable giving, entity structure, and portfolio positioning are evaluated together.',
          'The objective is not more products - it is fewer blind spots.',
        ],
      },
      {
        heading: 'Who benefits most',
        paragraphs: [
          'Integration matters most when your financial life is complex: multiple entities, partnership K-1s, concentrated stock, succession planning, or multi-generational wealth transfer.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/investment-management', label: 'Investment Management' },
      { href: '/financial-planning', label: 'Financial Planning' },
      { href: '/accounting-tax', label: 'Accounting & Tax' },
    ],
  },
  {
    slug: 'wealth-management-new-york-cfa-cpa',
    title: 'Wealth Management in New York: Why CFA + CPA Leadership Matters',
    description:
      'For New York business owners and families, choosing a wealth manager with both investment (CFA) and tax (CPA) depth can improve outcomes across markets and tax code complexity.',
    category: 'integrated-wealth',
    publishedAt: '2026-05-08',
    updatedAt: '2026-09-10',
    readTimeMinutes: 5,
    directAnswer:
      'New York adds state and city tax complexity, high living costs, and sophisticated client needs. A wealth manager led by professionals with CFA and CPA credentials can align portfolio decisions with federal, state, and local tax consequences - a combination less common at investment-only or tax-only firms.',
    sections: [
      {
        heading: 'New York-specific considerations',
        paragraphs: [
          'State and city income taxes, estate tax exposure, and real estate holdings all interact with investment strategy. Asset location, municipal bond allocation, and timing of income recognition require tax-aware portfolio management.',
        ],
      },
      {
        heading: 'CFA and CPA together',
        paragraphs: [
          'The CFA charter reflects deep investment analysis and portfolio construction expertise. CPA credentials reflect tax code mastery and compliance rigor. Montreux combines both disciplines so recommendations are filtered through investment merit and tax impact simultaneously.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/', label: 'Montreux homepage' },
      { href: '/#contact', label: 'Schedule a meeting' },
    ],
  },
  {
    slug: 'why-cpa-and-advisor-should-coordinate',
    title: 'Why Your CPA and Investment Advisor Should Talk to Each Other',
    description:
      'Uncoordinated CPA and advisor relationships create tax drag, missed planning opportunities, and compliance risk. Here is what coordination should look like.',
    category: 'integrated-wealth',
    publishedAt: '2026-05-15',
    updatedAt: '2026-09-10',
    readTimeMinutes: 5,
    directAnswer:
      'Your CPA and investment advisor should share information on income timing, capital gains, retirement plan contributions, entity structure, and estimated tax payments so portfolio moves and tax filings reflect the same strategy - not conflicting assumptions.',
    sections: [
      {
        heading: 'Common coordination failures',
        paragraphs: [
          'Advisors rebalance without discussing lot selection and tax lots with the CPA. CPAs recommend retirement contributions without knowing liquidity needs. K-1 income arrives after portfolio decisions are locked for the quarter.',
        ],
      },
      {
        heading: 'What good coordination includes',
        paragraphs: [
          'Shared calendars for estimated tax dates, pre-year-end gain/loss harvesting aligned with bracket management, retirement plan adoption timed with payroll, and estate document reviews when beneficiary designations change on accounts.',
          'Montreux works alongside your existing CPA when you prefer to keep them - we complement, not replace, your tax quarterback.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/accounting-tax', label: 'Our tax services' },
      { href: '/cash-balance-plans', label: 'Cash Balance Plans' },
    ],
  },
];
