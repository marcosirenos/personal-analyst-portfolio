import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Writing — Marcos Krunn',
  description: 'Notes on analytics engineering, data products, and useful software by Marcos Krunn.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="blog-shell">
      <header className="blog-nav">
        <Link className="wordmark" href="/">MK<span>.</span></Link>
        <Link className="back-link" href="/">← Back to portfolio</Link>
      </header>

      <section className="blog-hero">
        <p className="section-kicker"><span>06</span> FIELD NOTES</p>
        <h1>Thinking in<br /><em>public.</em></h1>
        <p>Writing about analytics engineering, dashboards, and the decisions that make data useful.</p>
      </section>

      <section className="post-list" aria-label="Blog posts">
        {posts.length > 0 ? posts.map(post => (
          <article className="post-card" key={post.slug}>
            <div className="post-card-meta">
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
            </div>
            <div className="post-card-body">
              <div>
                <div className="tag-row">{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.excerpt}</p>
              </div>
              <Link className="post-arrow" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>↗</Link>
            </div>
          </article>
        )) : (
          <p className="empty-posts">No notes published yet. Add a Markdown file to <code>content/posts</code> to start writing.</p>
        )}
      </section>

      <footer className="blog-footer">
        <Link className="wordmark" href="/">MK<span>.</span></Link>
        <span>Markdown-powered notes · 2026</span>
        <a href="mailto:marcosaureliokrunn@gmail.com">Let&apos;s talk ↗</a>
      </footer>
    </main>
  );
}
