import type { Metadata } from 'next';
import { Fraunces, Instrument_Sans } from 'next/font/google';
import { Header, Footer } from '@/components';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'CrestLinks | Premium Nigerian Agricultural Commodity Exports',
    template: '%s | CrestLinks',
  },
  description:
    'CrestLinks connects international buyers with premium Nigerian agricultural commodities through a transparent, reliable, and professionally managed export process.',
  keywords: [
    'Nigerian Agricultural Exporter',
    'Agricultural Commodities Export Nigeria',
    'Nigerian Export Company',
    'Agricultural Export Partner',
    'Agricultural Commodity Supplier',
    'Cashew Nuts',
    'Sesame Seeds',
    'Cocoa Beans',
    'Ginger',
    'Hibiscus',
    'Soybeans',
    'Shea Nuts',
  ],
  authors: [{ name: 'CrestLinks' }],
  creator: 'CrestLinks',
  metadataBase: new URL('https://crestlinks.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crestlinks.com',
    siteName: 'CrestLinks',
    title: 'CrestLinks | Premium Nigerian Agricultural Commodity Exports',
    description:
      'CrestLinks connects international buyers with premium Nigerian agricultural commodities through a transparent, reliable, and professionally managed export process.',
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
    <html lang="en" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
