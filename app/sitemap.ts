import type { MetadataRoute } from 'next';
import { INDEXABLE_ROUTES, SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
