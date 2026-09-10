import AccountingTaxPage from '@/components/pages/AccountingTaxPage';
import { createMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = createMetadata(PAGE_SEO.accountingTax);

export default function Page() {
  return <AccountingTaxPage />;
}
