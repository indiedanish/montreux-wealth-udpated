import CashBalanceCalculatorPage from '@/components/pages/CashBalanceCalculatorPage';
import { createMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = createMetadata(PAGE_SEO.cashBalanceCalculator);

export default function Page() {
  return <CashBalanceCalculatorPage />;
}
