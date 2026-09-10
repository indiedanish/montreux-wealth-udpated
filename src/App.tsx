import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import InvestmentManagementPage from './pages/InvestmentManagementPage';
import FinancialPlanningPage from './pages/FinancialPlanningPage';
import AccountingTaxPage from './pages/AccountingTaxPage';
import ClientPortalPage from './pages/ClientPortalPage';
import DisclosuresPage from './pages/DisclosuresPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CashBalancePlansPage from './pages/CashBalancePlansPage';
import CashBalanceCalculatorPage from './pages/CashBalanceCalculatorPage';

function AppShell() {
  const { pathname } = useLocation();
  const isCalculatorFunnel = pathname === '/cash-balance-calculator';

  return (
    <>
      <ScrollToTop />
      {!isCalculatorFunnel && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/investment-management" element={<InvestmentManagementPage />} />
        <Route path="/financial-planning" element={<FinancialPlanningPage />} />
        <Route path="/accounting-tax" element={<AccountingTaxPage />} />
        <Route path="/cash-balance-plans" element={<CashBalancePlansPage />} />
        <Route path="/cash-balance-calculator" element={<CashBalanceCalculatorPage />} />
        <Route path="/client-portal" element={<ClientPortalPage />} />
        <Route path="/disclosures" element={<DisclosuresPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      {!isCalculatorFunnel && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
