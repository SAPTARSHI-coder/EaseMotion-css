// submissions/nextjs-hero-section-22916/nextjs-template/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
// Import the core EaseMotion CSS framework directly into the global App Router layout!
import '../../../easemotion.css';

export const metadata: Metadata = {
  title: 'EaseMotion Animated Hero Showcase',
  description: 'A beautifully animated Next.js Hero section using EaseMotion CSS',
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
