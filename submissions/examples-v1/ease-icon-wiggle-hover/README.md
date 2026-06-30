# ease-icon-wiggle-hover – Icon Wiggle on Hover

A playful micro-interaction: an icon wiggles with a quick rotate oscillation when hovered, adding personality to interactive buttons.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-gap-10, ease-flex-wrap
- **Background:** ease-bg-gray-100
- **Components:** ease-card
- **Spacing:** ease-p-4, ease-mt-2, ease-mb-6, ease-mb-8, ease-mt-8
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-font-semibold, ease-text-gray-400
- **Hover Effects:** ease-hover-shadow-lg
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The .wiggle-icon element (emoji or any inline element) rotates back and forth in a short 0.4s burst on hover of its parent container.
- The keyframe wiggle defines a quick sequence of rotations: 0° → 10° → -10° → 6° → 0°.
- A base transition ensures the icon returns smoothly after the animation.
- The animation respects prefers-reduced-motion.

## How to use
1. Copy demo.html and style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
