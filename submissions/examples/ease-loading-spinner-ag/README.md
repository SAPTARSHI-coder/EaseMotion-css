# Custom Loading Spinner

A modern, multi-colored loading spinner animation built entirely with CSS.

## Preview

Open `demo.html` in your browser to watch the dual-ring loading animation.

## Implementation Details

- **No JavaScript:** The animation is powered completely by CSS `@keyframes`.
- **CSS Borders:** The colored rings are simply standard CSS `border` properties. By making the base border transparent and only coloring specific sides (e.g., `border-top-color`), we create the broken ring effect.
- **Dual Animation:** The outer `.loader` element spins clockwise, while its `::before` pseudo-element (which forms the inner ring) is positioned absolutely within it and animated to spin counter-clockwise, creating an engaging, complex-looking motion from simple CSS.
