# Interactive Pricing Tier Switcher (React Component)

A fully modular, copy-paste ready React component that provides a smooth, animated toggle between Monthly and Annual pricing tiers using EaseMotion CSS animations.

## Features
- **State-driven Animations:** Cards gracefully re-animate (fade in, slide features) when switching between monthly and annual plans.
- **Popular Tier Highlighting:** Automatically scales and highlights the "Most Popular" tier based on your configuration.
- **EaseMotion Integration:** Uses standard `ease-` classes for hover lifts, glow effects, fades, and sliding elements.
- **Zero Dependencies:** Relies purely on React (`useState`) and standard CSS.

## Installation

1. Copy `PricingTierSwitcher.jsx` into your React project components directory.
2. Copy `style.css` (or integrate its contents into your global CSS).
3. Ensure your project has the EaseMotion CSS framework linked (the component uses classes like `ease-fade-in-up`, `ease-slide-right`, and `ease-hover-lift`).

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `monthlyTiers` | Array of Objects | **Required** | The array defining the monthly pricing plans. |
| `annualTiers` | Array of Objects | **Required** | The array defining the annual pricing plans. |
| `currency` | String | `'$'` | The currency symbol to display before prices. |
| `annualDiscountLabel` | String | `'Save 20%'` | Text shown in the discount badge on the annual toggle. |

### Tier Object Schema
```js
{
  name: String,        // e.g. "Basic"
  price: String,       // e.g. "19"
  description: String, // e.g. "Perfect for starters."
  features: Array,     // Array of strings (e.g. ["1 User", "5GB Storage"])
  isPopular: Boolean,  // Set true to highlight this card
  buttonText: String   // e.g. "Start Free Trial"
}
```

## Usage Example

```jsx
import React from 'react';
import PricingTierSwitcher from './PricingTierSwitcher';

const monthlyTiers = [
  { name: 'Basic', price: '19', description: 'Essential features for individuals.', features: ['1 User', '5 Projects', '10GB Storage'], isPopular: false, buttonText: 'Get Started' },
  { name: 'Pro', price: '49', description: 'Advanced tools for growing teams.', features: ['5 Users', 'Unlimited Projects', '100GB Storage', 'Priority Support'], isPopular: true, buttonText: 'Start Free Trial' },
  { name: 'Enterprise', price: '99', description: 'Maximum performance for large scaling.', features: ['Unlimited Users', 'Unlimited Projects', '1TB Storage', '24/7 Support'], isPopular: false, buttonText: 'Contact Sales' }
];

const annualTiers = [
  { name: 'Basic', price: '15', description: 'Essential features for individuals.', features: ['1 User', '5 Projects', '10GB Storage'], isPopular: false, buttonText: 'Get Started' },
  { name: 'Pro', price: '39', description: 'Advanced tools for growing teams.', features: ['5 Users', 'Unlimited Projects', '100GB Storage', 'Priority Support'], isPopular: true, buttonText: 'Start Free Trial' },
  { name: 'Enterprise', price: '79', description: 'Maximum performance for large scaling.', features: ['Unlimited Users', 'Unlimited Projects', '1TB Storage', '24/7 Support'], isPopular: false, buttonText: 'Contact Sales' }
];

function App() {
  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh', padding: '50px 0' }}>
      <PricingTierSwitcher 
        monthlyTiers={monthlyTiers} 
        annualTiers={annualTiers} 
        annualDiscountLabel="Save 20% Annually"
      />
    </div>
  );
}

export default App;
```
