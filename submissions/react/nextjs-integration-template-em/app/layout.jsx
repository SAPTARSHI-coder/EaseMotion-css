import React from 'react';
import './globals.css';

// Importing EaseMotion CSS globally from the repository root.
// In a standard production app, you would install the package and import it as:
// import 'easemotion-css/easemotion.css';
import '../../../../easemotion.css';

export const metadata = {
  title: 'EaseMotion CSS — Next.js Integration Template',
  description: 'A complete reference template demonstrating how to use EaseMotion CSS transition and animation utility classes seamlessly with Next.js App Router and Server-Side Rendering (SSR).',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>" />
      </head>
      <body>
        <div className="radial-glow" style={{ top: '-100px', left: '-100px' }}></div>
        <div className="radial-glow-secondary" style={{ bottom: '-150px', right: '-150px' }}></div>
        {children}
      </body>
    </html>
  );
}
