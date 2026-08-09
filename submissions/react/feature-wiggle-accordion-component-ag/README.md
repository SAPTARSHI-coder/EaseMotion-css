# Wiggle Accordion Component (React)

## Description
The `WiggleAccordion` is a React component for building collapsible content sections. It features a modern CSS Grid-based height transition for smooth opening/closing, and it adds a playful "wiggle" animation to the header on hover or keyboard focus to encourage user interaction.

## Installation & Usage
Copy `WiggleAccordion.jsx` and `style.css` into your React project.

```jsx
import React from 'react';
import WiggleAccordion from './WiggleAccordion';

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <WiggleAccordion title="What is EaseMotion CSS?" defaultExpanded={true}>
        <p>EaseMotion CSS is a lightweight animation library designed to help developers quickly build polished, interactive interfaces.</p>
      </WiggleAccordion>
      
      <WiggleAccordion title="How do I install it?">
        <p>You can drop the CSS utility classes directly into your project or use the standalone React/Vue components provided in the examples directory.</p>
      </WiggleAccordion>
    </div>
  );
}

export default App;
```

## Props
- `title` (string): The text displayed in the clickable accordion header.
- `children` (ReactNode): The content revealed when the accordion is expanded.
- `defaultExpanded` (boolean, optional): Whether the accordion should be open on initial render. Default is `false`.

## How It Works
- **State Management**: Uses a simple internal `useState` to track whether the accordion is open or closed.
- **Hover Wiggle**: The header button applies the `@keyframes accordionHoverWiggle-ag` animation on `:hover` and `:focus-visible`. This animation combines a slight rotation and horizontal translation to create the wiggle effect.
- **Smooth Height Transition**: Instead of animating `max-height` (which requires hardcoded values and can cause timing issues), it uses the modern CSS Grid trick (`grid-template-rows: 0fr` to `1fr`). This allows the content to smoothly transition to its natural auto height.

## Accessibility Considerations
- **Keyboard Navigation**: The header is a native `<button>` element. Focus styling and the hover animation are applied via `:focus-visible`, ensuring keyboard users get the same interactive feedback as mouse users.
- **ARIA Attributes**: Uses `aria-expanded` on the button and `aria-hidden` on the content wrapper to inform screen readers of the state change.
- **Reduced Motion**: The `prefers-reduced-motion: reduce` media query in `style.css` disables the wiggle hover animation, the chevron rotation, and the height transition, ensuring instantaneous state changes for users sensitive to motion.
