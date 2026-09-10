import About from '@/components/About';
import CashBalancePlansTeaser from '@/components/CashBalancePlansTeaser';
import CashBalancePromo from '@/components/CashBalancePromo';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <CashBalancePlansTeaser />
      <CashBalancePromo />
      <About />
      <Contact />
    </main>
  );
}
