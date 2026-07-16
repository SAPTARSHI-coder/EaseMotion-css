# React Component: Interactive Pricing Tier Switcher (#28060)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a pricing table grid with a central Monthly/Annually toggle that seamlessly animates the numbers when switched.

## 📦 What's included?

- `PricingSwitcher.jsx`: The React component that manages the `isAnnual` state, renders the toggle switch, and maps through a dynamic array of pricing `tiers`.
- `style.css`: The CSS stylesheet powering the spring-loaded toggle knob, the staggered card entrance, the hover lifts, and the unique number replacement roll-in animation.
- `demo.html`: A self-contained browser demo running the React component to showcase the switcher interaction and the three generated pricing tiers.

## 🛠 Features

- **Spring-loaded Toggle Switch**: The main billing toggle uses a `cubic-bezier(0.34, 1.56, 0.64, 1)` transition for the knob `translateX`, giving it a satisfying mechanical feel. It also transitions the track background from gray to blue when annual is selected.
- **Physical Number Replacement**: Instead of instantly snapping to the new price when toggled, the React component uses a unique `key={currentPrice}` on the number element. This forces React to mount a new DOM node, which automatically triggers a CSS `@keyframes easePriceRollIn` animation, making the numbers feel like a physical odometer or flip-clock rolling into place.
- **Staggered Card Entrance**: On initial load, the pricing cards fade and slide up sequentially using an inline `animationDelay: ${index * 0.1}s`.
- **Hover Micro-interactions**: The cards lift slightly `translateY(-8px)` and cast a deeper shadow on hover. The Call to Action buttons feature tactile scale presses (`scale(0.98)` on active).

## 🚀 How to use

1. Copy `PricingSwitcher.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass an array of `tiers` to the component.

```jsx
import React from 'react';
import PricingSwitcher from './PricingSwitcher';
import './style.css'; 

const CheckoutPage = () => {
  const tiers = [
    {
      name: "Pro",
      monthlyPrice: 49,
      annualPrice: 39,
      isPopular: true,
      features: ["Up to 20 users", "API access", "Priority Support"]
    }
    // ... add more tiers
  ];

  return <PricingSwitcher tiers={tiers} />;
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

Standard pricing toggles feel jarring because the numbers blink instantly from $49 to $39. This sudden change causes a split-second of cognitive dissonance. 

By applying a rolling transform entrance (`translateY(-20px) scale(0.9)` to `0`) whenever the price value changes, we bridge the gap between states. The brain interprets this as a physical object rotating to a new face, reducing cognitive load and creating a premium, polished checkout experience.
