import React, { useState } from 'react';
import './style.css';

export default function PricingSwitcher() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    { name: 'Starter', price: { monthly: 9, yearly: 90 }, features: ['1 User', '10GB Storage', 'Basic Support'] },
    { name: 'Pro', price: { monthly: 29, yearly: 290 }, features: ['5 Users', '50GB Storage', 'Priority Support'] },
    { name: 'Enterprise', price: { monthly: 99, yearly: 990 }, features: ['Unlimited Users', '500GB Storage', '24/7 Support'] },
  ];

  return (
    <div className="ease-pricing">
      <div className="ease-pricing-toggle">
        <span className={!yearly ? 'active' : ''} onClick={() => setYearly(false)}>Monthly</span>
        <div className={`ease-toggle-track ${yearly ? 'yearly' : ''}`} onClick={() => setYearly(!yearly)}>
          <div className="ease-toggle-thumb" />
        </div>
        <span className={yearly ? 'active' : ''} onClick={() => setYearly(true)}>Yearly</span>
      </div>
      <div className="ease-pricing-cards">
        {plans.map(p => (
          <div key={p.name} className="ease-pricing-card">
            <h3>{p.name}</h3>
            <div className="ease-price">${yearly ? p.price.yearly : p.price.monthly}<span>/{yearly ? 'yr' : 'mo'}</span></div>
            <ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
            <button className="ease-pricing-btn">Choose {p.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
