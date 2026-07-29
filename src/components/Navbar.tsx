import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

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
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const services = [
    { label: 'Investment Management', to: '/investment-management' },
    { label: 'Financial Planning', to: '/financial-planning' },
    { label: 'Accounting & Tax', to: '/accounting-tax' },
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAnchorNav = (sectionId: string) => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
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
          {/* Wordmark */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <span className="font-heading text-xl tracking-widest text-cream">MONTREUX</span>
            <div className="w-px h-5 bg-gold/40" />
            <span className="font-body text-xs tracking-widest text-gold font-light uppercase">
              Wealth Management
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className="font-body text-xs tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 bg-navy border border-gold/20 shadow-2xl">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-6 py-4 font-body text-xs tracking-widest uppercase text-cream/80 hover:text-gold hover:bg-gold/5 transition-colors duration-200 border-b border-gold/10 last:border-b-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleAnchorNav('about-section')}
              className="font-body text-xs tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200"
            >
              About
            </button>

            <button
              onClick={() => handleAnchorNav('contact')}
              className="font-body text-xs tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Right: Client Portal + Hamburger */}
          <div className="flex items-center gap-6">
            <Link
              to="/client-portal"
              className={`hidden md:inline-flex px-6 py-2.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 font-body ${
                location.pathname === '/client-portal'
                  ? 'bg-gold text-navy'
                  : 'border border-gold text-gold hover:bg-gold hover:text-navy'
              }`}
            >
              Client Portal
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-px bg-gold transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-px bg-gold transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-gold transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy flex flex-col justify-center items-center transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          <Link to="/" className="font-body text-sm tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200">
            Home
          </Link>
          {services.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="font-body text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors duration-200"
            >
              {s.label}
            </Link>
          ))}
          <button
            onClick={() => handleAnchorNav('about-section')}
            className="font-body text-sm tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => handleAnchorNav('contact')}
            className="font-body text-sm tracking-widest uppercase text-cream hover:text-gold transition-colors duration-200"
          >
            Contact
          </button>
          <Link
            to="/client-portal"
            className="border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-navy transition-all duration-300 font-body mt-4"
          >
            Client Portal
          </Link>
        </div>
      </div>
    </>
  );
}
