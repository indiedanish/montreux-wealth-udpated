'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { track, events } = useAnalytics();

  const trackNav = (item: string, destination: string) => {
    track(events.NAV_CLICKED, { nav_item: item, destination, nav_location: 'navbar' });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const services = [
    { label: 'Investment Management', href: '/investment-management' },
    { label: 'Financial Planning', href: '/financial-planning' },
    { label: 'Accounting & Tax', href: '/accounting-tax' },
    { label: 'Cash Balance Plans', href: '/cash-balance-plans' },
    { label: 'Tax Savings Calculator', href: '/cash-balance-calculator' },
  ];

  const handleAnchorNav = (sectionId: string, label: string) => {
    setMobileOpen(false);
    trackNav(label, `/#${sectionId}`);
    if (pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm transition-all duration-300 ${
          scrolled ? 'border-b border-gold/20' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link href="/" onClick={() => trackNav('logo', '/')} className="flex items-center gap-3 flex-shrink-0">
            <span className="font-heading text-xl tracking-widest text-cream">MONTREUX</span>
            <div className="w-px h-5 bg-gold/40" />
            <span className="font-body text-xs tracking-widest text-gold font-light uppercase">
              Wealth Management
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              onClick={() => trackNav('Home', '/')}
              className="font-body text-xs tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200"
            >
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => {
                  if (!servicesOpen) track(events.SERVICES_MENU_OPENED, { nav_location: 'navbar' });
                  setServicesOpen((v) => !v);
                }}
                className="font-body text-xs tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200 flex items-center gap-1"
              >
                Services
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-navy border border-gold/20 shadow-2xl">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => trackNav(s.label, s.href)}
                      className="block px-6 py-4 font-body text-xs tracking-widest uppercase text-cream/80 hover:text-gold hover:bg-gold/5 transition-colors duration-200 border-b border-gold/10 last:border-b-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleAnchorNav('about-section', 'About')}
              className="font-body text-xs tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200"
            >
              About
            </button>

            <button
              onClick={() => handleAnchorNav('contact', 'Contact')}
              className="font-body text-xs tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/client-portal"
              onClick={() => trackNav('Client Portal', '/client-portal')}
              className={`hidden md:inline-flex px-6 py-2.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 font-body ${
                pathname === '/client-portal'
                  ? 'bg-gold text-navy'
                  : 'border border-gold text-gold hover:bg-gold hover:text-navy'
              }`}
            >
              Client Portal
            </Link>

            <button
              onClick={() => {
                setMobileOpen((v) => {
                  if (!v) track(events.MOBILE_MENU_OPENED, { nav_location: 'navbar' });
                  return !v;
                });
              }}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px bg-gold transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-6 h-px bg-gold transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-px bg-gold transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-navy flex flex-col justify-center items-center transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          <Link
            href="/"
            onClick={() => trackNav('Home', '/')}
            className="font-body text-sm tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200"
          >
            Home
          </Link>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => trackNav(s.label, s.href)}
              className="font-body text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors duration-200"
            >
              {s.label}
            </Link>
          ))}
          <button
            onClick={() => handleAnchorNav('about-section', 'About')}
            className="font-body text-sm tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => handleAnchorNav('contact', 'Contact')}
            className="font-body text-sm tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200"
          >
            Contact
          </button>
          <Link
            href="/client-portal"
            onClick={() => trackNav('Client Portal', '/client-portal')}
            className="border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-navy transition-all duration-300 font-body mt-4"
          >
            Client Portal
          </Link>
        </div>
      </div>
    </>
  );
}
