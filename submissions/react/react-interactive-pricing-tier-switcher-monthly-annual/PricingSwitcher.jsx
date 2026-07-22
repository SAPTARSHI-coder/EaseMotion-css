import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './PricingSwitcher.css';

/**
 * PricingSwitcher Component
 * Displays interactive pricing plans with a monthly/annual billing cycle toggle switcher,
 * popular highlights, hover spotlights, custom accent colors, and keyboard accessibility.
 *
 * @param {Object} props
 * @param {Array} props.plans - Custom plan configurations
 * @param {string} [props.accentColor='#3b82f6'] - Visual focus outline and toggle highlight color
 * @param {string} [props.theme='dark'] - UI layout theme: 'dark' | 'light' | 'glass'
 * @param {Function} [props.onPlanSelect] - Callback when a plan's button is clicked
 */
export default function PricingSwitcher({
  plans = [],
  accentColor = '#3b82f6',
  theme = 'dark',
  onPlanSelect
}) {
  const [isAnnual, setIsAnnual] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);
  
  const cardsRef = useRef([]);

  // Spotlight mouse tracking coordinates setter
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  // Keyboard accessibility listeners for toggle & card navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setIsAnnual((prev) => !prev);
    }
  };

  const defaultPlans = [
    {
      id: 'starter',
      name: 'Starter',
      monthlyPrice: 19,
      annualDiscountPct: 20,
      features: [
        'Up to 5 Projects',
        'Basic Email Support',
        '10GB Dedicated SSD Storage',
        'Standard Real-time Analytics Dashboard',
        'Automatic Weekly Cloud Backups'
      ],
      ctaText: 'Get Started',
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      monthlyPrice: 49,
      annualDiscountPct: 20,
      features: [
        'Unlimited Active Projects',
        '24/7 Priority Live Chat Support',
        '50GB Dedicated SSD Storage',
        'Advanced Analytics with Custom Reporting',
        'Seamless Third-party CRM Integrations',
        'Collaborative Team Workspaces'
      ],
      ctaText: 'Buy Pro Edition',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plus',
      monthlyPrice: 99,
      annualDiscountPct: 20,
      features: [
        'Unlimited Active Projects',
        'Dedicated Solutions Architect Support',
        'Custom Storage and Scale Limits',
        'White-labeled Client Dashboards',
        '99.9% Uptime SLA Guarantees',
        'Advanced Single Sign-On (SSO/SAML)'
      ],
      ctaText: 'Contact Enterprise Sales',
      popular: false
    }
  ];

  const activePlans = plans.length > 0 ? plans : defaultPlans;

  const getThemeStyles = () => {
    switch (theme) {
      case 'light':
        return {
          bg: '#f8fafc',
          border: '1px solid #e2e8f0',
          text: '#0f172a',
          muted: '#64748b',
          cardBg: '#ffffff',
          cardBorder: '#e2e8f0',
          toggleBg: '#e2e8f0',
          toggleActive: '#ffffff',
          spotlightColor: 'rgba(15, 23, 42, 0.02)'
        };
      case 'glass':
        return {
          bg: 'rgba(15, 23, 42, 0.55)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          text: '#f8fafc',
          muted: '#94a3b8',
          cardBg: 'rgba(255, 255, 255, 0.03)',
          cardBorder: 'rgba(255, 255, 255, 0.05)',
          toggleBg: 'rgba(255, 255, 255, 0.04)',
          toggleActive: 'rgba(255, 255, 255, 0.08)',
          backdropBlur: '12px',
          spotlightColor: 'rgba(255, 255, 255, 0.025)'
        };
      case 'dark':
      default:
        return {
          bg: '#020617',
          border: '1px solid #1e293b',
          text: '#f8fafc',
          muted: '#6b7280',
          cardBg: '#0f172a',
          cardBorder: '#1e293b',
          toggleBg: '#1e293b',
          toggleActive: '#334155',
          spotlightColor: 'rgba(255, 255, 255, 0.015)'
        };
    }
  };

  const styleTheme = getThemeStyles();

  return (
    <section
      className="pricing-switcher-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem',
        padding: '3rem 1.5rem',
        width: '100%',
        boxSizing: 'border-box',
        color: styleTheme.text
      }}
    >
      {/* Dynamic Toggle Billing Switcher */}
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="billing-toggle-container"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: styleTheme.toggleBg,
          padding: '4px',
          borderRadius: '99px',
          cursor: 'pointer',
          outline: 'none',
          border: `1px solid ${styleTheme.cardBorder}`
        }}
        onClick={() => setIsAnnual((prev) => !prev)}
      >
        <button
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '99px',
            border: 'none',
            fontSize: '0.88rem',
            fontWeight: 700,
            cursor: 'pointer',
            backgroundColor: !isAnnual ? styleTheme.toggleActive : 'transparent',
            color: !isAnnual ? styleTheme.text : styleTheme.muted,
            transition: 'all 0.25s ease'
          }}
        >
          Monthly
        </button>
        <button
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '99px',
            border: 'none',
            fontSize: '0.88rem',
            fontWeight: 700,
            cursor: 'pointer',
            backgroundColor: isAnnual ? styleTheme.toggleActive : 'transparent',
            color: isAnnual ? styleTheme.text : styleTheme.muted,
            transition: 'all 0.25s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          Annual
          <span
            style={{
              fontSize: '0.7rem',
              backgroundColor: `${accentColor}18`,
              color: accentColor,
              padding: '2px 6px',
              borderRadius: '99px',
              fontWeight: 800
            }}
          >
            Save 20%
          </span>
        </button>
      </div>

      {/* Plans List Row Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '1000px',
          alignItems: 'stretch'
        }}
      >
        {activePlans.map((plan, index) => {
          const rawPrice = plan.monthlyPrice;
          const discountedPrice = rawPrice * (1 - (plan.annualDiscountPct || 0) / 100);
          const finalPrice = isAnnual ? discountedPrice : rawPrice;
          
          return (
            <div
              key={plan.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              className={`pricing-card-item ${plan.popular ? 'popular-glow' : ''}`}
              style={{
                backgroundColor: styleTheme.cardBg,
                border: plan.popular ? `2px solid ${accentColor}` : `1px solid ${styleTheme.cardBorder}`,
                borderRadius: '24px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'left',
                backgroundImage: `radial-gradient(circle 120px at var(--mouse-x, 0) var(--mouse-y, 0), ${styleTheme.spotlightColor}, transparent)`
              }}
            >
              {/* Popular indicator badge */}
              {plan.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: accentColor,
                    color: '#fff',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '99px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Title & Price details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: plan.popular ? '1rem' : '0' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, letterSpacing: '-0.01em' }}>
                  {plan.name}
                </h4>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.03em', fontFamily: '"Fira Code", monospace' }}>
                    ${Math.round(finalPrice)}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: styleTheme.muted, fontWeight: 600 }}>
                    /mo
                  </span>
                </div>
                {isAnnual && (
                  <span style={{ fontSize: '0.75rem', color: accentColor, fontWeight: 700 }}>
                    Billed annually (${Math.round(finalPrice * 12)}/yr)
                  </span>
                )}
              </div>

              {/* Features List checklist */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: styleTheme.text }}>
                    <span style={{ color: accentColor, fontWeight: 900, fontSize: '1rem' }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA trigger Button */}
              <button
                onClick={() => onPlanSelect && onPlanSelect(plan)}
                className="pricing-cta-btn"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  borderRadius: '14px',
                  border: plan.popular ? 'none' : `1.5px solid ${accentColor}`,
                  backgroundColor: plan.popular ? accentColor : 'transparent',
                  color: plan.popular ? '#fff' : styleTheme.text,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: plan.popular ? `0 4px 15px ${accentColor}30` : 'none'
                }}
              >
                {plan.ctaText || 'Get Started'}
              </button>
            </div>
          );
        })}
      </div>
      
      {/* Styles Injected Locally */}
      <style>{`
        .billing-toggle-container:focus-visible {
          box-shadow: 0 0 0 3px ${accentColor}30 !important;
          border-color: ${accentColor} !important;
        }
      `}</style>
    </section>
  );
}

// React PropTypes validation schema keys definitions
PricingSwitcher.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      monthlyPrice: PropTypes.number.isRequired,
      annualDiscountPct: PropTypes.number,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      ctaText: PropTypes.string,
      popular: PropTypes.bool
    })
  ),
  accentColor: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light', 'glass']),
  onPlanSelect: PropTypes.func
};
