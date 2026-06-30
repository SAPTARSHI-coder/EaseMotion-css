// submissions/react-hamburger-menu-22928/HamburgerMenu.jsx
const { useState, useEffect } = React;

/**
 * HamburgerMenu — Animated mobile navbar component using EaseMotion CSS.
 *
 * Animation techniques demonstrated:
 * 1. Pure-CSS hamburger → X morphing via CSS transforms on three <span> bars,
 *    orchestrated entirely by a single `isOpen` React state boolean.
 * 2. Mobile drawer slides in with `.ease-slide-up` and fades out with
 *    `.ease-fade-out` — exit is intercepted via `onAnimationEnd` so the
 *    drawer stays in the DOM long enough to play its exit animation.
 * 3. Nav links stagger into view using `index × 80ms` animation-delay on
 *    `.ease-slide-up` — each link cascades in after the drawer is open.
 * 4. Backdrop fades in/out in sync with the drawer using `.ease-fade-in`
 *    and `.ease-fade-out`.
 * 5. `.ease-hover-scale` on each nav link provides crisp tap feedback.
 */

const NAV_LINKS = [
  { label: 'Home',       href: '#', icon: '🏠' },
  { label: 'Animations', href: '#', icon: '✨' },
  { label: 'Components', href: '#', icon: '🧩' },
  { label: 'Docs',       href: '#', icon: '📚' },
  { label: 'GitHub',     href: '#', icon: '🐙' },
];

// ── Three-bar → X hamburger button ───────────────────────────────────────
const HamburgerIcon = ({ isOpen, onClick }) => {
  const barBase = {
    display: 'block',
    width: '24px',
    height: '2px',
    background: 'white',
    borderRadius: '2px',
    transformOrigin: 'center',
    transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease',
  };

  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        padding: '8px',
        zIndex: 110,
        position: 'relative',
      }}
    >
      {/* Bar 1 — rotates to form the "/" of the X */}
      <span style={{
        ...barBase,
        transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
      }} />
      {/* Bar 2 — fades out when menu is open */}
      <span style={{
        ...barBase,
        opacity: isOpen ? 0 : 1,
        transform: isOpen ? 'scaleX(0)' : 'scaleX(1)',
      }} />
      {/* Bar 3 — rotates to form the "\" of the X */}
      <span style={{
        ...barBase,
        transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
      }} />
    </button>
  );
};

// ── Mobile drawer ─────────────────────────────────────────────────────────
const MobileDrawer = ({ isOpen, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mount when open is requested; begin exit when open becomes false
  useEffect(() => {
    if (isOpen) {
      setIsExiting(false);
      setMounted(true);
    } else if (mounted) {
      setIsExiting(true);
    }
  }, [isOpen]);

  if (!mounted) return null;

  const handleAnimEnd = (e) => {
    if (isExiting && e.target === e.currentTarget) {
      setMounted(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={isExiting ? 'ease-fade-out ease-duration-fast' : 'ease-fade-in ease-duration-normal'}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(4px)',
          zIndex: 90,
        }}
      />

      {/* Drawer panel */}
      <nav
        className={isExiting ? 'ease-fade-out ease-duration-fast' : 'ease-slide-up ease-duration-normal'}
        onAnimationEnd={handleAnimEnd}
        style={{
          position: 'fixed',
          bottom: 0, left: 0, right: 0,
          background: '#1e293b',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px 20px 0 0',
          padding: '28px 24px 40px',
          zIndex: 100,
        }}
      >
        {/* Drag handle */}
        <div style={{ width: 40, height: 4, background: 'rgba(255,255,255,0.2)', borderRadius: 2, margin: '0 auto 24px' }} />

        {NAV_LINKS.map((link, idx) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className={`ease-slide-up ease-duration-normal ease-hover-scale`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '14px 16px',
              marginBottom: '6px',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              fontSize: '1.05rem',
              fontWeight: 500,
              background: 'rgba(255,255,255,0.05)',
              animationDelay: `${idx * 80}ms`,
              animationFillMode: 'both',
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>{link.icon}</span>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
};

// ── Navbar ────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        className="ease-fade-in ease-duration-normal"
        style={{
          position: 'sticky', top: 0, zIndex: 80,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 24px',
          background: 'rgba(15,23,42,0.9)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Logo */}
        <span className="ease-text-xl ease-font-bold ease-gradient-text" style={{ letterSpacing: '-0.02em' }}>
          EaseMotion
        </span>

        {/* Desktop links (hidden on small screens for demo purposes) */}
        <div style={{ display: 'flex', gap: '24px' }} className="desktop-links">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="ease-hover-scale"
              style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger (always visible in this demo) */}
        <HamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(o => !o)} />
      </header>

      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

// ── Page content ──────────────────────────────────────────────────────────
const App = () => (
  <div style={{ minHeight: '100vh' }}>
    <Navbar />

    <main style={{ padding: '48px 24px', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
      <div className="ease-card ease-card-glass ease-padding-8 ease-slide-up ease-duration-slow">
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text ease-mb-4">
          Animated Hamburger Navbar
        </h1>
        <p className="ease-text-muted ease-text-lg" style={{ lineHeight: 1.7 }}>
          Tap the hamburger icon in the top-right corner. The three bars morph into an
          <strong> ✕ </strong> via CSS transforms, a bottom-sheet drawer slides up
          with EaseMotion, nav links cascade in with staggered delays, and the exit
          animation plays before the drawer is unmounted from the DOM.
        </p>
        <p className="ease-text-muted ease-mt-4" style={{ lineHeight: 1.7 }}>
          Press <kbd style={{ padding: '2px 8px', background: 'rgba(255,255,255,0.1)', borderRadius: 4 }}>Esc</kbd> or
          tap the backdrop to close the menu.
        </p>
      </div>
    </main>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
