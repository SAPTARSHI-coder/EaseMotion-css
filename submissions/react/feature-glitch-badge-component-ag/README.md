# Glitch Badge React Component

## Description
This is a standard React component implementing a notification badge with a cyberpunk-style "Glitch" interactive state. When clicked (or triggered programmatically), the badge distorts, skews, and splits its text colors (red/cyan) rapidly for 0.3 seconds to draw attention.

## Files
- `GlitchBadge.jsx`: A functional React component that manages the glitch state and renders the badge.
- `style.css`: Contains the badge styling and the `@keyframes` for `ease-glitch-badge-bg-ag` and `ease-glitch-badge-text-ag`.

## Usage

```jsx
import React from 'react';
import GlitchBadge from './GlitchBadge';

function App() {
  return (
    <div>
      <GlitchBadge status="error">99+</GlitchBadge>
    </div>
  );
}
```
*Note: The glitch effect can be triggered by clicking the badge, or you could extend the component to expose a `ref` imperative handle to trigger it when data updates.*

## How It Works
1. The component renders a `<span>` styled as a pill badge.
2. When `triggerGlitch` is called, `isGlitching` becomes true, adding `.is-glitching-ag`.
3. The CSS keyframes apply rapid `skew`, `translate`, `hue-rotate`, and `text-shadow` (chromatic aberration) shifts across 5 frames.
4. A `setTimeout` removes the class after 300ms, restoring it to normal.

## Accessibility
- Includes `role="status"` to announce updates to screen readers.
- **Reduced Motion**: Disables the rapid skewing and flashing colors via `@media (prefers-reduced-motion: reduce)`. The glitch is replaced with a safe, subtle pulse effect.
