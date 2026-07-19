// submissions/react-card-grid-22927/CardGrid.jsx
const { useState, useEffect, useRef } = React;

/**
 * CardGrid — Animated card grid with staggered entry using EaseMotion CSS.
 *
 * Animation techniques demonstrated:
 * 1. IntersectionObserver triggers cards ONLY when they scroll into view.
 * 2. Each card gets a computed `animation-delay` (index × 100 ms) so they
 *    cascade in rather than all appearing at once.
 * 3. Filter controls re-trigger the stagger whenever the visible set changes.
 * 4. `.ease-hover-scale` + `.ease-hover-glow` from EaseMotion give premium
 *    interactive feedback on each card.
 */

// ── Data ───────────────────────────────────────────────────────────────────
const PROJECTS = [
  { id: 1,  title: 'Scroll Reveal',     tag: 'React',   icon: '👁️',  desc: 'IntersectionObserver hook that applies EaseMotion classes when elements enter the viewport.' },
  { id: 2,  title: 'Toast System',      tag: 'React',   icon: '🔔',  desc: 'Auto-dismissing notifications with onAnimationEnd exit choreography.' },
  { id: 3,  title: 'Modal Dialog',      tag: 'React',   icon: '🪟',  desc: 'Backdrop-blur entry + slide-up dialog using synchronized EaseMotion classes.' },
  { id: 4,  title: 'Animated Sidebar',  tag: 'React',   icon: '📂',  desc: 'Collapsible sidebar with staggered link entry when toggled open.' },
  { id: 5,  title: 'Pill Tabs',         tag: 'React',   icon: '💊',  desc: 'Sliding indicator pill + per-panel ease-fade-in/ease-slide-up on activation.' },
  { id: 6,  title: 'App Router',        tag: 'Next.js', icon: '⚡',  desc: 'Template.tsx strategy for CSS-only page transitions in Next.js 14+.' },
  { id: 7,  title: 'SSG Demo',          tag: 'Next.js', icon: '📦',  desc: 'output: export config proving EaseMotion animations run before JS hydration.' },
  { id: 8,  title: 'PurgeCSS Setup',    tag: 'Next.js', icon: '🗜️',  desc: 'postcss.config.js recipe that strips unused ease- classes in production builds.' },
  { id: 9,  title: 'useScrollReveal',   tag: 'Hook',    icon: '🎣',  desc: 'Custom hook wrapping IntersectionObserver for scroll-triggered class injection.' },
  { id: 10, title: 'useHover',          tag: 'Hook',    icon: '🖱️',  desc: 'Boolean state hook that drives EaseMotion hover classes from React logic.' },
  { id: 11, title: 'useAnimation',      tag: 'Hook',    icon: '🎬',  desc: 'Programmatic animation control: play, pause, reset via ref + class toggling.' },
  { id: 12, title: 'AnimateGroup',      tag: 'React',   icon: '👥',  desc: 'Wraps a list of children and applies staggered ease-slide-up with configurable delay.' },
];

const TAG_COLORS = {
  React:  '#6366f1',
  'Next.js': '#06b6d4',
  Hook:   '#10b981',
};

const FILTERS = ['All', 'React', 'Next.js', 'Hook'];

// ── AnimatedCard ──────────────────────────────────────────────────────────
const AnimatedCard = ({ project, staggerIndex, isVisible }) => {
  const delay = staggerIndex * 100;

  return (
    <div
      className={`ease-card ease-card-glass ease-hover-scale ease-hover-glow ${isVisible ? 'ease-slide-up ease-duration-normal' : ''}`}
      style={{
        padding: '24px',
        cursor: 'default',
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationFillMode: 'both',
        opacity: isVisible ? undefined : 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {/* Icon + tag row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '2rem' }}>{project.icon}</span>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          padding: '3px 10px',
          borderRadius: '999px',
          background: `${TAG_COLORS[project.tag]}33`,
          color: TAG_COLORS[project.tag],
          border: `1px solid ${TAG_COLORS[project.tag]}66`,
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          {project.tag}
        </span>
      </div>

      <h3 className="ease-text-lg ease-font-bold" style={{ margin: 0, color: 'white' }}>
        {project.title}
      </h3>
      <p className="ease-text-muted" style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>
        {project.desc}
      </p>
    </div>
  );
};

// ── CardGrid ──────────────────────────────────────────────────────────────
const CardGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visible, setVisible] = useState(false);
  const gridRef = useRef(null);

  // Re-trigger stagger whenever filter changes
  const [triggerKey, setTriggerKey] = useState(0);

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tag === activeFilter);

  // Observe grid entering viewport (only fires once on mount)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const handleFilter = (f) => {
    setActiveFilter(f);
    // Flash-reset so stagger replays on the new subset
    setVisible(false);
    setTriggerKey(k => k + 1);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  };

  return (
    <div className="ease-padding-8" style={{ maxWidth: '1100px', margin: '0 auto', minHeight: '100vh' }}>

      {/* Header */}
      <header className="ease-fade-in ease-duration-slow" style={{ textAlign: 'center', padding: '3rem 0 2rem' }}>
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">EaseMotion Showcase</h1>
        <p className="ease-text-muted ease-mt-2">Staggered card grid — scroll-triggered via IntersectionObserver</p>
      </header>

      {/* Filter pills */}
      <div className="ease-fade-in ease-duration-normal" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => handleFilter(f)}
            className="ease-btn ease-hover-scale"
            style={{
              padding: '8px 20px',
              borderRadius: '999px',
              border: activeFilter === f ? '1px solid #6366f1' : '1px solid rgba(255,255,255,0.15)',
              background: activeFilter === f ? 'rgba(99,102,241,0.25)' : 'transparent',
              color: activeFilter === f ? 'white' : 'rgba(255,255,255,0.6)',
              fontWeight: activeFilter === f ? 700 : 400,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Card grid */}
      <div
        ref={gridRef}
        key={triggerKey}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {filtered.map((project, idx) => (
          <AnimatedCard
            key={project.id}
            project={project}
            staggerIndex={idx}
            isVisible={visible}
          />
        ))}
      </div>

    </div>
  );
};

ReactDOM.render(<CardGrid />, document.getElementById('root'));
