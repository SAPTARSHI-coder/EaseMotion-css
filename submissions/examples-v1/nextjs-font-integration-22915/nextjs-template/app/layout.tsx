// submissions/nextjs-font-integration-22915/nextjs-template/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Import the core EaseMotion CSS framework
import '../../../easemotion.css';

// Initialize the Google Font via Next.js highly optimized next/font module
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  // Next.js will automatically inject the required font-family into this variable!
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'EaseMotion + Next.js Fonts',
  description: 'Integrating next/font/google with EaseMotion typography',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 
        We apply the Inter font variable to the body.
        By combining the font's className with EaseMotion's structure classes,
        we achieve perfect typographical harmony without Flash of Unstyled Text (FOUT)!
      */}
      <body className={`${inter.variable} font-sans ease-bg-surface ease-text-primary`}>
        {children}
      </body>
    </html>
  );
}
