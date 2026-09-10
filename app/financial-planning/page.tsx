import FinancialPlanningPage from '@/components/pages/FinancialPlanningPage';
import { createMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = createMetadata(PAGE_SEO.financialPlanning);

export default function Page() {
  return <FinancialPlanningPage />;
}
