// submissions/nextjs-ssg-demo-22919/nextjs-template/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
// Import EaseMotion directly into the SSG global layout
import '../../../easemotion.css';

export const metadata: Metadata = {
  title: 'EaseMotion Static Site Generation',
  description: 'Proving EaseMotion works perfectly with Next.js output: export',
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
