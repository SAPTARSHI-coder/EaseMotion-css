// submissions/react-animated-tabs-22926/Tabs.jsx
const { useState, useRef, useEffect } = React;

/**
 * PillTabs — animated tabs/pill switcher component using EaseMotion CSS.
 *
 * Key animation techniques demonstrated:
 * 1. Sliding indicator pill: a `position:absolute` div that tracks the
 *    active tab button via `getBoundingClientRect` + CSS `left` / `width` transition.
 * 2. Content swap: outgoing panel gets `ease-fade-out`, incoming gets `ease-fade-in`
 *    applied via React state so EaseMotion drives the entire transition.
 */

const TABS = [
  {
    id: 'overview',
    label: '🏠 Overview',
    content: {
      heading: 'Welcome to EaseMotion',
      body: 'EaseMotion is a utility-first CSS animation framework. Drop a class like `.ease-slide-up` onto any element and get hardware-accelerated animations with zero JavaScript runtime overhead.'
    }
  },
  {
    id: 'react',
    label: '⚛️ React',
    content: {
      heading: 'React Integration',
      body: 'Use EaseMotion classes inside JSX just like any other className. Combine them with `useState` to conditionally apply entry/exit classes based on your app state — no extra libraries needed!'
    }
  },
  {
    id: 'nextjs',
    label: '⚡ Next.js',
    content: {
      heading: 'Next.js App Router',
      body: 'All pure CSS utility classes are 100 % compatible with React Server Components. Drop `import "easemotion.css"` in your root `layout.tsx` and every page inherits the full animation toolkit instantly.'
    }
  },
  {
    id: 'ssg',
    label: '📦 SSG',
    content: {
      heading: 'Static Site Generation',
      body: 'Because animations live in CSS, they execute before JS hydration completes. Users see smooth entrance animations the moment the browser paints HTML — perfect for Jamstack and CDN-hosted sites.'
    }
  }
];

/* ─── Sliding pill indicator ─────────────────────────────────────────────── */
const SlidingIndicator = ({ containerRef, activeIndex }) => {
  const [style, setStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const btn = container.children[activeIndex];
    if (!btn) return;
    setStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [activeIndex, containerRef]);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        height: '100%',
        background: 'rgba(99, 102, 241, 0.25)',
        border: '1px solid rgba(99, 102, 241, 0.6)',
        borderRadius: '999px',
        left: style.left,
        width: style.width,
        transition: 'left 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

/* ─── Tab panel with EaseMotion entry animation ──────────────────────────── */
const TabPanel = ({ tab, isActive }) => {
  const [animClass, setAnimClass] = useState('');

  useEffect(() => {
    if (isActive) {
      // Trigger fresh entry animation every time this panel becomes active
      setAnimClass('');
      // Small rAF delay so the class reset actually fires a new animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimClass('ease-fade-in ease-slide-up ease-duration-normal'));
      });
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className={`ease-card ease-card-glass ease-padding-8 ease-mt-6 ${animClass}`}>
      <h2 className="ease-text-2xl ease-font-bold ease-mb-4" style={{ color: 'white' }}>
        {tab.content.heading}
      </h2>
      <p className="ease-text-muted ease-text-lg" style={{ lineHeight: 1.7 }}>
        {tab.content.body}
      </p>
    </div>
  );
};

/* ─── Root App ───────────────────────────────────────────────────────────── */
const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabBarRef = useRef(null);

  return (
    <div
      className="ease-padding-8"
      style={{ maxWidth: '760px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <header className="ease-fade-in ease-duration-slow" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">Animated Pill Tabs</h1>
        <p className="ease-text-muted ease-mt-2">Sliding indicator + EaseMotion panel transitions</p>
      </header>

      {/* ── Tab bar ── */}
      <div
        ref={tabBarRef}
        role="tablist"
        style={{
          position: 'relative',
          display: 'flex',
          gap: '4px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '999px',
          padding: '4px'
        }}
      >
        {/* Sliding indicator lives behind all buttons */}
        <SlidingIndicator containerRef={tabBarRef} activeIndex={activeIndex} />

        {TABS.map((tab, idx) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={idx === activeIndex}
            onClick={() => setActiveIndex(idx)}
            className="ease-btn ease-hover-scale"
            style={{
              flex: 1,
              padding: '10px 16px',
              background: 'transparent',
              border: 'none',
              borderRadius: '999px',
              color: idx === activeIndex ? 'white' : 'rgba(255,255,255,0.5)',
              fontWeight: idx === activeIndex ? 700 : 400,
              cursor: 'pointer',
              transition: 'color 0.25s',
              position: 'relative',
              zIndex: 1,
              whiteSpace: 'nowrap'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Tab panels ── */}
      {TABS.map((tab, idx) => (
        <TabPanel key={tab.id} tab={tab} isActive={idx === activeIndex} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
