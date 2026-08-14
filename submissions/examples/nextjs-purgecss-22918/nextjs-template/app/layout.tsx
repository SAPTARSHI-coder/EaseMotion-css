// submissions/nextjs-purgecss-22918/nextjs-template/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
// Import the core EaseMotion CSS framework directly into the global layout.
// PurgeCSS will scan the usage in our components and strip away all unused rules from this file during `next build`!
import '../../../easemotion.css';

export const metadata: Metadata = {
  title: 'EaseMotion PurgeCSS Optimization',
  description: 'Minimizing CSS bundle size with Next.js and PurgeCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="ease-bg-surface ease-text-primary ease-font-regular">
        {children}
      </body>
    </html>
  );
}
