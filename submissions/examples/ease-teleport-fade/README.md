# ease-teleport-fade – Teleportation Fade & Reform Effect

A sci‑fi teleportation transition: an element dissolves into particles, pauses, then reforms at a new state with a color change.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-900
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-white, ease-text-gray-400, ease-text-sm, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-6, ease-mt-4, ease-mt-6
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- A central orb is displayed.
- On click, JavaScript hides the orb and generates 30 small colored particles at its location.
- Particles burst outward with random angles and distances, fading to zero.
- After a short pause, the orb reappears in a new color and particles implode back into the center.
- All animations are handled by CSS transitions with custom properties for angle and distance.
- The effect respects prefers-reduced-motion.

## How to use
1. Copy demo.html, style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
