import JsonLd from './JsonLd';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title?: string;
  items: FaqItem[];
  includeSchema?: boolean;
};

export default function FaqSection({
  title = 'Frequently Asked Questions',
  items,
  includeSchema = true,
}: FaqSectionProps) {
  return (
    <section className="bg-cream py-24" aria-labelledby="faq-heading">
      {includeSchema && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }}
        />
      )}
      <div className="max-w-3xl mx-auto px-6">
        <h2 id="faq-heading" className="font-heading font-light text-3xl md:text-4xl text-navy text-center leading-snug">
          {title}
        </h2>
        <dl className="mt-12 space-y-8">
          {items.map((item) => (
            <div key={item.question}>
              <dt className="font-heading font-semibold text-xl text-navy">{item.question}</dt>
              <dd className="font-body text-text-muted text-base leading-relaxed mt-3">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
