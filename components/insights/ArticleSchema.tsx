import JsonLd from '@/components/JsonLd';
import { LEGAL_NAME, SITE_NAME, SITE_URL } from '@/lib/site';
import type { InsightPost } from '@/lib/insights/types';

type ArticleSchemaProps = {
  post: InsightPost;
};

export default function ArticleSchema({ post }: ArticleSchemaProps) {
  const url = `${SITE_URL}/insights/${post.slug}`;

  const graph: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: LEGAL_NAME,
        url: SITE_URL,
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url,
    },
  ];

  if (post.faq && post.faq.length > 0) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  return <JsonLd data={graph} />;
}
