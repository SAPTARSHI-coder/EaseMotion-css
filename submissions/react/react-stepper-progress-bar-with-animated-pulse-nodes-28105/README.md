# React Component: Stepper Progress Bar with Animated Pulse Nodes (#28105)

A modular, copy-paste ready React `<Stepper>` component for guiding users through sequential steps. It features a physics-based expanding connector line, a continuous pulsing animation on the active node, and an SVG checkmark drawing animation upon completion. Supports both horizontal and vertical orientations. Zero external dependencies — pure React hooks and EaseMotion CSS.

## 📦 What's included?

- `Stepper.jsx`: The React component that manages node states (pending, active, completed) and renders the structural DOM.
- `style.css`: The CSS stylesheet powering the `scale()` connector line animation, the active node infinite pulse, and SVG checkmark stroke drawing.
- `demo.html`: A self-contained demo showcasing both a horizontal and vertical stepper controlled by Next/Back buttons — opens directly in a browser.

## 🛠 Features

- **Active Pulse Node**: The current step node scales up slightly (`scale(1.15)`) and emits an infinite, fading pulse ring (`ease-step-pulse-anim`) to immediately draw the user's eye to the required action.
- **Spring-Animated Connectors**: As the user progresses, the connecting line fills using `transform: scale(1)` with a `transform-origin` of `left center` (horizontal) or `top center` (vertical). Eased with `cubic-bezier(0.34, 1.56, 0.64, 1)` for a snappy, physics-driven feel.
- **Checkmark Draw Animation**: Completed steps swap their number for a checkmark icon. The checkmark is drawn dynamically using `stroke-dasharray` and `stroke-dashoffset` keyframes.
- **Flexible Orientation**: Pass `orientation="vertical"` to switch from a top horizontal layout to a left-aligned vertical layout automatically.
- **Custom Theming**: The `color` prop sets a CSS custom property (`--ease-step-color`), instantly changing the active border, pulse, text, and connector fill color.

## 🚀 How to use

```jsx
import { useState } from 'react';
import Stepper from './Stepper';
import './style.css';

const STEPS = [
  { label: 'Cart', description: 'Review items' },
  { label: 'Address', description: 'Where to ship' },
  { label: 'Payment', description: 'Credit card' },
];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1); // Currently on "Address"

  return (
    <Stepper
      steps={STEPS}
      activeStep={activeStep}
      orientation="horizontal"
      color="#10b981" // GitHub Green
    />
  );
};
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `Array<string \| {label, description}>` | `[]` | The steps to render. Can be simple strings or objects with a sub-description. |
| `activeStep` | `number` | `0` | The 0-based index of the currently active step. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction of the progress bar. |
| `color` | `string` | `'#3b82f6'` | CSS color string used for active/completed states. |

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

A static stepper fails to guide the user's attention. By adding a slow, continuous pulse to the active node, the interface explicitly communicates "this requires your input right now" without being intrusive. Furthermore, animating the connector fill with a spring `cubic-bezier` rather than a linear transition gives the progression a satisfying sense of momentum, rewarding the user for completing a step.
