import React, { useState } from 'react';
import Animate from './components/Animate.jsx';
import Modal from './components/Modal.jsx';
import AnimationPlayground from './components/AnimationPlayground.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app" data-testid="app-root">
      {/* ── Header ──────────────────────────────────────────────── */}
      <header style={headerStyle} data-testid="app-header">
        <Animate type="slide-down">
          <h1 style={titleStyle}>
            ⚡ EaseMotion CSS
            <span style={badgeStyle}>React Showcase</span>
          </h1>
          <p style={subtitleStyle}>
            Interactive demo of EaseMotion CSS animation utilities in a React + Vite application.
          </p>
        </Animate>
      </header>

      {/* ── Main content ────────────────────────────────────────── */}
      <main style={mainStyle}>

        {/* Animation Playground section */}
        <AnimationPlayground />

        {/* Animate component demo section */}
        <section style={sectionStyle} data-testid="animate-section">
          <Animate type="fade-in">
            <h2 style={sectionTitleStyle}>Animate Component</h2>
          </Animate>
          <p style={sectionDescStyle}>
            Wrap any content with the <code style={codeStyle}>&lt;Animate&gt;</code> component to apply
            EaseMotion animation classes declaratively via props.
          </p>

          <div style={demoGridStyle}>
            <Animate type="slide-up" delay="0ms">
              <DemoCard label=".ease-slide-up" delay="0ms" />
            </Animate>
            <Animate type="slide-up" delay="100ms">
              <DemoCard label=".ease-slide-up" delay="100ms" />
            </Animate>
            <Animate type="slide-up" delay="200ms">
              <DemoCard label=".ease-slide-up" delay="200ms" />
            </Animate>
            <Animate type="zoom-in" delay="300ms">
              <DemoCard label=".ease-zoom-in" delay="300ms" />
            </Animate>
          </div>

          <div style={{ marginTop: 24 }}>
            <h3 style={{ ...sectionTitleStyle, fontSize: '1rem' }}>Hover animations</h3>
            <div style={demoGridStyle}>
              <Animate type="bounce" hover>
                <DemoCard label=".ease-hover-bounce" interactive />
              </Animate>
              <Animate type="shake" hover>
                <DemoCard label=".ease-hover-shake" interactive />
              </Animate>
            </div>
          </div>
        </section>

        {/* Modal demo section */}
        <section style={sectionStyle} data-testid="modal-section">
          <Animate type="fade-in">
            <h2 style={sectionTitleStyle}>Modal Component</h2>
          </Animate>
          <p style={sectionDescStyle}>
            A fully accessible modal dialog with keyboard support (Esc to close), backdrop dismiss, and smooth EaseMotion entrance animation.
          </p>

          <button
            style={openModalBtnStyle}
            onClick={() => setIsModalOpen(true)}
            data-testid="open-modal-btn"
          >
            Open Modal
          </button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="EaseMotion Animation Details"
          >
            <p>
              This modal uses the <strong style={{ color: '#6c63ff' }}>ease-slide-up</strong> keyframe
              animation from EaseMotion CSS to enter the screen smoothly.
            </p>
            <br />
            <p>
              Close it by clicking the <strong>✕</strong> button, pressing{' '}
              <kbd style={kbdStyle}>Esc</kbd>, clicking the backdrop, or pressing{' '}
              <strong>"Got it"</strong> below.
            </p>
          </Modal>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer style={footerStyle} data-testid="app-footer">
        <p>
          Built with{' '}
          <a href="https://github.com/SAPTARSHI-coder/EaseMotion-css" style={linkStyle} target="_blank" rel="noreferrer">
            EaseMotion CSS
          </a>{' '}
          · React {/* version pulled from package at runtime */}
        </p>
      </footer>
    </div>
  );
}

/* ── Internal sub-components ─────────────────────────────────────────── */

function DemoCard({ label, delay, interactive }) {
  return (
    <div style={{ ...cardStyle, cursor: interactive ? 'pointer' : 'default' }}>
      <span style={cardLabelStyle}>{label}</span>
      {delay && <span style={cardDelayStyle}>delay: {delay}</span>}
      {interactive && <span style={cardDelayStyle}>hover me</span>}
    </div>
  );
}

/* ── Inline styles (avoids external CSS dependency for this demo) ─────── */
const headerStyle = {
  background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
  borderBottom: '1px solid rgba(108, 99, 255, 0.2)',
  padding: '48px 24px 40px',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: 'clamp(1.8rem, 5vw, 3rem)',
  fontWeight: 700,
  color: '#e2e8f0',
  marginBottom: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  flexWrap: 'wrap',
};

const badgeStyle = {
  fontSize: '0.6em',
  fontWeight: 500,
  background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
  color: '#fff',
  padding: '4px 14px',
  borderRadius: 999,
};

const subtitleStyle = {
  color: '#94a3b8',
  fontSize: '1rem',
  maxWidth: 560,
  margin: '0 auto',
};

const mainStyle = {
  maxWidth: 960,
  margin: '0 auto',
  padding: '40px 24px 64px',
};

const sectionStyle = {
  marginBottom: 48,
};

const sectionTitleStyle = {
  fontSize: '1.4rem',
  fontWeight: 600,
  color: '#e2e8f0',
  marginBottom: 8,
};

const sectionDescStyle = {
  color: '#94a3b8',
  fontSize: '0.9rem',
  marginBottom: 24,
};

const codeStyle = {
  background: 'rgba(108, 99, 255, 0.15)',
  color: '#a78bfa',
  padding: '2px 6px',
  borderRadius: 4,
  fontFamily: 'monospace',
  fontSize: '0.85em',
};

const demoGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
  gap: 16,
};

const cardStyle = {
  background: '#1a1a2e',
  border: '1px solid rgba(108, 99, 255, 0.25)',
  borderRadius: 12,
  padding: '20px 16px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
};

const cardLabelStyle = {
  color: '#a78bfa',
  fontSize: '0.78rem',
  fontFamily: 'monospace',
  fontWeight: 600,
};

const cardDelayStyle = {
  color: '#64748b',
  fontSize: '0.72rem',
};

const openModalBtnStyle = {
  background: '#6c63ff',
  color: '#fff',
  border: 'none',
  padding: '12px 28px',
  borderRadius: 10,
  fontSize: '0.95rem',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background 200ms ease',
  fontFamily: 'inherit',
};

const kbdStyle = {
  background: 'rgba(108, 99, 255, 0.2)',
  border: '1px solid rgba(108, 99, 255, 0.4)',
  borderRadius: 4,
  padding: '1px 6px',
  fontSize: '0.85em',
  fontFamily: 'monospace',
};

const footerStyle = {
  textAlign: 'center',
  padding: '24px',
  color: '#475569',
  fontSize: '0.85rem',
  borderTop: '1px solid rgba(108, 99, 255, 0.1)',
};

const linkStyle = { color: '#6c63ff', textDecoration: 'none' };

export default App;
