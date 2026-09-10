import InvestmentManagementPage from '@/components/pages/InvestmentManagementPage';
import { createMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = createMetadata(PAGE_SEO.investmentManagement);

export default function Page() {
  return <InvestmentManagementPage />;
}
