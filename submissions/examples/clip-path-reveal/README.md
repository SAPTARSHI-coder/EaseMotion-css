## What

A CSS clip-path image reveal gallery showcasing four distinct reveal animations — circle, polygon, inset, and path — triggered on hover or focus. Each card uses a dark overlay that animates its `clip-path` to progressively unveil the image beneath.

## How

Each `.reveal-overlay` element is positioned absolutely over its image and styled with a unique `clip-path` initial state. On hover or focus-within, the overlay's `clip-path` transitions to a zero-area shape (e.g., `circle(0%)`, `polygon(50% 50% …)`, `inset(50%)`), creating a mask-like reveal. Images also scale up slightly for added depth. The layout uses CSS Grid with `auto-fit` for responsiveness. Respects `prefers-reduced-motion` by disabling transitions and fading the overlay instead.

## Why

Demonstrates the creative potential of the `clip-path` property for image reveals without JavaScript. Each variant (circle, polygon, inset, path) shows a different visual language — circular reveals feel organic, polygons feel geometric, insets feel like expanding borders, and paths offer arbitrary shapes.
