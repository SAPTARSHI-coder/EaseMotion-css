# React Component: Statistic Comparison Card with Trend Indicator Motion (#28035)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a dashboard statistic card that automatically calculates the percentage change between a current and previous value, displaying a dynamic, animated trend indicator.

## 📦 What's included?

- `StatCard.jsx`: The React component that handles the math for the percentage change, determines if the trend is positive or negative, and manages the hover state to trigger the particle animations.
- `style.css`: The CSS stylesheet powering the `cubic-bezier` card lift, the SVG chart background scaling, and the particle ejection animations from the trend arrow.
- `demo.html`: A self-contained browser demo running the React component to showcase a grid of cards (both positive and negative trends).

## 🛠 Features

- **Auto-Calculated Trends**: Simply pass `value` and `previousValue`. The component does the math, formats it to one decimal place, and automatically determines whether to render the green "up" state or the red "down" state.
- **Micro-Interaction Physics**: Hovering the card triggers several connected physics actions:
  1. The entire card lifts up (`translateY(-4px)`).
  2. The background decorative SVG chart stretches upwards (`scaleY(1)`).
  3. The trend indicator pill physically nudges in the direction of the trend (up/right or down/right).
  4. The arrow inside the trend pill shoots out 3 tiny, delayed CSS particles to emphasize the momentum.
- **Staggered Entrance**: The component uses a `useEffect` hook to apply a `.is-mounted` class shortly after render, allowing the cards to smoothly slide up into place when the dashboard loads.

## 🚀 How to use

1. Copy `StatCard.jsx` into your React project.
2. Copy `style.css` and import it.
3. Use the component in your dashboard.

```jsx
import React from 'react';
import StatCard from './StatCard';
import './style.css'; 

const Dashboard = () => {
  return (
    <div className="grid">
      <StatCard 
        title="Total Revenue" 
        value={128450} 
        previousValue={112000} // Automatically calculates +14.7%
        prefix="$" 
      />
      <StatCard 
        title="Active Users" 
        value={4250} 
        previousValue={4800} // Automatically calculates -11.5%
      />
    </div>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

Dashboards are often dense and visually fatiguing. By incorporating a trend indicator that physically reacts to the user's cursor (nudging in the direction of the trend and emitting momentum particles), we create a moment of tactile feedback. The data isn't just a static number—it has directional weight and energy, aligning perfectly with EaseMotion's philosophy of bringing interfaces to life through physics.
