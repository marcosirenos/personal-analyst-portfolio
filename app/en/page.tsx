import type { Metadata } from 'next';
import { Portfolio } from '../components/Portfolio';

export const metadata: Metadata = {
  title: 'Marcos Irenos — Analytics Engineer',
  description: 'Analytics engineer working with data, reporting, and internal tools in Curitiba, Brazil.',
  alternates: {
    canonical: '/en',
    languages: { 'pt-BR': '/', en: '/en' },
  },
};

export default function EnglishHome() {
  return <Portfolio locale="en" />;
}
