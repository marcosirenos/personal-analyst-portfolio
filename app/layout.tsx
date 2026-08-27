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
  metadataBase: new URL('https://marcos-krunn.marcos-irenos.chatgpt.site'),
  title: 'Marcos Krunn — Analytics Engineer',
  description: 'Analytics engineer building trusted data systems, sharp dashboards, and useful software.',
  openGraph: {
    title: 'Marcos Krunn — Analytics Engineer',
    description: 'I turn messy data into clear momentum.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Marcos Krunn — Analytics Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcos Krunn — Analytics Engineer',
    description: 'I turn messy data into clear momentum.',
    images: ['/og.jpg'],
  },
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
