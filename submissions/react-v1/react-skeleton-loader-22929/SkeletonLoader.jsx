// submissions/react-skeleton-loader-22929/SkeletonLoader.jsx
const { useState, useEffect } = React;

/**
 * SkeletonLoader — Animated skeleton screen component using EaseMotion CSS.
 *
 * Animation techniques demonstrated:
 * 1. Skeleton "shimmer" pulse — `.ease-pulse` EaseMotion class applied to
 *    placeholder blocks, creating the universal loading shimmer effect.
 * 2. State-driven swap — after a simulated async delay, `isLoaded` flips
 *    to true. Skeleton blocks disappear and real content enters with
 *    `.ease-fade-in .ease-slide-up` staggered at the card level.
 * 3. Staggered card reveal — each content card carries `animation-delay:
 *    index × 120ms` so they cascade in after the data "arrives".
 * 4. Spinner loader — a pure CSS rotating ring using EaseMotion's
 *    `.ease-spin` class shown during the initial page load.
 * 5. `.ease-hover-scale` + `.ease-hover-glow` for interactive polish
 *    on the loaded cards.
 */

// ── Primitive skeleton blocks ─────────────────────────────────────────────
const SkeletonBlock = ({ width = '100%', height = '16px', borderRadius = '6px', style = {} }) => (
  <div
    className="ease-pulse"
    style={{
      width,
      height,
      borderRadius,
      background: 'rgba(255,255,255,0.08)',
      ...style,
    }}
  />
);

// ── Card skeleton layout ───────────────────────────────────────────────────
const CardSkeleton = () => (
  <div
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '16px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
    }}
  >
    {/* Avatar + name row */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <SkeletonBlock width="48px" height="48px" borderRadius="50%" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <SkeletonBlock width="55%" height="14px" />
        <SkeletonBlock width="35%" height="12px" />
      </div>
    </div>
    {/* Body text lines */}
    <SkeletonBlock height="13px" />
    <SkeletonBlock height="13px" width="90%" />
    <SkeletonBlock height="13px" width="75%" />
    {/* Tag chip row */}
    <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
      <SkeletonBlock width="64px" height="24px" borderRadius="999px" />
      <SkeletonBlock width="52px" height="24px" borderRadius="999px" />
    </div>
  </div>
);

// ── Real content cards ─────────────────────────────────────────────────────
const CARDS = [
  { id: 1, name: 'Alex Rivera',   role: 'Frontend Engineer', avatar: '🧑‍💻', tag: 'React',    body: 'Built the animated card grid with staggered IntersectionObserver triggers and filter replay.' },
  { id: 2, name: 'Sam Chen',      role: 'Design Systems',    avatar: '🎨', tag: 'CSS',      body: 'Authored the EaseMotion utility classes including ease-pulse, ease-spin, and ease-slide-up.' },
  { id: 3, name: 'Jordan Park',   role: 'DevOps',             avatar: '⚙️', tag: 'Next.js',  body: 'Configured PurgeCSS integration and Next.js SSG output modes to strip unused classes in prod.' },
  { id: 4, name: 'Casey Morgan',  role: 'Mobile UX',          avatar: '📱', tag: 'React',    body: 'Designed the hamburger menu with CSS bar-morphing animation and bottom-sheet drawer pattern.' },
  { id: 5, name: 'Taylor Kim',    role: 'Accessibility',      avatar: '♿', tag: 'A11y',     body: 'Audited all interactive components for ARIA roles, keyboard navigation, and reduced-motion support.' },
  { id: 6, name: 'Drew Sullivan', role: 'Performance',        avatar: '🚀', tag: 'Perf',     body: 'Verified hardware-acceleration paths for transform and opacity animations across all browsers.' },
];

const TAG_COLORS = { React: '#6366f1', CSS: '#06b6d4', 'Next.js': '#10b981', A11y: '#f59e0b', Perf: '#ef4444' };

const ContentCard = ({ card, index }) => (
  <div
    className="ease-card ease-card-glass ease-hover-scale ease-hover-glow ease-fade-in ease-slide-up ease-duration-normal"
    style={{
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      animationDelay: `${index * 120}ms`,
      animationFillMode: 'both',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '2.4rem', lineHeight: 1 }}>{card.avatar}</span>
      <div>
        <p style={{ margin: 0, fontWeight: 700, color: 'white' }}>{card.name}</p>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{card.role}</p>
      </div>
    </div>
    <p className="ease-text-muted" style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.65 }}>{card.body}</p>
    <span style={{
      alignSelf: 'flex-start',
      fontSize: '0.7rem', fontWeight: 700,
      padding: '3px 10px', borderRadius: '999px',
      background: `${TAG_COLORS[card.tag] ?? '#6366f1'}33`,
      color: TAG_COLORS[card.tag] ?? '#6366f1',
      border: `1px solid ${TAG_COLORS[card.tag] ?? '#6366f1'}66`,
      letterSpacing: '0.05em', textTransform: 'uppercase'
    }}>
      {card.tag}
    </span>
  </div>
);

// ── Spinner ────────────────────────────────────────────────────────────────
const Spinner = () => (
  <div style={{ textAlign: 'center', padding: '20px 0' }}>
    <div
      className="ease-spin"
      style={{
        display: 'inline-block',
        width: '36px', height: '36px',
        border: '3px solid rgba(255,255,255,0.1)',
        borderTopColor: '#6366f1',
        borderRadius: '50%',
      }}
    />
    <p className="ease-text-muted ease-mt-4" style={{ fontSize: '0.9rem' }}>Fetching team data…</p>
  </div>
);

// ── Root App ──────────────────────────────────────────────────────────────
const LOAD_DELAY_MS = 2800; // simulate async data fetch

const App = () => {
  const [phase, setPhase] = useState('spinner'); // 'spinner' | 'skeleton' | 'loaded'

  useEffect(() => {
    // Phase 1 → 2: spinner → skeleton after 800 ms
    const t1 = setTimeout(() => setPhase('skeleton'), 800);
    // Phase 2 → 3: skeleton → content after full delay
    const t2 = setTimeout(() => setPhase('loaded'), LOAD_DELAY_MS);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const reload = () => {
    setPhase('spinner');
    setTimeout(() => setPhase('skeleton'), 800);
    setTimeout(() => setPhase('loaded'), LOAD_DELAY_MS);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px', minHeight: '100vh' }}>

      {/* Header */}
      <header className="ease-fade-in ease-duration-slow" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">Skeleton Loader</h1>
        <p className="ease-text-muted ease-mt-2">
          {phase === 'loaded'
            ? 'Data loaded! Cards entered with staggered EaseMotion animations.'
            : 'Simulating async data fetch…'}
        </p>
        {phase === 'loaded' && (
          <button
            onClick={reload}
            className="ease-btn ease-btn-primary ease-hover-scale ease-mt-4"
            style={{ marginTop: '16px' }}
          >
            ↺ Replay Loading Sequence
          </button>
        )}
      </header>

      {/* Spinner phase */}
      {phase === 'spinner' && <Spinner />}

      {/* Grid — shows skeleton or real cards depending on phase */}
      {phase !== 'spinner' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {phase === 'skeleton'
            ? CARDS.map(c => <CardSkeleton key={c.id} />)
            : CARDS.map((c, i) => <ContentCard key={c.id} card={c} index={i} />)
          }
        </div>
      )}

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
