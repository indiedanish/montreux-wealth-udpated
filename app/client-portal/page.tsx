import ClientPortalPage from '@/components/pages/ClientPortalPage';
import { createMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = createMetadata(PAGE_SEO.clientPortal);

export default function Page() {
  return <ClientPortalPage />;
}
