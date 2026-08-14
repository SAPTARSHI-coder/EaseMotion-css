# React Component: Stepper Progress Bar with Animated Pulse Nodes (#28075)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a multi-step progress indicator ideal for checkout flows, onboarding screens, or multi-page forms, featuring a fluid connecting line and a pulsing beacon for the active step.

## 📦 What's included?

- `StepperProgress.jsx`: The React component that parses the step array, calculates the exact percentage width of the connecting line, and mounts the appropriate node states (pending, active, completed).
- `style.css`: The CSS stylesheet powering the `easeStepperPulse` beacon animation, the `width` transition curve on the connecting line, and the `easeCheckmarkPop` entrance.
- `demo.html`: A self-contained browser demo running the React component with "Back/Continue" buttons to showcase the state transitions in real time.

## 🛠 Features

- **Pulsing Active Beacon**: The currently active step node emits a continuous, infinite CSS ripple (`@keyframes easeStepperPulse`). This draws the user's eye immediately to where they are in the process.
- **Spring Width Transitions**: The blue connecting line doesn't just instantly snap between nodes. It uses an inline React `style={{ width: % }}` mapping paired with a CSS `transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)` to physically "shoot" across the gap with a slight bouncy overshoot.
- **Tactile Checkmarks**: When a step switches to 'completed', the number is replaced by an SVG checkmark that triggers a quick `scale` pop animation.
- **Architectural Separation**: The pulse ring is a *sibling* to the solid circle node, ensuring the text/number inside the circle never distorts during the pulse scaling.

## 🚀 How to use

1. Copy `StepperProgress.jsx` into your React project.
2. Copy `style.css` and import it.
3. Manage the current step index in your parent state.

```jsx
import React, { useState } from 'react';
import StepperProgress from './StepperProgress';
import './style.css'; 

const CheckoutFlow = () => {
  const [stepIndex, setStepIndex] = useState(0);
  
  const mySteps = [
    "Shipping",
    "Payment",
    "Confirmation"
  ];

  return (
    <div>
      <StepperProgress 
        steps={mySteps}
        currentStep={stepIndex}
      />
      
      <button onClick={() => setStepIndex(1)}>Go to Payment</button>
    </div>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making digital interfaces feel like physical systems guiding the user.

A static progress bar is boring and provides poor feedback. By adding a subtle pulsing ring to the current step, we treat that step like an active beacon saying "You are here, and action is required." The use of a `cubic-bezier` spring on the connecting line makes the progression between steps feel mechanical and deliberate, rewarding the user for completing a section.
