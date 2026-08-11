# CSS Floating Orbit Tooltip (Product Catalog Aesthetics)

This example demonstrates how to create a purely CSS-animated Tooltip featuring a smooth Floating Orbit interaction transition, styled to complement modern Product Catalog and E-commerce interfaces. 

It natively integrates with the **EaseMotion CSS framework** by leveraging its core design tokens, variables, and keyframe animations.

## Features
- **EaseMotion Integration**: Built strictly using `var(--ease-*)` variables for colors, typography, sizing, spacing, and transition speeds.
- **EaseMotion Keyframes**: Utilizes EaseMotion's `@keyframes ease-kf-pulse-border-emphasis` for an engaging hotspot indicator.
- **Floating Orbit**: A custom `@keyframes floatingOrbit` leverages CSS `translate` to seamlessly bob the tooltip in an organic circular motion.
- **Product Catalog Aesthetics**: Clean styling, subtle shadows, and a bright layout typical of e-commerce platforms.
- **Modern CSS**: Uses `allow-discrete` and `@starting-style` for graceful enter/exit transitions.

## Custom Properties
```css
:root {
  --orbit-duration: 4.5s;
  --orbit-radius: 6px;
  --tooltip-scale-start: 0.9;
}
```
