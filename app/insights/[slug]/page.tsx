import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InsightArticle from '@/components/insights/InsightArticle';
import { getAllInsightSlugs, getInsightPost } from '@/lib/insights';
import { createMetadata } from '@/lib/seo';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightPost(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/insights/${post.slug}`,
  });
}

export default async function InsightPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getInsightPost(slug);
  if (!post) notFound();

  return <InsightArticle post={post} />;
}
