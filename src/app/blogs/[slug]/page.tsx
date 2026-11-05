import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsPostDetail from "../../../components/NewsPostDetail";
import { blogsEnabled, getNewsBySlug, newsPosts } from "../../../data/news";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);

  if (!blogsEnabled || !post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  // Use explicit custom SEO if defined on the article; otherwise fall back to defaults
  const title = post.seo?.title || `${post.title} | NNK Insights`;
  const description = post.seo?.description || post.excerpt;
  const keywords = post.seo?.keywords || [
    post.title,
    "NNK Insights",
    "Hyderabad Architecture",
    "Real Estate Blog",
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/blogs/${slug}`,
      type: "article",
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);

  if (!blogsEnabled || !post) {
    notFound();
  }

  return <NewsPostDetail post={post} />;
}
