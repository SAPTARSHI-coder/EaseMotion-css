// submissions/react-testimonial-carousel-22933/TestimonialCarousel.jsx
const { useState, useEffect, useRef, useCallback } = React;

/**
 * TestimonialCarousel — Animated testimonial carousel using EaseMotion CSS.
 *
 * Animation techniques demonstrated:
 * 1. Direction-aware slide transitions — moving forward applies `.ease-slide-up`
 *    on the incoming card; moving backward applies `.ease-fade-in` (mimicking a
 *    slide-from-left feel). A `panelKey` increment forces a fresh React mount so
 *    the EaseMotion keyframe always fires on navigation.
 * 2. Auto-advance with pause-on-hover — `setInterval` advances every 5s.
 *    Mouse enter/leave on the card pauses and resumes via a ref flag.
 * 3. Progress dot indicators — each dot is a pill that expands/shrinks via
 *    CSS `width` transition, with the active dot filling in the accent colour.
 * 4. Auto-progress bar — a thin bar beneath the card grows from 0% → 100%
 *    over the 5s interval, resetting on every navigation.
 * 5. Quote text fade — the quote body gets `.ease-fade-in .ease-duration-slow`
 *    independently so it can linger a beat after the card enters.
 * 6. Star rating stagger — star icons enter with `.ease-slide-up` at
 *    `index × 60ms` for a micro-cascade effect.
 */

// ── Testimonial data ────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ava Thompson',
    role: 'Senior Frontend Engineer @ Vercel',
    avatar: '👩‍💻',
    rating: 5,
    quote: '"EaseMotion completely replaced our Framer Motion dependency. We dropped 34KB from the bundle and our Lighthouse animation score jumped from 72 to 98. The `.ease-slide-up` class alone handles 90% of what we needed."',
    tag: 'Performance',
    tagColor: '#10b981',
  },
  {
    id: 2,
    name: 'Marcus Lee',
    role: 'Design Systems Lead @ Stripe',
    avatar: '👨‍🎨',
    rating: 5,
    quote: '"What sold us was the SSR story. Every utility class works in Next.js Server Components without a single `"use client"` directive. The design system team adopted it in one sprint."',
    tag: 'DX',
    tagColor: '#6366f1',
  },
  {
    id: 3,
    name: 'Priya Nair',
    role: 'Staff Engineer @ Shopify',
    avatar: '👩‍🔬',
    rating: 5,
    quote: '"The stagger pattern in AnimateGroup alone saved us three days of custom animation logic. Now our product lists, dashboards, and onboarding flows are all consistently animated in a morning."',
    tag: 'Productivity',
    tagColor: '#f59e0b',
  },
  {
    id: 4,
    name: 'Jordan Kim',
    role: 'Accessibility Engineer @ GitHub',
    avatar: '🧑‍🦯',
    rating: 5,
    quote: '"I audited EaseMotion for WCAG 2.1 AA compliance. The `useReducedMotion` hook correctly gates every animation behind the `prefers-reduced-motion` media query. It is the only animation framework I have seen do this out of the box."',
    tag: 'Accessibility',
    tagColor: '#38bdf8',
  },
  {
    id: 5,
    name: 'Sam Rivera',
    role: 'CTO @ Linear',
    avatar: '🧑‍💼',
    rating: 5,
    quote: '"We went from prototype to production-ready animated UI in two days. The skeleton loader, modal, and toast components covered every pattern our product needed. Highly recommend for any fast-moving team."',
    tag: 'Speed',
    tagColor: '#ef4444',
  },
];

const INTERVAL_MS = 5000;

// ── Star rating ─────────────────────────────────────────────────────────────
const StarRating = ({ rating }) => (
  <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', marginBottom: '20px' }}>
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className="ease-slide-up ease-duration-fast"
        style={{ fontSize: '1.1rem', animationDelay: `${i * 60}ms`, animationFillMode: 'both' }}
      >
        {i < rating ? '⭐' : '☆'}
      </span>
    ))}
  </div>
);

// ── Progress bar ─────────────────────────────────────────────────────────────
const ProgressBar = ({ paused, key: progressKey }) => {
  return (
    <div style={{ height: '3px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden', marginTop: '20px' }}>
      <div
        key={progressKey}
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
          borderRadius: '2px',
          animation: paused ? 'none' : `progressFill ${INTERVAL_MS}ms linear forwards`,
        }}
      />
    </div>
  );
};

// ── Dot indicators ───────────────────────────────────────────────────────────
const DotNav = ({ total, current, onGo }) => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '24px' }}>
    {Array.from({ length: total }, (_, i) => (
      <button
        key={i}
        onClick={() => onGo(i)}
        aria-label={`Go to testimonial ${i + 1}`}
        style={{
          border: 'none', cursor: 'pointer', padding: 0,
          height: '6px',
          width: i === current ? '24px' : '6px',
          borderRadius: '3px',
          background: i === current
            ? 'linear-gradient(90deg, #6366f1, #06b6d4)'
            : 'rgba(255,255,255,0.2)',
          transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.3s ease',
        }}
      />
    ))}
  </div>
);

// ── Testimonial card ─────────────────────────────────────────────────────────
const TestimonialCard = ({ item, direction }) => {
  const entryClass = direction === 'forward'
    ? 'ease-slide-up ease-duration-normal'
    : 'ease-fade-in ease-duration-normal';

  return (
    <div
      className={`ease-card ease-card-glass ${entryClass}`}
      style={{ padding: '40px', textAlign: 'center', position: 'relative' }}
    >
      {/* Tag */}
      <span style={{
        position: 'absolute', top: '20px', right: '20px',
        fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px',
        background: `${item.tagColor}22`, color: item.tagColor,
        border: `1px solid ${item.tagColor}55`, letterSpacing: '0.05em', textTransform: 'uppercase',
      }}>
        {item.tag}
      </span>

      {/* Avatar */}
      <div style={{ fontSize: '3.5rem', marginBottom: '12px', lineHeight: 1 }}>{item.avatar}</div>

      {/* Star rating (staggered) */}
      <StarRating rating={item.rating} />

      {/* Quote */}
      <blockquote
        className="ease-fade-in ease-duration-slow"
        style={{
          margin: '0 0 24px', fontSize: '1rem', lineHeight: 1.75,
          color: 'rgba(255,255,255,0.85)', fontStyle: 'italic',
          animationDelay: '200ms', animationFillMode: 'both'
        }}
      >
        {item.quote}
      </blockquote>

      {/* Author */}
      <div>
        <p style={{ margin: 0, fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>{item.name}</p>
        <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{item.role}</p>
      </div>
    </div>
  );
};

// ── Root carousel ────────────────────────────────────────────────────────────
const Carousel = () => {
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState('forward');
  const [panelKey, setPanelKey]   = useState(0);
  const [paused, setPaused]       = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const pausedRef = useRef(false);
  const total = TESTIMONIALS.length;

  const goTo = useCallback((idx, dir = 'forward') => {
    setDirection(dir);
    setPanelKey(k => k + 1);
    setProgressKey(k => k + 1);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    if (pausedRef.current) return;
    goTo((current + 1) % total, 'forward');
  }, [current, total, goTo]);

  const prev = () => goTo((current - 1 + total) % total, 'backward');

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [next]);

  const handleMouseEnter = () => { pausedRef.current = true;  setPaused(true);  };
  const handleMouseLeave = () => { pausedRef.current = false; setPaused(false); };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: 'relative' }}>
        <div key={panelKey}>
          <TestimonialCard item={TESTIMONIALS[current]} direction={direction} />
        </div>

        {/* Prev / Next arrows */}
        {[['←', prev, 'left'], ['→', () => goTo((current + 1) % total, 'forward'), 'right']].map(([label, fn, side]) => (
          <button
            key={side}
            onClick={fn}
            className="ease-btn ease-hover-scale"
            aria-label={side === 'left' ? 'Previous' : 'Next'}
            style={{
              position: 'absolute', top: '50%', transform: 'translateY(-50%)',
              [side]: '-20px',
              width: '40px', height: '40px',
              borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(8px)',
              color: 'white', fontSize: '1rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {label}
          </button>
        ))}

        <ProgressBar paused={paused} key={progressKey} />
      </div>

      <DotNav total={total} current={current} onGo={(i) => goTo(i, i > current ? 'forward' : 'backward')} />
    </div>
  );
};

// ── App ──────────────────────────────────────────────────────────────────────
const App = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
    <style>{`
      @keyframes progressFill {
        from { width: 0%; }
        to   { width: 100%; }
      }
    `}</style>

    <header className="ease-fade-in ease-duration-slow" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px' }}>
      <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">What Devs Say</h1>
      <p className="ease-text-muted ease-mt-2">
        Direction-aware slides · auto-advance · pause on hover · EaseMotion CSS
      </p>
    </header>

    <Carousel />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
