import CalendlyEmbed from './CalendlyEmbed';

type ContactProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export default function Contact({
  eyebrow = 'Schedule a Meeting',
  title = 'Every Meaningful Partnership Begins with a Single Conversation.',
  subtitle = 'Pick a time that works for you. One of our principals will meet with you personally — 30 minutes, no obligation.',
}: ContactProps) {
  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 justify-center mb-6">
          <div className="w-12 h-px bg-gold" />
          <span className="font-body text-xs tracking-widest uppercase text-gold">{eyebrow}</span>
          <div className="w-12 h-px bg-gold" />
        </div>

        <h2 className="font-heading font-light text-3xl md:text-4xl text-navy text-center leading-snug max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="font-body font-light text-text-muted text-base leading-relaxed max-w-xl mx-auto text-center mt-6">
          {subtitle}
        </p>

        <div className="max-w-3xl mx-auto mt-12">
          <CalendlyEmbed />
          <p className="text-center mt-6 font-body text-xs text-text-muted">
            Your information is handled with complete confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
}
