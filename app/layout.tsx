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
  title: 'Marcos Irenos — Analytics Engineer',
  description: 'Analytics engineer working with data, reporting, and internal tools in Curitiba, Brazil.',
  openGraph: {
    title: 'Marcos Irenos — Analytics Engineer',
    description: 'Analytics engineer working with data, reporting, and internal tools.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Marcos Irenos — Analytics Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcos Irenos — Analytics Engineer',
    description: 'Analytics engineer working with data, reporting, and internal tools.',
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
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
