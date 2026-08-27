import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
  content: string;
};

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback;
}

function asTags(value: unknown) {
  return Array.isArray(value) ? value.filter((tag): tag is string => typeof tag === 'string') : [];
}

function postFromFile(filename: string): Post {
  const source = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
  const parsed = matter(source);

  return {
    slug: filename.replace(/\.(md|mdx)$/, ''),
    title: asString(parsed.data.title, 'Untitled post'),
    date: asString(parsed.data.date, '2026-01-01'),
    tags: asTags(parsed.data.tags),
    excerpt: asString(parsed.data.excerpt),
    readingTime: asString(parsed.data.readingTime),
    content: parsed.content.trim(),
  };
}

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter(filename => /\.(md|mdx)$/.test(filename))
    .map(postFromFile)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find(post => post.slug === slug);
}

export async function markdownToHtml(markdown: string) {
  return marked.parse(markdown, { gfm: true, breaks: false });
}
