import InsightsIndex from '@/components/insights/InsightsIndex';
import { createMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = createMetadata(PAGE_SEO.insights);

export default function InsightsPage() {
  return <InsightsIndex />;
}
