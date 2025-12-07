import type { Metadata } from 'next';
import { Cormorant_Garamond, Open_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://claresmithartwork.com'),
  title: {
    default: 'Clare Smith Artwork | Fine Art & Dreamscapes',
    template: '%s | Clare Smith Artwork',
  },
  description:
    'Welcome to the world of Clare Smith, a Belfast-based artist creating stunning fine art and dreamscape paintings inspired by the landscapes of Northern Ireland.',
  keywords: [
    'Clare Smith',
    'Belfast artist',
    'Northern Ireland art',
    'fine art',
    'dreamscapes',
    'landscape paintings',
    'Irish art',
    'St Georges Market',
  ],
  authors: [{ name: 'Clare Smith' }],
  creator: 'Clare Smith',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://claresmithartwork.com',
    siteName: 'Clare Smith Artwork',
    title: 'Clare Smith Artwork | Fine Art & Dreamscapes',
    description:
      'Discover stunning fine art and dreamscape paintings by Belfast artist Clare Smith.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clare Smith Artwork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clare Smith Artwork | Fine Art & Dreamscapes',
    description:
      'Discover stunning fine art and dreamscape paintings by Belfast artist Clare Smith.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${openSans.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
