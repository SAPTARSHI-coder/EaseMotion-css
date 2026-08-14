# React Component: Analytics Metric Card with Animated Counter (#28051)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a dashboard analytics card that springs onto the screen while its internal numerical value counts up smoothly using a high-performance `requestAnimationFrame` loop.

## 📦 What's included?

- `MetricCard.jsx`: The React component that manages the numerical interpolation logic. It uses a custom `easeOutExpo` math function inside a `requestAnimationFrame` loop to make the numbers start spinning fast and slow down gracefully as they reach the final value.
- `style.css`: The CSS stylesheet powering the `cubic-bezier` card entrance animation, the subtle hover lift physics, the decorative glow, and tabular-numeral formatting.
- `demo.html`: A self-contained browser demo running the React component to showcase a grid of metrics with staggered entrances and a replay button.

## 🛠 Features

- **High-Performance Counter Animation**: Instead of CSS transitions, the number interpolation uses React hooks (`useEffect`) and browser native `requestAnimationFrame` to tick up to the target value at 60fps.
- **Expo Easing Physics**: The counter uses an exponential ease-out formula (`1 - Math.pow(2, -10 * x)`). This means it rapidly counts up the bulk of the number, but slows down dramatically for the final few digits, creating a satisfying "landing" feel.
- **Tabular Numerals**: The CSS applies `font-variant-numeric: tabular-nums;` to the counter. This ensures all digits take up the exact same horizontal width, preventing the layout from jittering back and forth while the numbers rapidly change.
- **Staggered Entrance**: The card enters with a `translateY(20px) scale(0.98)` spring animation. The counter is intentionally delayed by `300ms` so the user sees the card land *before* the numbers start moving.

## 🚀 How to use

1. Copy `MetricCard.jsx` into your React project.
2. Copy `style.css` and import it.
3. Use the component in your dashboard grid.

```jsx
import React from 'react';
import MetricCard from './MetricCard';
import './style.css'; 

const Dashboard = () => {
  return (
    <div className="grid">
      <MetricCard 
        title="Total Revenue" 
        value={124500} 
        prefix="$" 
        trend={12.5} 
      />
      <MetricCard 
        title="Churn Rate" 
        value={14} 
        suffix="%" 
        trend={-2.1} 
      />
    </div>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability. 

Static numbers on a dashboard are boring. Conversely, poorly animated numbers that count linearly at a constant speed feel robotic and cheap. 

By utilizing an `easeOutExpo` math curve, the number counter mimics friction. It starts out fast (low friction) and slows down as it approaches its target (high friction). Combining this high-performance JS animation with a CSS `cubic-bezier` card entrance creates a premium, polished dashboard experience that feels alive but grounded in physical reality.
