# React Component: Stepper Progress Bar with Animated Pulse Nodes (#28015)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a horizontal progress stepper. It features a physics-based expanding track line, spring-animated checkmarks for completed steps, and an attention-grabbing CSS pulse ring on the currently active step.

## 📦 What's included?

- `Stepper.jsx`: The React component that maps over a provided array of step labels, calculates the active progress width percentage, and applies the appropriate state classes (`is-completed`, `is-active`).
- `style.css`: The CSS stylesheet powering the responsive flexbox node layout, the `cubic-bezier` track expansion animations, the SVG checkmark scale entrances, and the continuous CSS `@keyframes` pulse ring.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Calculated Track Expansion**: Instead of hardcoding track widths, React calculates the exact percentage the blue fill line needs to expand to reach the center of the active node. CSS `transition: width 0.6s cubic-bezier` handles the smooth physical animation.
- **Continuous Pulse**: The currently active step renders an absolute positioned `span` that utilizes a continuous CSS `@keyframes` animation, creating a gentle radar-like pulse that guides the user's eye to the current action.
- **Interactive (Optional)**: If you pass an `onStepClick` prop, the stepper nodes become clickable buttons, allowing users to navigate backwards.
- **Spring Checkmarks**: When a step completes, the number disappears and an SVG checkmark springs in with an overshoot curve.

## 🚀 How to use

1. Copy `Stepper.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component, passing an array of strings as `steps` and tracking the `currentStep` in your state.

```jsx
import React, { useState } from 'react';
import Stepper from './Stepper';
import './style.css'; 

const CheckoutFlow = () => {
  const [step, setStep] = useState(2);
  const steps = ["Cart", "Shipping", "Payment", "Review"];

  return (
    <div style={{ width: '600px', padding: '2rem' }}>
      <Stepper 
        steps={steps} 
        currentStep={step} // 1-indexed (e.g. 2 means "Shipping" is active)
        onStepClick={(newStep) => setStep(newStep)} // Optional: allows clicking nodes
      />
      
      <div style={{ marginTop: '3rem' }}>
        <button onClick={() => setStep(prev => prev - 1)}>Back</button>
        <button onClick={() => setStep(prev => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default CheckoutFlow;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI state changes feel organic rather than instantaneous.

Standard stepper components often "snap" the progress bar width instantly to the next node. Here, we decouple the mathematical width calculation (handled by React) from the rendering interpolation (handled by CSS). When the state changes, the CSS `transition` engine takes over, drawing the blue track line smoothly to its new destination using an EaseMotion spring curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`). 

Furthermore, the continuous ambient animation (the pulse ring) provides a subconscious affordance to the user indicating exactly where their attention is required.
