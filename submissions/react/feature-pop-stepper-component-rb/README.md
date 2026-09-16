# Pop Stepper Component

Resolves #54727

A React progress stepper component featuring a smooth pop animation effect on step transitions.

## Usage

```jsx
import React, { useState } from 'react';
import PopStepperRB from './PopStepperRB';

const steps = [
  { label: 'Cart' },
  { label: 'Delivery' },
  { label: 'Payment' }
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <PopStepperRB 
      steps={steps} 
      currentStep={currentStep} 
      onStepClick={setCurrentStep} 
    />
  );
}
```

## Features
- **Pop Animation:** Uses CSS scaling keyframe animations to emphasize step activation transitions.
- **Accessibility:** Implements semantic list navigation structure, screen reader labels, and keyboard interaction.
- **Reduced Motion:** Respects user accessibility preferences (`prefers-reduced-motion`).
