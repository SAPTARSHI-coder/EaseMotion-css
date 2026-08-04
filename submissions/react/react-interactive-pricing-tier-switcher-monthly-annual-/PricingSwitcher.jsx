import React, { useState } from 'react';

/**
 * Animated Number Component
 * Flips the number smoothly using CSS transitions when the price changes.
 */
const AnimatedPrice = ({ price }) => {
  return (
    <div className="ease-pricing-animated-number">
      {/* We use a key based on the price to force a re-render of the span 
          so the animation triggers every time it changes */}
      <span key={price} className="ease-pricing-number-tick">
        ${price}
      </span>
    </div>
  );
};

/**
 * Interactive Pricing Tier Switcher Component
 * 
 * @param {Array} tiers - Array of pricing tier objects
 * @param {String} initialBilling - 'monthly' or 'annual'
 */
const PricingSwitcher = ({ tiers, initialBilling = 'monthly' }) => {
  const [billingCycle, setBillingCycle] = useState(initialBilling);

  const isAnnual = billingCycle === 'annual';

  const toggleBilling = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly');
  };

  return (
    <div className="ease-pricing-container">
      
      {/* Toggle Switch */}
      <div className="ease-pricing-toggle-wrapper">
        <span className={`ease-pricing-toggle-label ${!isAnnual ? 'is-active' : ''}`}>
          Monthly
        </span>
        
        <button 
          className={`ease-pricing-switch ${isAnnual ? 'is-annual' : ''}`}
          onClick={toggleBilling}
          aria-pressed={isAnnual}
          aria-label="Toggle billing cycle"
        >
          <span className="ease-pricing-switch-thumb" />
        </button>

        <span className={`ease-pricing-toggle-label ${isAnnual ? 'is-active' : ''}`}>
          Annually
          <span className="ease-pricing-discount-badge">Save 20%</span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="ease-pricing-cards-grid">
        {tiers.map((tier) => {
          // Calculate active price based on toggle
          const activePrice = isAnnual ? tier.price.annual : tier.price.monthly;
          
          return (
            <div 
              key={tier.id} 
              className={`ease-pricing-card ${tier.isPopular ? 'is-popular' : ''}`}
            >
              {tier.isPopular && (
                <div className="ease-pricing-popular-banner">Most Popular</div>
              )}
              
              <div className="ease-pricing-card-header">
                <h3 className="ease-pricing-card-title">{tier.name}</h3>
                <p className="ease-pricing-card-desc">{tier.description}</p>
              </div>

              <div className="ease-pricing-card-price-wrap">
                <AnimatedPrice price={activePrice} />
                <span className="ease-pricing-card-period">/mo</span>
              </div>
              
              {/* EaseMotion: The annual sub-text fades in smoothly */}
              <div className={`ease-pricing-card-annual-desc ${isAnnual ? 'is-visible' : ''}`}>
                Billed ${activePrice * 12} annually
              </div>

              <ul className="ease-pricing-card-features">
                {tier.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`ease-pricing-btn ${tier.isPopular ? 'btn-primary' : 'btn-secondary'}`}>
                {tier.buttonText}
              </button>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default PricingSwitcher;
