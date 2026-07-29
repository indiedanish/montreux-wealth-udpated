export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Diagonal lines: each defined by start/end as percentages of the 1440×900 viewBox
  // stroke-dasharray equals the approximate Euclidean length of each line
  const lines = [
    { x1: -5,   y1: 110, x2: 55,  y2: -10,  len: 1560, cls: 'animate-draw-line-1' },
    { x1: 20,   y1: 110, x2: 80,  y2: -10,  len: 1560, cls: 'animate-draw-line-2' },
    { x1: 60,   y1: 110, x2: 120, y2: -10,  len: 1560, cls: 'animate-draw-line-3' },
    { x1: 110,  y1: -10, x2: 30,  y2: 110,  len: 1560, cls: 'animate-draw-line-4' },
    { x1: -10,  y1: 30,  x2: 110, y2: 80,   len: 1400, cls: 'animate-draw-line-5' },
    { x1: 105,  y1: 110, x2: 45,  y2: -10,  len: 1560, cls: 'animate-draw-line-6' },
  ];

  return (
    <section className="relative min-h-screen bg-navy flex flex-col items-center justify-center overflow-hidden">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #1C1C1E 0%, #0D1B2A 70%)',
        }}
      />

      {/* Diagonal grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* SVG architectural lines — draw in on load then remain static */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {lines.map((l, i) => (
          <line
            key={i}
            x1={`${l.x1}%`}
            y1={`${l.y1}%`}
            x2={`${l.x2}%`}
            y2={`${l.y2}%`}
            stroke="rgba(201,168,76,0.07)"
            strokeWidth="0.15"
            strokeDasharray={l.len}
            strokeDashoffset={l.len}
            className={l.cls}
          />
        ))}
      </svg>

      {/* Horizontal scan line — draws left-to-right once on load */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 h-px pointer-events-none animate-scan-line"
        style={{
          top: '50%',
          background: 'linear-gradient(to right, transparent 0%, rgba(201,168,76,0.4) 30%, rgba(201,168,76,0.4) 70%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="animate-fade-up-1 flex items-center gap-4 mb-10">
          <div className="w-12 h-px bg-gold" />
          <span className="font-body text-xs tracking-widest uppercase text-gold">
            Integrated Wealth Management
          </span>
        </div>

        {/* H1 */}
        <h1 className="animate-fade-up-2 font-heading font-light text-5xl md:text-7xl leading-tight text-cream tracking-tight max-w-4xl">
          Where Financial{' '}
          <em className="text-gold not-italic" style={{ fontStyle: 'italic' }}>Precision</em>
          <br />
          Meets Generational Purpose.
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-3 font-body font-light text-lg md:text-xl text-cream/70 max-w-2xl mt-8 leading-relaxed">
          The integrated management of your wealth — investments, planning, and taxation — designed to
          compound your advantage across every chapter of your life.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          onClick={scrollToContact}
          className="animate-fade-up-4 inline-block mt-12 bg-gold text-navy px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300 font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          Begin the Conversation →
        </a>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
    </section>
  );
}
