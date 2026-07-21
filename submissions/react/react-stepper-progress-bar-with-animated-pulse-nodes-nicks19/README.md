# Stepper Progress Bar with Animated Pulse Nodes

A modular, accessible React component that visually tracks progress through a sequence of steps. It supports both horizontal and vertical orientations and features smooth EaseMotion transitions, including a pulsing animation for the active step and a spring-scale entrance for completed icons.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `steps` | `Array<{title: string, description?: string}>` | **Required** | The array of step objects to display |
| `currentStep` | `number` | `0` | The zero-based index of the currently active step |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout orientation of the stepper |

## Installation

1. Copy `StepperProgressBar.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React, { useState } from 'react';
import StepperProgressBar from './StepperProgressBar';

function CheckoutFlow() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { title: 'Cart', description: 'Review your items' },
    { title: 'Shipping', description: 'Choose shipping method' },
    { title: 'Payment', description: 'Enter payment details' },
    { title: 'Review', description: 'Final order review' }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
      <StepperProgressBar 
        steps={steps} 
        currentStep={currentStep} 
        orientation="horizontal" 
      />
      
      <div style={{ marginTop: '40px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setCurrentStep(s => Math.max(0, s - 1))}>Previous</button>
        <button onClick={() => setCurrentStep(s => Math.min(steps.length - 1, s + 1))}>Next</button>
      </div>
    </div>
  );
}

export default CheckoutFlow;
```

## Why it fits EaseMotion CSS

- **Pulse Animations (`ease-pulse-node`)**: The active node uses a subtle pulsing shadow effect indicating current focus.
- **Spring Scaling (`ease-scale-in`)**: Completed checkmark icons appear with a playful spring scaling curve.
- **Smooth Layout Transitions**: Progress lines fill seamlessly across steps with controlled cubic-bezier easing.
- **Zero Dependencies**: Entirely standalone using standard CSS and React.
