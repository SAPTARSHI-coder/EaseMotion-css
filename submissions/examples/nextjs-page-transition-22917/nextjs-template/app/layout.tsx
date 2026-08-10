// submissions/nextjs-page-transition-22917/nextjs-template/app/layout.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

// Import the core EaseMotion CSS framework
import '../../../easemotion.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'EaseMotion Next.js Page Transitions',
  description: 'Seamless App Router page transitions natively via CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="ease-bg-surface ease-text-primary ease-font-regular">
        
        {/* Global Navigation that persists across pages without re-rendering */}
        <nav className="ease-padding-4 ease-stack-md" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <Link href="/" className="ease-text-lg ease-hover-glow" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
          <Link href="/about" className="ease-text-lg ease-hover-glow" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
        </nav>

        {/* The children will be wrapped by template.tsx, ensuring animations fire on EVERY route change */}
        {children}
      </body>
    </html>
  );
}
