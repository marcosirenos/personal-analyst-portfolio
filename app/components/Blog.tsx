import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostsByLocale, markdownToHtml, type PostLocale } from '@/lib/posts';

const copy = {
  pt: {
    home: '/',
    blog: '/blog',
    lang: 'pt-BR',
    switchLabel: 'Mudar idioma',
    backToPortfolio: 'Voltar ao portfólio',
    allNotes: 'Todos os artigos',
    moreNotes: 'Mais artigos',
    portfolio: 'Portfólio',
    kicker: 'Artigos',
    title: 'Notas sobre dados e software.',
    intro: 'Coisas que aprendi construindo dashboards, pipelines de dados e ferramentas internas.',
    listLabel: 'Artigos do blog',
    read: 'Ler',
    footer: 'Artigos · 2026',
    metaTitle: 'Artigos — Marcos Irenos',
    metaDescription: 'Notas sobre engenharia de analytics, produtos de dados e software útil, por Marcos Irenos.',
  },
  en: {
    home: '/en',
    blog: '/en/blog',
    lang: 'en',
    switchLabel: 'Change language',
    backToPortfolio: 'Back to portfolio',
    allNotes: 'All notes',
    moreNotes: 'More notes',
    portfolio: 'Portfolio',
    kicker: 'Writing',
    title: 'Notes on data and software.',
    intro: 'Things I have learned while building dashboards, data pipelines, and internal tools.',
    listLabel: 'Blog posts',
    read: 'Read',
    footer: 'Writing · 2026',
    metaTitle: 'Writing — Marcos Irenos',
    metaDescription: 'Notes on analytics engineering, data products, and useful software by Marcos Irenos.',
  },
} as const;

type SlugProps = { params: Promise<{ slug: string }> };

function LanguageSwitch({ locale, ptHref, enHref }: { locale: PostLocale; ptHref: string; enHref: string }) {
  return (
    <div className="language-switch" aria-label={copy[locale].switchLabel}>
      {locale === 'pt' ? <span className="is-active">PT</span> : <Link href={ptHref} hrefLang="pt-BR">PT</Link>}
      <span>/</span>
      {locale === 'en' ? <span className="is-active">EN</span> : <Link href={enHref} hrefLang="en">EN</Link>}
    </div>
  );
}

export function blogMetadata(locale: PostLocale): Metadata {
  return {
    title: copy[locale].metaTitle,
    description: copy[locale].metaDescription,
    alternates: { canonical: copy[locale].blog, languages: { 'pt-BR': '/blog', en: '/en/blog' } },
  };
}

export function BlogIndex({ locale }: { locale: PostLocale }) {
  const t = copy[locale];
  const posts = getPostsByLocale(locale);

  return (
    <main className="blog-shell" lang={t.lang}>
      <header className="blog-nav">
        <Link className="wordmark" href={t.home}>Marcos Irenos</Link>
        <div className="blog-nav-actions">
          <LanguageSwitch locale={locale} ptHref="/blog" enHref="/en/blog" />
          <Link className="back-link" href={t.home}>{t.backToPortfolio}</Link>
        </div>
      </header>
      <section className="blog-hero">
        <p className="section-kicker"><span>01</span> {t.kicker}</p>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </section>
      <section className="post-list" aria-label={t.listLabel}>
        {posts.map(post => (
          <article className="post-card" key={post.slug}>
            <div className="post-card-meta"><span>{post.date}</span><span>{post.readingTime}</span></div>
            <div className="post-card-body"><div><div className="tag-row">{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h2><Link href={`${t.blog}/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p></div><Link className="post-arrow" href={`${t.blog}/${post.slug}`} aria-label={`${t.read} ${post.title}`}>↗</Link></div>
          </article>
        ))}
      </section>
      <footer className="blog-footer"><Link className="wordmark" href={t.home}>Marcos Irenos</Link><span>{t.footer}</span><a href="mailto:marcosaureliokrunn@gmail.com">Email</a></footer>
    </main>
  );
}

export function postStaticParams(locale: PostLocale) {
  return getPostsByLocale(locale).map(post => ({ slug: post.slug }));
}

export async function postMetadata(locale: PostLocale, { params }: SlugProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(locale, slug);
  if (!post) return {};
  const languages: Record<string, string> = {};
  if (getPostBySlug('pt', slug)) languages['pt-BR'] = `/blog/${slug}`;
  if (getPostBySlug('en', slug)) languages.en = `/en/blog/${slug}`;
  return {
    title: `${post.title} — Marcos Irenos`,
    description: post.excerpt,
    alternates: { canonical: `${copy[locale].blog}/${slug}`, languages },
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date, tags: post.tags },
  };
}

export async function BlogPost({ locale, params }: { locale: PostLocale } & SlugProps) {
  const t = copy[locale];
  const { slug } = await params;
  const post = getPostBySlug(locale, slug);
  if (!post) notFound();
  const html = await markdownToHtml(post.content);
  // Link the language switch to the translated post when one exists, otherwise to that locale's index.
  const ptHref = getPostBySlug('pt', slug) ? `/blog/${slug}` : '/blog';
  const enHref = getPostBySlug('en', slug) ? `/en/blog/${slug}` : '/en/blog';

  return (
    <main className="article-shell" lang={t.lang}>
      <header className="blog-nav"><Link className="wordmark" href={t.home}>Marcos Irenos</Link><div className="blog-nav-actions"><LanguageSwitch locale={locale} ptHref={ptHref} enHref={enHref} /><Link className="back-link" href={t.blog}>{t.allNotes}</Link></div></header>
      <article className="article-page"><div className="article-meta"><span>{post.date}</span><span>{post.readingTime}</span><div className="tag-row">{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><h1>{post.title}</h1><p className="article-excerpt">{post.excerpt}</p><div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} /></article>
      <footer className="blog-footer"><Link href={t.blog}>{t.moreNotes}</Link><span>Marcos Irenos · 2026</span><Link href={t.home}>{t.portfolio}</Link></footer>
    </main>
  );
}
