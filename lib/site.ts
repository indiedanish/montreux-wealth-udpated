export const SITE_URL = 'https://montreuxwm.com';

export const SITE_NAME = 'Montreux Wealth Management';

export const LEGAL_NAME = 'Montreux Group LLC';

export const CONTACT_EMAIL = 'f.hasan@montreuxwealth.com';

export const ADDRESS = {
  street: '42 W. 38th St., Suite 800',
  city: 'New York',
  state: 'NY',
  zip: '10018',
  country: 'US',
};

export const FINRA_CRD = '338982';

export const INDEXABLE_ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/investment-management', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/financial-planning', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/accounting-tax', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/cash-balance-plans', priority: 0.95, changeFrequency: 'monthly' as const },
  { path: '/cash-balance-calculator', priority: 0.95, changeFrequency: 'monthly' as const },
  { path: '/insights', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/disclosures', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
];

export const CASH_BALANCE_FAQ = [
  {
    question: 'What is a Cash Balance Plan?',
    answer:
      'A Cash Balance Plan is an IRS-approved defined benefit retirement plan that allows business owners to contribute based on actuarial retirement funding needs - often $150,000 to $300,000+ annually, far beyond standard 401(k) limits.',
  },
  {
    question: 'How much can I contribute to a Cash Balance Plan?',
    answer:
      'For business owners age 45–60 with consistent high income, typical contributions range from $150,000 to $300,000+ per year. Exact limits are determined by an enrolled actuary based on your age, income, and retirement timeline.',
  },
  {
    question: 'Can I have a Cash Balance Plan and a 401(k)?',
    answer:
      'Yes. The most common structure combines a 401(k) profit-sharing plan with a Cash Balance Plan, allowing total contributions well beyond the $70,000 combined 401(k) limit for 2026.',
  },
  {
    question: 'Who is a Cash Balance Plan best for?',
    answer:
      'Business owners earning $300,000+ annually with consistent income, a 5+ year time horizon before retirement, and manageable employee census costs. Plans work best when cash flow is predictable.',
  },
  {
    question: 'When is a Cash Balance Plan not a good fit?',
    answer:
      'Plans may not be ideal for businesses with unpredictable cash flow, many full-time employees where nondiscrimination testing limits owner contributions, or owners who cannot commit to contributing for at least 3–5 years.',
  },
];
