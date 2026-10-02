import { BlogPost, postMetadata, postStaticParams } from '../../../components/Blog';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return postStaticParams('en');
}

export function generateMetadata(props: Props) {
  return postMetadata('en', props);
}

export default function EnglishPostPage({ params }: Props) {
  return <BlogPost locale="en" params={params} />;
}
