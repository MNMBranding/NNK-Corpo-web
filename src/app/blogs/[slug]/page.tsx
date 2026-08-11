import { notFound } from "next/navigation";
import NewsPostDetail from "../../../components/NewsPostDetail";
import { getNewsBySlug, newsPosts } from "../../../data/news";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);

  if (!post) {
    notFound();
  }

  return <NewsPostDetail post={post} />;
}
