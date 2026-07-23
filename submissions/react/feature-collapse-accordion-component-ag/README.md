# Collapse Accordion React Component

## Description
This is a standard React component implementing an accessible accordion. It uses modern CSS Grid techniques (`grid-template-rows: 0fr` to `1fr`) to smoothly animate the opening (entrance) and closing (collapse) of the content area without requiring JavaScript to calculate explicit pixel heights.

## Files
- `CollapseAccordion.jsx`: A functional React component that manages the open/closed state and provides appropriate ARIA attributes for screen readers.
- `style.css`: Contains the structural CSS, relying on a CSS Grid transition to smoothly expand and collapse the content container.

## Usage

```jsx
import React from 'react';
import CollapseAccordion from './CollapseAccordion';

function App() {
  return (
    <CollapseAccordion title="What is EaseMotion?">
      <p>EaseMotion is a comprehensive library of UI animations...</p>
    </CollapseAccordion>
  );
}
```

## How It Works
1. The component maintains an `isOpen` boolean state.
2. The content wrapper (`.accordion-content-grid-ag`) is styled with `display: grid` and `grid-template-rows: 0fr`. 
3. When `isOpen` is true, the class `.is-open-ag` is applied, changing `grid-template-rows` to `1fr`.
4. Modern browsers support transitioning between `0fr` and `1fr`, providing a completely smooth height animation using purely CSS.
5. The inner content wrapper has `overflow: hidden` to prevent content from bleeding outside during the transition.

## Accessibility
- The header is a `<button>` inside an `<h3>`.
- The button utilizes `aria-expanded="true/false"` to indicate state.
- `aria-controls` links the button to the region it toggles.
- The content container uses `role="region"`.
- **Reduced Motion**: Disables the grid and opacity transitions via `@media (prefers-reduced-motion: reduce)`, falling back to an instant open/close toggle to respect user settings.
