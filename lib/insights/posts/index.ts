import { cashBalancePosts } from './cash-balance';
import { integratedWealthPosts } from './integrated-wealth';
import { taxPlanningPosts } from './tax-planning';
import type { InsightCategory, InsightPost } from '../types';

export const ALL_INSIGHT_POSTS: InsightPost[] = [
  ...cashBalancePosts,
  ...integratedWealthPosts,
  ...taxPlanningPosts,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getInsightPost(slug: string): InsightPost | undefined {
  return ALL_INSIGHT_POSTS.find((p) => p.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  return ALL_INSIGHT_POSTS.map((p) => p.slug);
}

export function getInsightsByCategory(category: InsightCategory): InsightPost[] {
  return ALL_INSIGHT_POSTS.filter((p) => p.category === category);
}
