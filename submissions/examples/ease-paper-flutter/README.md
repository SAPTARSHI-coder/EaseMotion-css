# ease-paper-flutter – Paper Flutter Falling Animation

A realistic paper-like flutter falling effect using otateX, otateY, and 	ranslateY with staggered timing. Each sheet twists and turns as it drifts downward, mimicking real paper physics.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-900
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-white, ease-text-gray-400, ease-text-sm, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8, ease-mb-10
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- Clicking "Drop Paper" injects a coloured <div> into the fall zone.
- Each sheet is randomly positioned, sized, and given a fall duration (3–5s).
- The @keyframes paper-fall animates 	op from -60px to 420px while oscillating otateX, otateY, and otateZ at different stages, creating a fluttering effect.
- Sheets are removed automatically when the animation ends.
- Respects prefers-reduced-motion by freezing the sheet in place.

## How to use
1. Copy demo.html and style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
