import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';
import InvestmentManagementPage from './pages/InvestmentManagementPage';
import FinancialPlanningPage from './pages/FinancialPlanningPage';
import AccountingTaxPage from './pages/AccountingTaxPage';
import ClientPortalPage from './pages/ClientPortalPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/investment-management" element={<InvestmentManagementPage />} />
        <Route path="/financial-planning" element={<FinancialPlanningPage />} />
        <Route path="/accounting-tax" element={<AccountingTaxPage />} />
        <Route path="/client-portal" element={<ClientPortalPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
