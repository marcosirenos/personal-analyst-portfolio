import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib/posts';

type PostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Marcos Krunn`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date, tags: post.tags },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const html = await markdownToHtml(post.content);

  return (
    <main className="article-shell">
      <header className="blog-nav">
        <Link className="wordmark" href="/">MK<span>.</span></Link>
        <Link className="back-link" href="/blog">← All notes</Link>
      </header>
      <article className="article-page">
        <div className="article-meta">
          <span>{post.date}</span><span>{post.readingTime}</span>
          <div className="tag-row">{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </div>
        <h1>{post.title}</h1>
        <p className="article-excerpt">{post.excerpt}</p>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <footer className="blog-footer">
        <Link href="/blog">← More notes</Link>
        <Link href="/">Back to portfolio ↑</Link>
      </footer>
    </main>
  );
}
