// submissions/react-pricing-table-22934/PricingTable.jsx
const { useState } = React;

/**
 * PricingTable — Animated pricing table with hover effects using EaseMotion CSS.
 *
 * Animation techniques demonstrated:
 * 1. Staggered card entry — cards enter with `.ease-slide-up` at `index × 150ms`
 *    delay when the component first mounts.
 * 2. Billing toggle — switching between Monthly/Annual smoothly swaps prices
 *    using `.ease-fade-in` on the price span via a React key change.
 * 3. `.ease-hover-scale` + `.ease-hover-glow` on every card for immediate
 *    interactive feedback on mouse enter.
 * 4. Feature list stagger — each feature row inside a card applies
 *    `.ease-slide-up` at `featureIndex × 60ms` so they cascade in.
 * 5. "Popular" badge pulse — the recommended plan badge uses `.ease-pulse`
 *    continuously to draw attention without being distracting.
 * 6. CTA button hover — `.ease-hover-scale .ease-hover-glow` on primary CTAs
 *    with an extra gradient shimmer on the featured card's button.
 */

// ── Plan data ───────────────────────────────────────────────────────────────
const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    icon: '🌱',
    monthlyPrice: 0,
    annualPrice: 0,
    priceLabel: 'Free forever',
    color: '#10b981',
    featured: false,
    cta: 'Get Started',
    features: [
      { label: 'Up to 3 projects',       included: true  },
      { label: 'Core animation classes', included: true  },
      { label: 'Community support',       included: true  },
      { label: 'Custom easing curves',   included: false },
      { label: 'Priority support',        included: false },
      { label: 'Team collaboration',      included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: '⚡',
    monthlyPrice: 19,
    annualPrice: 15,
    color: '#6366f1',
    featured: true,
    cta: 'Start Free Trial',
    features: [
      { label: 'Unlimited projects',      included: true },
      { label: 'Core animation classes',  included: true },
      { label: 'Priority support',        included: true },
      { label: 'Custom easing curves',    included: true },
      { label: 'Advanced components',     included: true },
      { label: 'Team collaboration',      included: false },
    ],
  },
  {
    id: 'team',
    name: 'Team',
    icon: '🏢',
    monthlyPrice: 49,
    annualPrice: 39,
    color: '#06b6d4',
    featured: false,
    cta: 'Contact Sales',
    features: [
      { label: 'Unlimited projects',      included: true },
      { label: 'Core animation classes',  included: true },
      { label: 'Priority support',        included: true },
      { label: 'Custom easing curves',    included: true },
      { label: 'Advanced components',     included: true },
      { label: 'Team collaboration',      included: true },
    ],
  },
];

// ── Billing toggle ──────────────────────────────────────────────────────────
const BillingToggle = ({ annual, onChange }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '2.5rem' }}>
    <span style={{ color: !annual ? 'white' : 'rgba(255,255,255,0.4)', fontWeight: !annual ? 700 : 400, fontSize: '0.95rem', transition: 'color 0.2s' }}>
      Monthly
    </span>

    {/* Toggle switch */}
    <button
      onClick={() => onChange(!annual)}
      aria-label="Toggle billing period"
      style={{
        width: '52px', height: '28px',
        borderRadius: '14px',
        border: 'none', cursor: 'pointer',
        background: annual ? '#6366f1' : 'rgba(255,255,255,0.15)',
        position: 'relative',
        transition: 'background 0.3s ease',
        padding: 0,
      }}
    >
      <span style={{
        position: 'absolute', top: '4px',
        left: annual ? '28px' : '4px',
        width: '20px', height: '20px',
        borderRadius: '50%',
        background: 'white',
        transition: 'left 0.3s cubic-bezier(0.4,0,0.2,1)',
      }} />
    </button>

    <span style={{ color: annual ? 'white' : 'rgba(255,255,255,0.4)', fontWeight: annual ? 700 : 400, fontSize: '0.95rem', transition: 'color 0.2s' }}>
      Annual
      <span style={{ marginLeft: '6px', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '999px', background: 'rgba(99,102,241,0.3)', color: '#a78bfa', fontWeight: 700 }}>
        Save 20%
      </span>
    </span>
  </div>
);

// ── Feature row ─────────────────────────────────────────────────────────────
const FeatureRow = ({ feature, index }) => (
  <div
    className="ease-slide-up ease-duration-fast"
    style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      padding: '8px 0',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      animationDelay: `${200 + index * 60}ms`,
      animationFillMode: 'both',
    }}
  >
    <span style={{ fontSize: '0.9rem', color: feature.included ? '#34d399' : 'rgba(255,255,255,0.2)', flexShrink: 0 }}>
      {feature.included ? '✔' : '✕'}
    </span>
    <span style={{ fontSize: '0.85rem', color: feature.included ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.25)', textDecoration: feature.included ? 'none' : 'line-through' }}>
      {feature.label}
    </span>
  </div>
);

// ── Price display ────────────────────────────────────────────────────────────
const PriceDisplay = ({ plan, annual }) => {
  const price = annual ? plan.annualPrice : plan.monthlyPrice;
  const isFree = price === 0;

  return (
    <div style={{ marginBottom: '24px', textAlign: 'center' }}>
      {/* Price — key change triggers ease-fade-in on billing toggle */}
      <div
        key={`${plan.id}-${annual}`}
        className="ease-fade-in ease-duration-fast"
        style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '4px' }}
      >
        {!isFree && (
          <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', paddingTop: '10px' }}>$</span>
        )}
        <span style={{
          fontSize: isFree ? '2rem' : '3.5rem',
          fontWeight: 800,
          color: 'white',
          lineHeight: 1,
          letterSpacing: '-0.03em'
        }}>
          {isFree ? 'Free' : price}
        </span>
        {!isFree && (
          <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', paddingTop: '32px' }}>/mo</span>
        )}
      </div>

      {annual && !isFree && (
        <p style={{ margin: '6px 0 0', fontSize: '0.78rem', color: '#a78bfa' }}>
          Billed annually — save ${(plan.monthlyPrice - plan.annualPrice) * 12}/yr
        </p>
      )}
      {isFree && <p style={{ margin: '6px 0 0', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>No credit card required</p>}
    </div>
  );
};

// ── Plan card ────────────────────────────────────────────────────────────────
const PlanCard = ({ plan, annual, staggerIndex }) => (
  <div
    className={`ease-hover-scale ease-hover-glow ease-slide-up ease-duration-normal ${plan.featured ? '' : 'ease-card ease-card-glass'}`}
    style={{
      padding: '32px 28px',
      borderRadius: '20px',
      position: 'relative',
      animationDelay: `${staggerIndex * 150}ms`,
      animationFillMode: 'both',
      // Featured card gets an elevated gradient style
      ...(plan.featured ? {
        background: 'linear-gradient(145deg, rgba(99,102,241,0.25) 0%, rgba(6,182,212,0.15) 100%)',
        border: '1px solid rgba(99,102,241,0.5)',
        boxShadow: '0 0 40px rgba(99,102,241,0.2), 0 25px 50px -12px rgba(0,0,0,0.5)',
      } : {}),
    }}
  >
    {/* Popular badge */}
    {plan.featured && (
      <div
        className="ease-pulse"
        style={{
          position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
          color: 'white', fontSize: '0.72rem', fontWeight: 700,
          padding: '5px 16px', borderRadius: '999px',
          whiteSpace: 'nowrap', letterSpacing: '0.08em',
          boxShadow: '0 4px 12px rgba(99,102,241,0.4)',
        }}
      >
        ★ MOST POPULAR
      </div>
    )}

    {/* Header */}
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <span style={{ fontSize: '2.2rem' }}>{plan.icon}</span>
      <h3 style={{ margin: '8px 0 0', color: 'white', fontSize: '1.2rem', fontWeight: 700 }}>{plan.name}</h3>
    </div>

    {/* Price */}
    <PriceDisplay plan={plan} annual={annual} />

    {/* CTA button */}
    <button
      className={`ease-btn ease-hover-scale ${plan.featured ? 'ease-hover-glow' : ''}`}
      style={{
        width: '100%', padding: '13px',
        borderRadius: '10px', border: 'none', cursor: 'pointer',
        fontWeight: 700, fontSize: '0.92rem',
        background: plan.featured
          ? 'linear-gradient(135deg, #6366f1, #06b6d4)'
          : 'rgba(255,255,255,0.1)',
        color: 'white',
        transition: 'opacity 0.2s',
        marginBottom: '24px',
      }}
    >
      {plan.cta}
    </button>

    {/* Feature list */}
    <div>
      {plan.features.map((feature, i) => (
        <FeatureRow key={feature.label} feature={feature} index={i} />
      ))}
    </div>
  </div>
);

// ── App ──────────────────────────────────────────────────────────────────────
const App = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <div style={{ minHeight: '100vh', padding: '60px 24px' }}>
      <header className="ease-fade-in ease-duration-slow" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text">Simple Pricing</h1>
        <p className="ease-text-muted ease-mt-2 ease-text-lg">Start free. Scale when you're ready.</p>
      </header>

      <BillingToggle annual={annual} onChange={setAnnual} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '960px',
        margin: '0 auto',
        alignItems: 'start',
      }}>
        {PLANS.map((plan, idx) => (
          <PlanCard key={plan.id} plan={plan} annual={annual} staggerIndex={idx} />
        ))}
      </div>

      <p className="ease-text-muted ease-fade-in ease-duration-slow" style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.82rem' }}>
        All plans include a 14-day free trial. No credit card required.
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
