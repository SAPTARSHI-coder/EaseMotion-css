# ease-wind-sway

A coordinated multi‑element animation that simulates wind blowing through a row of objects (grass, trees, fabric). Elements sway from side to side with staggered delays, creating a “wave of wind passing through” effect.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-min-h-screen, ease-items-center, ease-justify-center
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-sm, ease-text-gray-500
- **Spacing:** ease-mb-8, ease-mt-6, ease-p-*
- **Animations:** ease-fade-in, ease-delay-500

## How it works
- Each .wind-item is given an nimation-delay via a CSS custom property --delay, set inline on each element.
- The @keyframes wind-sway defines a gentle side‑to‑side rotation with a slight horizontal drift.
- The delays are staggered by 0.1s from left to right, producing a wave pattern.
- The animation respects prefers-reduced-motion and offers a subtle speed‑up on hover.

## How to use
1. Copy demo.html and style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
