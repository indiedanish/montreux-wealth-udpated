import Hero from '../components/Hero';
import Services from '../components/Services';
import CashBalancePromo from '../components/CashBalancePromo';
import About from '../components/About';
import Contact from '../components/Contact';

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
