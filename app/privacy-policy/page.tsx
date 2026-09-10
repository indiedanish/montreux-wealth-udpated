import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';
import { createMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = createMetadata(PAGE_SEO.privacyPolicy);

export default function Page() {
  return <PrivacyPolicyPage />;
}
