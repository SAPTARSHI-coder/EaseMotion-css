# ease-jack-in-the-box – Jack‑in‑the‑Box Surprise Pop Entrance

A playful entrance animation where an element springs from a box with a bouncy, spring‑like motion: it starts tiny and rotated, then pops to full size with an elastic easing.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-6, ease-mt-8
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The element starts with 	ransform: scale(0.1) rotate(30deg) and opacity: 0, anchored at the bottom center (	ransform-origin: bottom center).
- When the class .pop is added (via the button click), the lid flips open and the surprise scales up to scale(1) rotate(0) with a spring‑easing function (cubic-bezier(0.68, -0.55, 0.265, 1.55)), creating a bouncy settle.
- The lid uses a separate 3D otateX to simulate the box opening.
- The animation respects prefers-reduced-motion by showing the content immediately without motion.

## How to use
1. Copy the HTML, CSS, and JS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
