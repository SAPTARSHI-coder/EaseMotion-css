# React Stepper Progress Bar with Animated Pulse Nodes

A modular, copy‑paste ready React component that renders a horizontal stepper. Each step node pulses when it becomes active, using **EaseMotion CSS** utilities.

## Files
- `StepperProgressBar.jsx` – The React component.
- `style.css` – Custom EaseMotion CSS styles for the stepper and pulse animation.
- `demo.html` – Self‑contained demo that loads React via CDN and showcases the component.

## Installation
1. Copy the `react-stepper-progress-bar-with-animated-pulse-nodes-realtushartyagi` folder into your project's `submissions/react/` directory (or any location you prefer).
2. Ensure your project includes React (v18) and the EaseMotion CSS base styles.
3. Import the component:
   ```js
   import StepperProgressBar from "./StepperProgressBar.jsx";
   ```
4. Include the stylesheet in your HTML or import it in your bundler:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
const steps = ["Cart", "Shipping", "Payment", "Review", "Complete"];
function Example() {
  const [current, setCurrent] = React.useState(0);
  // Auto‑advance for demonstration
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <StepperProgressBar steps={steps} currentStep={current} />;
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| `steps` | `string[]` | Labels for each step in the bar. |
| `currentStep` | `number` | Zero‑based index of the active step. |

## Why it fits EaseMotion CSS
The component relies on **pure CSS** for all animations: the pulse effect is driven by a `@keyframes` animation and the connector line transitions via simple `background` changes. No JavaScript animation libraries are required, staying true to the animation‑first philosophy of EaseMotion.

## Demo
Open `demo.html` directly in a browser – no server needed.

---

> **Note:** The PR should only modify files inside `submissions/react/react-stepper-progress-bar-with-animated-pulse-nodes-realtushartyagi/`. No changes to `core/` or `components/`.
