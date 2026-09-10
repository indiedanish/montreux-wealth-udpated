'use client';

import Link from 'next/link';
import { ADDRESS, CONTACT_EMAIL } from '@/lib/site';

export default function Footer() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.location.href = '/#contact';
  };

  return (
    <footer className="bg-navy pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap justify-between items-start gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="font-heading text-xl tracking-widest text-cream">MONTREUX</span>
              <div className="w-px h-5 bg-gold/40" />
              <span className="font-body text-xs tracking-widest text-gold font-light uppercase">
                Wealth Management
              </span>
            </Link>
            <p className="font-body text-xs text-cream/40 mt-3">
              {ADDRESS.street}
              <br />
              {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-body text-xs text-gold/70 hover:text-gold transition-colors duration-200 mt-3 inline-block"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav className="flex flex-col space-y-3" aria-label="Footer navigation">
            <Link
              href="/"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/investment-management"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Investment Management
            </Link>
            <Link
              href="/financial-planning"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Financial Planning
            </Link>
            <Link
              href="/accounting-tax"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Accounting & Tax
            </Link>
            <Link
              href="/cash-balance-plans"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Cash Balance Plans
            </Link>
            <Link
              href="/cash-balance-calculator"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Tax Savings Calculator
            </Link>
            <Link
              href="/client-portal"
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Client Portal
            </Link>
            <a
              href="/#contact"
              onClick={scrollToContact}
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          <div className="max-w-xs">
            <p className="font-body text-xs text-cream/40 leading-relaxed">
              Montreux Group LLC is a Registered Investment Advisor with FINRA. CRD Number: 338982.
              Registration with FINRA does not imply a certain level of skill or training.
            </p>
            <Link
              href="/disclosures"
              className="font-body text-xs text-gold underline underline-offset-2 mt-3 inline-block hover:text-gold-light transition-colors duration-200"
            >
              For important disclosures about our services, fees, and conflicts of interest, please review
              our Disclosures page.
            </Link>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12" />

        <div className="flex flex-wrap justify-between items-center mt-8 gap-4">
          <p className="font-body text-xs text-cream/30">
            © 2026 Montreux Group LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/disclosures"
              className="font-body text-xs text-cream/30 hover:text-gold transition-colors duration-200"
            >
              Disclosures
            </Link>
            <Link
              href="/privacy-policy"
              className="font-body text-xs text-cream/30 hover:text-gold transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
