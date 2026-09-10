import About from '@/components/About';
import CashBalancePromo from '@/components/CashBalancePromo';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <CashBalancePromo />
      <About />
      <Contact />
    </main>
  );
}
