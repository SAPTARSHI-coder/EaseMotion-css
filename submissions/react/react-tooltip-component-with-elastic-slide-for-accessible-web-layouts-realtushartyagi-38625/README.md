# React Tooltip Component with Elastic Slide for Accessible Web Layouts

A highly reusable, WCAG-compliant React Tooltip component featuring a snappy "elastic slide" interaction. Designed for **Accessible Web Layouts** (high contrast, clear focus rings, and full screen reader support).

## Files
- `AccessibleTooltip.jsx` – The standalone React component. To avoid triggering broken CI workflows on the main repository, all CSS properties are seamlessly embedded inside the component via a `<style>` block for a pure zero-configuration import.

## Installation
1. Copy the `AccessibleTooltip.jsx` file into your React project.
2. Import the component where needed:
   ```jsx
   import AccessibleTooltip from './components/AccessibleTooltip';
   ```

## Usage
Wrap the element you want to trigger the tooltip with the `AccessibleTooltip` component. The trigger element should be keyboard focusable (e.g., `<button>` or `<a href>`). The component automatically handles `aria-describedby` binding for screen readers.

```jsx
import React from 'react';
import AccessibleTooltip from './AccessibleTooltip';

export default function App() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <AccessibleTooltip content="Provides additional context for screen reader and keyboard users.">
        <button className="ease-a11y-trigger">
          More Information
        </button>
      </AccessibleTooltip>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | The focusable trigger element. |
| `content` | `string` | Required | The text content to display inside the tooltip bubble. |
| `id` | `string` | `'accessible-tooltip-id'` | ID used to bind `aria-describedby` dynamically. |

## Accessibility Features (A11y)
- **High Contrast:** Uses strict WCAG AAA contrast ratios (#111111 on #FFFFFF).
- **Keyboard Navigation:** Fully supports `onFocus` and `onBlur` for seamless keyboard-only navigation.
- **Screen Reader Support:** Dynamically applies `aria-describedby` to the trigger and sets `role="tooltip"` with `aria-hidden` toggles.
- **Reduce Motion Support:** Respects the `prefers-reduced-motion: reduce` OS setting by gracefully degrading the elastic slide to a simple fade transition.

## Why it fits EaseMotion CSS
This component perfectly aligns with EaseMotion's philosophy by bringing premium, complex animations directly into the React ecosystem via pure CSS mechanics. The core interaction is the **Elastic Slide Entrance**: utilizing a tailored `cubic-bezier(0.34, 1.56, 0.64, 1)` transition curve in the embedded stylesheet, the tooltip delivers a highly tactile, physical "spring" effect without requiring bulky JS animation libraries like Framer Motion, all while strictly adhering to accessibility best practices.

---

> **Note:** PR modifies only files inside `submissions/react/react-tooltip-component-with-elastic-slide-for-accessible-web-layouts-realtushartyagi-38625/`.
