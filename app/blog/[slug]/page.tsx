import { redirect } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export default async function PostRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/en/blog/${slug}`);
}
