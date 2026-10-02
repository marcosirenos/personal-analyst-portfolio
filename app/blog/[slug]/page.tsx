import { BlogPost, postMetadata, postStaticParams } from '../../components/Blog';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return postStaticParams('pt');
}

export function generateMetadata(props: Props) {
  return postMetadata('pt', props);
}

export default function PostPage({ params }: Props) {
  return <BlogPost locale="pt" params={params} />;
}
