// submissions/nextjs-integration-22913/nextjs-template/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
// Import the core EaseMotion CSS framework directly into the global App Router layout!
// Assuming easemotion.css is available in your node_modules or public folder.
// For this template showcase, we simulate the import:
import '../../../easemotion.css';

export const metadata: Metadata = {
  title: 'EaseMotion Next.js Integration',
  description: 'A showcase of using EaseMotion CSS with Next.js App Router',
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
