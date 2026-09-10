import CashBalancePlansPage from '@/components/pages/CashBalancePlansPage';
import { createMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = createMetadata(PAGE_SEO.cashBalancePlans);

export default function Page() {
  return <CashBalancePlansPage />;
}
