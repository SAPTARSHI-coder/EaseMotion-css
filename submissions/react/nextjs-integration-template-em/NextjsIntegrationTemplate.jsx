"use client";

import React, { useState } from 'react';
import AnimatedCard from './components/AnimatedCard';
import MotionDialog from './components/MotionDialog';
import TransitionList from './components/TransitionList';
import './style.css';

/**
 * NextjsIntegrationTemplate Component
 * Acts as the main entry point and showcase dashboard for the Next.js integration template.
 * Highlights core integration concepts, SSR compatibility, and interactive animation features.
 */
export default function NextjsIntegrationTemplate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const integrationSteps = [
    {
      title: 'Global Configuration',
      description: 'Import `easemotion.css` in `/app/layout.jsx` to make standard CSS animations globally accessible to both Server and Client Components.',
      icon: '🌐',
      badge: 'Step 1'
    },
    {
      title: 'Token Customization',
      description: 'Override design variables (e.g. `--ease-color-primary` or `--ease-speed-medium`) inside `/app/globals.css` to align the theme with your brand.',
      icon: '💅',
      badge: 'Step 2'
    },
    {
      title: 'Hydration Guards',
      description: 'Use standard React hooks (`useState`, `useEffect`) and portals to prevent Server-Side Rendering (SSR) hydration warnings on dynamic elements like modals.',
      icon: '🛡️',
      badge: 'Step 3'
    },
    {
      title: 'Animation Classes',
      description: 'Apply pure CSS classes (like `ease-hover-lift` or `ease-fade-in`) directly in JSX `className` fields. Fully compatible with static extraction.',
      icon: '⚡',
      badge: 'Step 4'
    }
  ];

  return (
    <div className="template-container">
      {/* Header section */}
      <header className="template-header ease-slide-down">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h1 className="template-title">
              Next.js <span className="highlight-text">EaseMotion</span> Template
            </h1>
            <p className="template-subtitle">
              A comprehensive guide and reference example for integrating EaseMotion CSS smoothly in the Next.js App Router environment.
            </p>
          </div>
          
          {/* Controls */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={toggleTheme}
              className="control-btn ease-hover-lift"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="control-btn primary-btn ease-hover-lift"
            >
              ⚡ Launch Modal
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="template-grid">
        {/* Left Side: Cards detailing integration steps */}
        <section className="grid-left-col">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h2 style={{ fontSize: '20px', fontFamily: 'var(--font-display)', margin: 0 }}>
              Integration Blueprint
            </h2>
            <span style={{ fontSize: '12px', color: 'var(--ease-color-primary)', fontWeight: 600 }}>
              4 CHECKS COMPLETED
            </span>
          </div>

          <div className="cards-grid">
            {integrationSteps.map((step, idx) => (
              <AnimatedCard 
                key={step.title}
                title={step.title}
                description={step.description}
                icon={step.icon}
                badge={step.badge}
                delay={idx}
              />
            ))}
          </div>

          {/* Code Reference Panel */}
          <div className="glass-panel code-reference ease-fade-in" style={{ animationDelay: '600ms', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600 }}>
              Next.js Setup Code Snippet
            </h3>
            <p style={{ margin: 0, color: 'var(--app-text-muted)', fontSize: '13px', lineHeight: 1.5 }}>
              Import the core package styles globally inside your App Router layout file to enable layout-stable, zero-CLS entrance states:
            </p>
            <pre style={{
              margin: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              padding: '16px',
              overflowX: 'auto',
              fontFamily: 'monospace',
              fontSize: '12px',
              border: '1px solid var(--app-surface-border)',
              color: '#a1a1aa'
            }}>
<span style={{ color: '#60a5fa' }}>// app/layout.jsx</span>{`
import React from 'react';
import './globals.css';
`}
<span style={{ color: '#34d399' }}>import 'easemotion-css/easemotion.css';</span>
{`
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
            </pre>
          </div>
        </section>

        {/* Right Side: Interactive widgets */}
        <section className="grid-right-col">
          <TransitionList />

          {/* Quick tips panel */}
          <div className="glass-panel ease-fade-in" style={{ animationDelay: '450ms', padding: '24px', borderLeft: '4px solid var(--ease-color-secondary)' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>💡 SSR Best Practice</h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--app-text-muted)', lineHeight: 1.5 }}>
              Always run heavy animations or entrance state bindings on static classes during SSR. For interactive transitions (like dynamic modal portals or lists), ensure components mount on the client first using client-only checks to guarantee smooth, hydration-safe operation.
            </p>
          </div>
        </section>
      </main>

      {/* Showcase Modal */}
      <MotionDialog 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="EaseMotion CSS Integration Modal"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ margin: 0 }}>
            This modal illustrates a portal-safe, SSR-friendly layout utilizing the <strong>`.ease-modal-overlay`</strong> and <strong>`.ease-modal`</strong> core component patterns.
          </p>
          
          <div style={{
            background: 'rgba(14, 165, 233, 0.05)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '8px',
            padding: '16px',
            fontSize: '13px',
          }}>
            <h5 style={{ margin: '0 0 6px 0', fontWeight: 600, color: 'var(--ease-color-primary)' }}>Why is this hydration safe?</h5>
            <p style={{ margin: 0, color: 'var(--app-text-muted)', lineHeight: 1.4 }}>
              By wrapping modal portals in client-only guards (e.g. tracking `mounted` state via `useEffect`), Next.js renders the overlay strictly after client hydration completes. This guarantees that no server/client tree mismatch occurs.
            </p>
          </div>
          
          <p style={{ margin: 0 }}>
            Clicking the backdrop or pressing the <strong>Escape</strong> key will cleanly close this modal and restore scrollability to the background body element.
          </p>
        </div>
      </MotionDialog>

      <footer className="template-footer ease-fade-in" style={{ animationDelay: '800ms' }}>
        <p>© 2026 EaseMotion CSS Project. Self-Contained Next.js Integration Template.</p>
      </footer>
    </div>
  );
}
