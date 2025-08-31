import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Roboto,
  Uncial_Antiqua,
} from 'next/font/google';
import './globals.css';
import Header from '../components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const uncial = Uncial_Antiqua({
  variable: '--font-medieval',
  subsets: ['latin'],
  weight: '400',
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Game Together',
  description: 'Game Together - Play local multiplayer games',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${uncial.variable} ${roboto.variable} ${montserrat.variable} antialiased`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
