'use client';
import { useEffect, useRef } from 'react';

export default function About() {
  const textRef = useRef<HTMLDivElement>(null);
  const geoRef = useRef<HTMLDivElement>(null);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const targets = [textRef.current, geoRef.current].filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="bg-navy py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div ref={textRef} className="scroll-reveal">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold" />
              <span className="font-body text-xs tracking-widest uppercase text-gold">About Montreux</span>
            </div>

            <h2 className="font-heading font-light text-3xl md:text-4xl tracking-wide uppercase text-cream leading-snug">
              Precision. Discretion.
              <br />
              Continuity.
            </h2>

            <p className="font-body font-light text-cream/70 text-base leading-relaxed mt-8">
              Montreux Wealth Management was founded on a conviction that most people who accumulate
              significant wealth are, paradoxically, underserved by the financial industry. They have an
              accountant, an investment advisor, and perhaps a planner — but rarely does anyone hold the
              complete picture.
            </p>

            <p className="font-body font-light text-cream/70 text-base leading-relaxed mt-6">
              We were founded to solve that problem. Not by offering more products, but by offering genuine
              integration — a single advisory relationship that spans investment management, financial
              planning, and taxation, coordinated by a team that works as one.
            </p>

            <p className="font-body font-light text-cream/70 text-base leading-relaxed mt-6">
              Our leadership combines advanced investment and tax expertise through the CFA and CPA
              designations. By intentionally limiting the number of families and businesses we serve, we
              deliver the level of attention, responsiveness, and strategic guidance that complex financial
              lives deserve.
            </p>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-block mt-10 border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-navy transition-all duration-300 font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Begin the Conversation →
            </a>
          </div>

          {/* Right: Geometric composition */}
          <div ref={geoRef} className="scroll-reveal flex items-center justify-center" style={{ animationDelay: '150ms', transitionDelay: '150ms' }}>
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outermost rectangle — slow pulse */}
              <div
                className="absolute inset-0 animate-geometric-pulse"
                style={{ border: '1px solid rgba(201,168,76,0.10)' }}
              />
              {/* Middle rectangle */}
              <div
                className="absolute"
                style={{
                  inset: '24px',
                  border: '1px solid rgba(201,168,76,0.20)',
                }}
              />
              {/* Inner rectangle */}
              <div
                className="absolute"
                style={{
                  inset: '48px',
                  border: '1px solid rgba(201,168,76,0.40)',
                }}
              />
              {/* Innermost rectangle */}
              <div
                className="absolute"
                style={{
                  inset: '72px',
                  border: '1px solid rgba(201,168,76,0.60)',
                }}
              />

              {/* Diagonal lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 384 384"
                fill="none"
              >
                <line x1="72" y1="72" x2="312" y2="312" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
                <line x1="312" y1="72" x2="72" y2="312" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
              </svg>

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="font-heading italic text-gold text-4xl leading-tight text-center">
                  Est. New York
                </p>
                <p className="font-body text-xs tracking-widest text-gold/50 mt-2 uppercase">
                  Wealth Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
