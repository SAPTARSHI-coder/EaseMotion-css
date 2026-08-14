import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './variables.css';
import './easemotion.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EaseMotion Next.js Showcase',
  description: 'A beautiful animated timeline demonstrating EaseMotion CSS with Server and Client Components.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark-theme`}>
        {children}
      </body>
    </html>
  );
}
