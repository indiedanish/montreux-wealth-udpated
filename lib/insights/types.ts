export type InsightCategory = 'cash-balance' | 'integrated-wealth' | 'tax-planning';

export type InsightFaqItem = {
  question: string;
  answer: string;
};

export type InsightSection = {
  heading: string;
  paragraphs: string[];
};

export type InsightRelatedLink = {
  href: string;
  label: string;
};

export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  category: InsightCategory;
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  /** Direct answer for AEO - shown prominently at top */
  directAnswer: string;
  sections: InsightSection[];
  faq?: InsightFaqItem[];
  relatedLinks: InsightRelatedLink[];
};

export const INSIGHT_CATEGORY_LABELS: Record<InsightCategory, string> = {
  'cash-balance': 'Cash Balance Plans',
  'integrated-wealth': 'Integrated Wealth Management',
  'tax-planning': 'Tax & Estate Planning',
};
