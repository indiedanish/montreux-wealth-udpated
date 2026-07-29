interface Props {
  title: string;
}

export default function PlaceholderPage({ title }: Props) {
  return (
    <main className="bg-cream min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-6 py-32">
        <div className="flex items-center gap-4 justify-center mb-8">
          <div className="w-12 h-px bg-gold" />
          <span className="font-body text-xs tracking-widest uppercase text-gold">Coming Soon</span>
          <div className="w-12 h-px bg-gold" />
        </div>
        <h1 className="font-heading font-light text-5xl md:text-6xl tracking-tight text-navy">
          {title}
        </h1>
        <p className="font-body font-light text-text-muted text-lg mt-6 max-w-lg mx-auto leading-relaxed">
          This page is being thoughtfully prepared. Please check back soon or contact us directly.
        </p>
      </div>
    </main>
  );
}
