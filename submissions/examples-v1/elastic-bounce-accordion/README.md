# Pure CSS Elastic Bounce Accordion (Glassmorphism UI)

A high-performance, responsive UI accordion component created with pure HTML and CSS. It implements an elastic spring-like bounce animation using optimized `cubic-bezier` transitions with zero JavaScript overhead.

## Features

- **Pure CSS Animation Engine:** Leverages a custom `cubic-bezier(0.68, -0.6, 0.32, 1.6)` function to create an organic, bouncy layout transition.
- **Modern Glassmorphic UI:** Styled with deep ambient gradients, backdrop blurs, and translucent border values designed to adapt effortlessly to modern web layouts.
- **Perfect Layout Interpolation:** Combines `grid-template-rows` tracking transitions with hidden wrappers instead of archaic `max-height` hacks, allowing smooth expansion to the exact native content height.
- **Keyboard Accessible:** Includes focus indicators and semantic keyboard event handlers for `Enter` and `Space` activation.

## File Structure

```text
elastic-bounce-accordion/
├── demo.html   # Main structure and accessibility scripts
├── style.css   # Custom properties, glassmorphism design, and bounce mechanics
└── README.md   # Documentation