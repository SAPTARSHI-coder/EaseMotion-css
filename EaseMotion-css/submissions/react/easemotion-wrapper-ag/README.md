# EaseMotion React Wrapper Component

A declarative React wrapper component that maps props to EaseMotion utility classes. This eliminates repetitive class concatenation, encapsulates animation logic cleanly within React component structure, and natively respects accessibility rules such as `prefers-reduced-motion`.

## Installation

Add this submission to your project, making sure `EaseMotion.jsx`, `hooks/`, and `utils/` are included.

## API Reference

The `<EaseMotion>` component accepts the following props:

- `animation` (string): Base animation name (e.g., `fade-in`, `slide-up`).
- `duration` (number): Duration in milliseconds.
- `delay` (number): Delay in milliseconds.
- `easing` (string): Easing function (e.g., `ease-in-out`).
- `iteration` (number|string): Number of iterations (e.g., `1`, `infinite`).
- `direction` (string): Animation direction (e.g., `alternate`).
- `hover` (string): Hover animation (e.g., `pulse`, `lift`).
- `focus` (string): Focus animation.
- `isUnmounting` (boolean): Flag to trigger an unmount sequence.
- `unmountAnimation` (string): Animation to use when unmounting.
- `className` (string): Custom utility or CSS classes.

## Usage Example

```jsx
import { EaseMotion } from './EaseMotion';

function MyCard() {
  return (
    <EaseMotion
      animation="slide-up"
      duration={500}
      delay={150}
      hover="lift"
      iteration={1}
    >
      <div className="card">
        <h2>Animated Component</h2>
      </div>
    </EaseMotion>
  );
}
```

## Accessibility

This component uses the `useReducedMotion` hook. If `@media (prefers-reduced-motion: reduce)` is detected, the wrapper automatically disables animation class generation while keeping the component structure perfectly intact.

## Browser Compatibility

Compatible with all modern browsers including Chrome, Firefox, Safari, and Edge.

## Limitations & Future Improvements

- Unmount handling currently depends on `setTimeout` matching the duration prop. A more robust solution for future iterations would involve observing `animationend` events dynamically.
- Integration with external routing transitions like React Router `useLocation` hooks for page-level transitions.
