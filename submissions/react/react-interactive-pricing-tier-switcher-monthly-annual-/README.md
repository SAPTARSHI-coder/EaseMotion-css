# React Component: Interactive Pricing Tier Switcher (Monthly/Annual) (#28010)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a highly polished pricing table. It features a toggle switch with spring physics, animated number ticking when changing billing cycles, and responsive layout grids.

## 📦 What's included?

- `PricingSwitcher.jsx`: The React component that maps over the pricing tier data and manages the `billingCycle` state (monthly vs annual). Includes a sub-component (`<AnimatedPrice />`) that forces CSS animations on price changes using React `key` reconciliation.
- `style.css`: The CSS stylesheet powering the tactile pill toggle, the "Most Popular" scale-up effect, hover states, and the `@keyframes` for the number ticking animation.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone, pre-loaded with standard SaaS pricing data.

## 🛠 Features

- **Ticking Price Animation**: When the user switches between Monthly and Annual billing, the price numbers don't just instantly change text. They physically drop in from the top using a `cubic-bezier(0.34, 1.56, 0.64, 1)` spring animation combined with an opacity fade.
- **Physical Toggle Switch**: The toggle pill uses CSS transforms on a nested white dot, allowing it to slide back and forth with overshoot physics.
- **Floating Badges**: The "Save 20%" discount badge utilizes a continuous, infinite vertical floating animation (`easePricingFloat`) to draw the eye to the annual discount.
- **Grid Auto-Layout**: The pricing cards utilize CSS Grid (`auto-fit`) to naturally stack vertically on mobile and sit side-by-side on desktop.

## 🚀 How to use

1. Copy `PricingSwitcher.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Pass a `tiers` array containing the pricing data structure shown below.

```jsx
import React from 'react';
import PricingSwitcher from './PricingSwitcher';
import './style.css'; 

const PricingPage = () => {
  const tiers = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'For individuals.',
      price: { monthly: 15, annual: 12 },
      isPopular: false,
      buttonText: 'Get Started',
      features: ['Feature 1', 'Feature 2']
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For teams.',
      price: { monthly: 49, annual: 39 },
      isPopular: true,
      buttonText: 'Start Trial',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    }
  ];

  return <PricingSwitcher tiers={tiers} />;
};

export default PricingPage;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements feel physical and responsive to their context.

Pricing tables are historically rigid. By coupling the CSS transforms with React's render lifecycle (using the `key={price}` trick to force re-mounting), we ensure that every single time the user clicks the toggle, the numbers physically fall into place. Combined with the spring-loaded toggle pill and the tactile hover lift of the cards themselves, it creates an enterprise-grade experience using zero external JS animation libraries.
