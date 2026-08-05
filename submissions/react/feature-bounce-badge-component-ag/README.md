# Bounce Badge Component (React)

## Description
The `BounceBadge` is a simple React component for displaying status indicators, tags, or small labels. It features a playful, CSS keyframe-based bounce animation that triggers on hover or keyboard focus, making interactive elements feel more alive and responsive.

## Installation & Usage
Copy `BounceBadge.jsx` and `style.css` into your React project.

```jsx
import React from 'react';
import BounceBadge from './BounceBadge';

function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
      <BounceBadge color="primary">New</BounceBadge>
      <BounceBadge color="success">Completed</BounceBadge>
      <BounceBadge color="warning">Pending</BounceBadge>
      <BounceBadge color="danger">Failed</BounceBadge>
    </div>
  );
}

export default App;
```

## Props
- `children` (ReactNode): The text or icon to display inside the badge.
- `color` (string, optional): Sets the visual theme. Valid values are `'primary'`, `'secondary'`, `'success'`, and `'danger'`. Default is `'primary'`.
- `animate` (boolean, optional): Whether to enable the hover bounce animation. Default is `true`.
- Any standard HTML span attributes (e.g., `id`, `onClick`, `title`) can also be passed and will be applied to the root element.

## How It Works
- The component renders a simple `<span>` styled as a rounded pill.
- If the `animate` prop is true, it appends the `.ease-animate-bounce-hover-ag` class.
- The `.ease-animate-bounce-hover-ag:hover` selector applies a `@keyframes` animation that translates the element upwards (`translateY`) in two shrinking steps, mimicking a bouncing physics effect.
- The `will-change: transform` property is applied to ensure smooth rendering by the browser's compositor.

## Accessibility Considerations
- **Keyboard Navigation:** The bounce animation is also triggered on `:focus-visible`, ensuring users navigating via keyboard get the same interactive feedback as mouse users.
- **Reduced Motion:** The `prefers-reduced-motion: reduce` media query in `style.css` completely disables the keyframe animation. Instead, it applies a subtle `filter: brightness(0.95)` fallback, providing visual feedback without the jarring motion.
