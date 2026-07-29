import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-between items-start gap-12">
          {/* Left: Wordmark */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="font-heading text-xl tracking-widest text-cream">MONTREUX</span>
              <div className="w-px h-5 bg-gold/40" />
              <span className="font-body text-xs tracking-widest text-gold font-light uppercase">
                Wealth Management
              </span>
            </Link>
            <p className="font-body text-xs text-cream/40 mt-3">
              42 W. 38th St.
              <br />
              Suite 800
              <br />
              New York, NY 10018
            </p>
          </div>

          {/* Center: Nav links */}
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/investment-management"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Investment Management
            </Link>
            <Link
              to="/financial-planning"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Financial Planning
            </Link>
            <Link
              to="/accounting-tax"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Accounting & Tax
            </Link>
            <Link
              to="/client-portal"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Client Portal
            </Link>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Right: Disclosure */}
          <div className="max-w-xs">
            <p className="font-body text-xs text-cream/40 leading-relaxed">
              Montreux Group LLC is a Registered Investment Advisor with FINRA. CRD Number: 338982.
              Registration with FINRA does not imply a certain level of skill or training.
            </p>
            <a
              href="#"
              className="font-body text-xs text-gold underline underline-offset-2 mt-3 inline-block hover:text-gold-light transition-colors duration-200"
            >
              For important disclosures about our services, fees, and conflicts of interest, please click
              to review our Form ADV Brochure.
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 mt-12" />

        {/* Row 2 */}
        <div className="flex flex-wrap justify-between items-center mt-8 gap-4">
          <p className="font-body text-xs text-cream/30">
            © 2026 Montreux Group LLC. All rights reserved.
          </p>
          <a
            href="#"
            className="font-body text-xs text-cream/30 hover:text-gold transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
