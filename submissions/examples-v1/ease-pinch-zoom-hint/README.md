# ease-pinch-zoom-hint – Subtle Pinch‑to‑Zoom Hint

A one‑time, subtle scale pulse (1 → 1.02 → 1) on an image to indicate that it supports pinch‑to‑zoom. Useful for image galleries or product photos on touch devices.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-6, ease-mb-8, ease-mt-6
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The image starts with 	ransform: scale(1).
- When the load event fires, JavaScript adds the class .pinch-hint-play.
- This triggers the pinch-pulse animation, which scales to 1.02 and back over 0.6 seconds.
- The animation plays **only once** (nimation-iteration-count: 1).
- Respects prefers-reduced-motion by suppressing the animation.

## How to use
1. Copy demo.html and style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
