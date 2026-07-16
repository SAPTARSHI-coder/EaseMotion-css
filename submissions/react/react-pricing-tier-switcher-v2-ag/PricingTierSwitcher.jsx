import React, { useState } from 'react';
import './style.css'; // Includes supplementary structural styling for the component

/**
 * Interactive Pricing Tier Switcher
 * A modular React component showcasing EaseMotion animations during state changes.
 */
const PricingTierSwitcher = ({ 
  monthlyTiers, 
  annualTiers, 
  currency = '$',
  annualDiscountLabel = 'Save 20%'
}) => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Determine which tier data to render based on toggle state
  const activeTiers = isAnnual ? annualTiers : monthlyTiers;

  return (
    <div className="pricing-container ease-fade-in-up">
      {/* Switcher Toggle */}
      <div className="pricing-toggle-wrapper">
        <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
        <button 
          className={`ease-toggle-switch ${isAnnual ? 'toggled' : ''}`}
          onClick={() => setIsAnnual(!isAnnual)}
          aria-label="Toggle billing cycle"
        >
          <span className="ease-toggle-knob"></span>
        </button>
        <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>
          Annually 
          <span className="discount-badge ease-pulse-slow">{annualDiscountLabel}</span>
        </span>
      </div>

      {/* Pricing Cards Grid */}
      <div className="pricing-cards-grid">
        {activeTiers.map((tier, index) => (
          <div 
            // The unique key forces React to re-mount the component on toggle, re-triggering entrance animations
            key={`${isAnnual ? 'annual' : 'monthly'}-${index}`} 
            className={`pricing-card ease-hover-lift ease-fade-in ${tier.isPopular ? 'popular' : ''}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {tier.isPopular && <div className="popular-badge">Most Popular</div>}
            
            <h3 className="tier-name">{tier.name}</h3>
            
            <div className="tier-price">
              <span className="currency">{currency}</span>
              <span className="price">{tier.price}</span>
              <span className="cycle">/ {isAnnual ? 'yr' : 'mo'}</span>
            </div>
            
            <p className="tier-desc">{tier.description}</p>
            
            <ul className="tier-features">
              {tier.features.map((feat, i) => (
                <li 
                  key={i} 
                  className="ease-slide-right" 
                  style={{ animationDelay: `${(index * 0.15) + (i * 0.05)}s` }}
                >
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>
            
            <button className={`tier-btn ${tier.isPopular ? 'primary ease-hover-glow' : 'secondary ease-hover-shadow'}`}>
              {tier.buttonText || 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTierSwitcher;
