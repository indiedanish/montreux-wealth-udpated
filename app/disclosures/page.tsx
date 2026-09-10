import DisclosuresPage from '@/components/pages/DisclosuresPage';
import { createMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = createMetadata(PAGE_SEO.disclosures);

export default function Page() {
  return <DisclosuresPage />;
}
