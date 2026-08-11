# React Component: Countdown Timer Clock with Animated Flip Digits (#28247)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component accurately calculates time remaining until a target date and renders a highly realistic 3D split-flap mechanical display.

## 📦 What's included?

- `CountdownTimer.jsx`: The React component file containing two parts: a `CountdownTimer` parent that manages the `Date` math interval loop, and a `<FlipDigit />` sub-component that manages the local state required to transition between old and new digits.
- `style.css`: The CSS stylesheet utilizing `perspective: 800px`, `transform: rotateX()`, and `backface-visibility` to create the physics-based 3D flip card effect.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone.

## 🛠 Features

- **Mechanical 3D Flipping**: Emulates classic split-flap boards (like train stations). Uses dual animation keyframes (`easeFlipTop` and `easeFlipBottom`) synchronized with React's `useEffect` timeouts to fold the old digit forward and reveal the new digit.
- **Accurate Time Math**: Defends against drift by recalculating the delta against `new Date().getTime()` every second, rather than simply decrementing an arbitrary counter.
- **Event Callbacks**: Provides an `onComplete` prop that reliably fires exactly once when the timer reaches zero, allowing your app to trigger celebrations or layout shifts automatically.

## 🚀 How to use

1. Copy `CountdownTimer.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Supply a valid Javascript Date object or timestamp string to the `targetDate` prop.

```jsx
import React from 'react';
import CountdownTimer from './CountdownTimer';
import './style.css'; 

const LaunchPage = () => {
  // Target date: Dec 31, 2026
  const target = new Date("2026-12-31T23:59:59");

  const handleLaunch = () => {
    console.log("The countdown has reached zero!");
  };

  return (
    <div style={{ padding: '60px', background: '#0f172a' }}>
      <h2 style={{ color: 'white' }}>Time until launch:</h2>
      <CountdownTimer 
        targetDate={target}
        onComplete={handleLaunch} 
      />
    </div>
  );
};

export default LaunchPage;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** believes animations should connect digital interfaces to physical expectations.

A standard textual countdown feels clinical and boring. By applying CSS 3D transforms (`rotateX`) and realistic structural styling (half-height blocks, center split-lines, simulated shadows cast by the falling flap), we give the passage of time physical weight. The flip animations use standard `ease-in` and `ease-out` timing functions carefully staged to snap at exactly the 500ms mark, ensuring a crisp, tactile movement.
