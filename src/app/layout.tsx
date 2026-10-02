import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ByteSpace — Get Access to Hundreds of Courses',
  description:
    'Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace\'s wide range of online courses from world-class creators.',
  keywords: 'online courses, learning, education, design, development, ByteSpace',
  openGraph: {
    title: 'ByteSpace — Online Learning Platform',
    description: 'Hundreds of courses across design, development, marketing and more.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
