import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByLocale, getAllPosts, getPostBySlug, markdownToHtml } from '@/lib/posts';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostsByLocale('en').map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.locale !== 'en') return {};
  return { title: `${post.title} — Marcos Irenos`, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date, tags: post.tags } };
}

export default async function EnglishPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getAllPosts().find(candidate => candidate.slug === slug && candidate.locale === 'en');
  if (!post) notFound();
  const html = await markdownToHtml(post.content);
  return (
    <main className="article-shell" lang="en">
      <header className="blog-nav"><Link className="wordmark" href="/">MI<span>.</span></Link><div className="blog-nav-actions"><div className="language-switch" aria-label="Select language"><span className="is-active">EN</span><span>/</span><Link href="/blog">PT</Link></div><Link className="back-link" href="/en/blog">← All notes</Link></div></header>
      <article className="article-page"><div className="article-meta"><span>{post.date}</span><span>{post.readingTime}</span><div className="tag-row">{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><h1>{post.title}</h1><p className="article-excerpt">{post.excerpt}</p><div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} /></article>
      <footer className="blog-footer"><Link href="/en/blog">← More notes</Link><Link href="/">Back to portfolio ↑</Link></footer>
    </main>
  );
}
