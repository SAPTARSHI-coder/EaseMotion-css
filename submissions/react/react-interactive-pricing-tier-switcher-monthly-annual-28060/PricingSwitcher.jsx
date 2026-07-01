import React, { useState } from 'react';

/**
 * Interactive Pricing Tier Switcher (Monthly/Annual)
 * 
 * @param {Array} tiers - Array of pricing objects { name, monthlyPrice, annualPrice, features, isPopular }
 */
const PricingSwitcher = ({ tiers = [] }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="ease-pricing-container">
      {/* --- Switcher Toggle --- */}
      <div className="ease-pricing-toggle-wrapper">
        <span 
          className={`ease-pricing-toggle-label ${!isAnnual ? 'is-active' : ''}`}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </span>
        
        <button 
          className="ease-pricing-switch" 
          onClick={() => setIsAnnual(!isAnnual)}
          role="switch"
          aria-checked={isAnnual}
          aria-label="Toggle annual billing"
        >
          <div className={`ease-pricing-knob ${isAnnual ? 'is-annual' : 'is-monthly'}`} />
        </button>
        
        <span 
          className={`ease-pricing-toggle-label ${isAnnual ? 'is-active' : ''}`}
          onClick={() => setIsAnnual(true)}
        >
          Annually
          {/* Discount Badge */}
          <span className="ease-pricing-badge-save">Save 20%</span>
        </span>
      </div>

      {/* --- Pricing Cards Grid --- */}
      <div className="ease-pricing-grid">
        {tiers.map((tier, index) => {
          // Delay stagger calculation for initial render
          const delay = index * 0.1;
          const currentPrice = isAnnual ? tier.annualPrice : tier.monthlyPrice;

          return (
            <div 
              key={tier.name}
              className={`ease-pricing-card ${tier.isPopular ? 'is-popular' : ''}`}
              style={{ animationDelay: `${delay}s` }}
            >
              {tier.isPopular && <div className="ease-pricing-popular-badge">Most Popular</div>}
              
              <h3 className="ease-pricing-tier-name">{tier.name}</h3>
              
              <div className="ease-pricing-price-container">
                <span className="ease-pricing-currency">$</span>
                {/* 
                  Instead of replacing the number entirely, we use a wrapper with key to trigger CSS 
                  animations on value change, providing a physical "flip" or "slide" feel.
                */}
                <span className="ease-pricing-amount" key={currentPrice}>
                  {currentPrice}
                </span>
                <span className="ease-pricing-period">/mo</span>
              </div>
              
              {isAnnual && tier.annualPrice > 0 && (
                <div className="ease-pricing-billed-annually fade-in">
                  Billed ${(tier.annualPrice * 12).toFixed(0)} yearly
                </div>
              )}
              {!isAnnual && tier.annualPrice > 0 && (
                <div className="ease-pricing-billed-annually spacer">
                  &nbsp;
                </div>
              )}

              <button className={`ease-pricing-cta ${tier.isPopular ? 'primary' : 'secondary'}`}>
                Get Started
              </button>

              <ul className="ease-pricing-features">
                {tier.features.map((feature, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingSwitcher;
