# CSS Floating Orbit Tooltip (Minimalist Tech Aesthetics)

This example demonstrates a purely CSS-animated Tooltip with a smooth Floating Orbit interaction transition. The design is strictly tailored for **Minimalist Tech** and developer-oriented interfaces—featuring high-contrast monochromes, sharp geometric borders, monospace typography, and a brutalist solid shadow aesthetic.

It natively integrates with the **EaseMotion CSS framework** by leveraging its core design tokens, variables, and animations.

## Features
- **EaseMotion Integration**: Built strictly using `var(--ease-*)` variables for colors, typography, sizing, spacing, and transition speeds.
- **EaseMotion Keyframes**: Utilizes EaseMotion's `@keyframes ease-kf-pulse` for the system status indicator.
- **Smooth Floating Orbit**: A custom `@keyframes floatingOrbit` leverages CSS `translate` and `ease-in-out` to seamlessly bob the tooltip in an organic circular motion, contrasting the rigid UI with smooth movement.
- **Minimalist Tech Aesthetics**: Sharp 0px border-radii, monospace typography, high-contrast borders, and grid-like backgrounds typical of dev-tools and terminal interfaces.
- **Modern CSS**: Uses `allow-discrete` and `@starting-style` for graceful enter/exit transitions.

## Custom Properties
```css
:root {
  --orbit-duration: 3.5s;
  --orbit-radius: 4px;
  --tooltip-scale-start: 0.95;
}
```
