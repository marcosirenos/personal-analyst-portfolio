import { BlogIndex, blogMetadata } from '../components/Blog';

export const metadata = blogMetadata('pt');

export default function BlogPage() {
  return <BlogIndex locale="pt" />;
}
