import { BlogIndex, blogMetadata } from '../../components/Blog';

export const metadata = blogMetadata('en');

export default function EnglishBlogPage() {
  return <BlogIndex locale="en" />;
}
