import type { Metadata } from 'next';
import { Portfolio } from './components/Portfolio';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: { 'pt-BR': '/', en: '/en' },
  },
};

export default function Home() {
  return <Portfolio locale="pt" />;
}
