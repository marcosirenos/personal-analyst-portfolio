import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://irenos.vercel.app'),
  title: 'Marcos Irenos — Analytics Engineer',
  description: 'Analytics engineer building trusted data systems, sharp dashboards, and useful software.',
  openGraph: {
    title: 'Marcos Irenos — Analytics Engineer',
    description: 'I turn messy data into clear momentum.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Marcos Irenos — Analytics Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcos Irenos — Analytics Engineer',
    description: 'I turn messy data into clear momentum.',
    images: ['/og.jpg'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
