// submissions/react-number-counter-22932/NumberCounter.jsx
const { useState, useEffect, useRef, useCallback } = React;

/**
 * NumberCounter — Animated count-up component using React + EaseMotion CSS.
 *
 * Animation techniques demonstrated:
 * 1. requestAnimationFrame count-up engine — easing function interpolates
 *    from `start` → `end` over a configurable `duration` with no external deps.
 * 2. IntersectionObserver trigger — counters only start when they scroll
 *    into the viewport, exactly like the real-world hero stats pattern.
 * 3. EaseMotion card entry — each stat card uses `.ease-slide-up` with
 *    staggered `animationDelay` (index × 150ms) for a cascading reveal.
 * 4. `.ease-pulse` on the number span while counting — gives a subtle
 *    heartbeat effect during the count-up that stops when done.
 * 5. Replay button triggers a re-count with `.ease-fade-in` on each card,
 *    demonstrating how to re-trigger animations via state resets.
 */

// ── Easing functions ────────────────────────────────────────────────────────
const easings = {
  easeOut:    t => 1 - Math.pow(1 - t, 3),
  easeIn:     t => t * t * t,
  easeInOut:  t => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2,
  linear:     t => t,
};

// ── useCountUp hook ─────────────────────────────────────────────────────────
const useCountUp = ({ end, start = 0, duration = 2000, easing = 'easeOut', active, decimals = 0 }) => {
  const [value, setValue] = useState(start);
  const [counting, setCounting] = useState(false);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const easeFn = easings[easing] ?? easings.easeOut;

  const runCount = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startTimeRef.current = null;
    setCounting(true);
    setValue(start);

    const tick = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeFn(progress);
      const current = start + (end - start) * easedProgress;
      setValue(parseFloat(current.toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
        setCounting(false);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [end, start, duration, easeFn, decimals]);

  useEffect(() => {
    if (active) runCount();
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, runCount]);

  return { value, counting, replay: runCount };
};

// ── Stat data ───────────────────────────────────────────────────────────────
const STATS = [
  { id: 1, label: 'GitHub Stars',     end: 12847,  suffix: '',   prefix: '',  icon: '⭐', duration: 2200, easing: 'easeOut',   decimals: 0 },
  { id: 2, label: 'NPM Downloads',    end: 98.6,   suffix: 'K',  prefix: '',  icon: '📦', duration: 2000, easing: 'easeInOut', decimals: 1 },
  { id: 3, label: 'Components Built', end: 47,     suffix: '',   prefix: '',  icon: '🧩', duration: 1600, easing: 'easeOut',   decimals: 0 },
  { id: 4, label: 'CSS Bundle',       end: 14.3,   suffix: 'KB', prefix: '',  icon: '🗜️', duration: 1800, easing: 'easeIn',    decimals: 1 },
  { id: 5, label: 'Perf Score',       end: 99,     suffix: '/100', prefix: '', icon: '🚀', duration: 2400, easing: 'easeInOut', decimals: 0 },
  { id: 6, label: 'Contributors',     end: 134,    suffix: '+',  prefix: '',  icon: '👥', duration: 2000, easing: 'easeOut',   decimals: 0 },
];

// ── Individual StatCard ─────────────────────────────────────────────────────
const StatCard = ({ stat, staggerIndex, active }) => {
  const { value, counting } = useCountUp({
    end: stat.end,
    duration: stat.duration,
    easing: stat.easing,
    decimals: stat.decimals,
    active,
  });

  const displayValue = `${stat.prefix}${
    stat.decimals > 0 ? value.toFixed(stat.decimals) : Math.floor(value).toLocaleString()
  }${stat.suffix}`;

  return (
    <div
      className={`ease-card ease-card-glass ease-hover-scale ease-hover-glow ease-slide-up ease-duration-normal`}
      style={{
        padding: '32px 24px',
        textAlign: 'center',
        animationDelay: `${staggerIndex * 150}ms`,
        animationFillMode: 'both',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
      }}
    >
      <span style={{ fontSize: '2.2rem' }}>{stat.icon}</span>

      {/* The number itself — gets ease-pulse while actively counting */}
      <span
        className={counting ? 'ease-pulse' : ''}
        style={{
          fontSize: '2.8rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #a78bfa, #38bdf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          minHeight: '3.2rem',
          display: 'flex',
          alignItems: 'center',
          transition: 'filter 0.2s ease',
          filter: counting ? 'drop-shadow(0 0 8px rgba(167,139,250,0.4))' : 'none',
        }}
      >
        {displayValue}
      </span>

      <p className="ease-text-muted" style={{ margin: 0, fontSize: '0.85rem', fontWeight: 500 }}>
        {stat.label}
      </p>
    </div>
  );
};

// ── EasingVisualizer (bonus) ────────────────────────────────────────────────
const EASING_DEMO = [
  { label: 'easeOut   (default)', fn: easings.easeOut,   color: '#a78bfa' },
  { label: 'easeInOut',           fn: easings.easeInOut,  color: '#38bdf8' },
  { label: 'easeIn',             fn: easings.easeIn,     color: '#34d399' },
  { label: 'linear',             fn: easings.linear,     color: '#fb923c' },
];

const EasingBar = ({ label, fn, color, active }) => {
  const { value } = useCountUp({ end: 100, duration: 2200, easing: 'linear', active, decimals: 0 });
  // The actual visual width uses the easing function applied to the raw linear progress
  const t = value / 100;
  const easedWidth = fn(t) * 100;

  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>{label}</span>
        <span style={{ fontSize: '0.78rem', color, fontFamily: 'monospace' }}>{easedWidth.toFixed(1)}%</span>
      </div>
      <div style={{ height: '6px', background: 'rgba(255,255,255,0.07)', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${easedWidth}%`,
          background: color, borderRadius: '3px',
        }} />
      </div>
    </div>
  );
};

// ── Root App ────────────────────────────────────────────────────────────────
const App = () => {
  const [active, setActive] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const gridRef = useRef(null);

  // Start counters when the grid scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const replay = () => {
    setActive(false);
    setReplayKey(k => k + 1);
    requestAnimationFrame(() => requestAnimationFrame(() => setActive(true)));
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px', minHeight: '100vh' }}>

      {/* Header */}
      <header className="ease-fade-in ease-duration-slow" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">Count-Up Counters</h1>
        <p className="ease-text-muted ease-mt-2">
          IntersectionObserver trigger · rAF easing engine · EaseMotion card stagger
        </p>
        <button
          onClick={replay}
          className="ease-btn ease-btn-primary ease-hover-scale ease-mt-4"
          style={{ marginTop: '16px' }}
        >
          ↺ Replay Counters
        </button>
      </header>

      {/* Stat grid */}
      <div
        ref={gridRef}
        key={replayKey}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}
      >
        {STATS.map((stat, idx) => (
          <StatCard key={stat.id} stat={stat} staggerIndex={idx} active={active} />
        ))}
      </div>

      {/* Easing visualiser */}
      <div className="ease-card ease-card-solid ease-fade-in ease-duration-slow" style={{ background: '#1e293b', padding: '32px', borderRadius: '16px' }}>
        <h2 className="ease-text-xl ease-font-bold ease-mb-4" style={{ color: 'white' }}>Easing Functions</h2>
        <p className="ease-text-muted ease-mb-6" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
          Each bar below runs the same 2.2s rAF loop but with a different easing curve applied to the progress value. Watch how easeIn starts slow, easeOut rushes early, and easeInOut feels most natural.
        </p>
        {EASING_DEMO.map(d => (
          <EasingBar key={d.label} {...d} active={active} />
        ))}
      </div>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
