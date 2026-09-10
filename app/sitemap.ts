import type { MetadataRoute } from 'next';
import { ALL_INSIGHT_POSTS } from '@/lib/insights';
import { INDEXABLE_ROUTES, SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = INDEXABLE_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const insightRoutes = ALL_INSIGHT_POSTS.map((post) => ({
    url: `${SITE_URL}/insights/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...insightRoutes];
}
