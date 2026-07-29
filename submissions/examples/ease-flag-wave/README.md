# ease-flag-wave – Waving Flag Distortion Effect

A CSS‑only flag‑waving animation that mimics fabric movement using skewY and scaleX oscillations.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-2, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The .flag container applies a @keyframes flag-wave animation that oscillates skewY between -2deg and 2deg, and scaleX between 0.98 and 1.02.
- The combined transforms create a realistic fabric‑waving illusion.
- Three coloured stripes form a simple banner.
- The animation respects prefers-reduced-motion.

## How to use
1. Copy the .flag structure and the CSS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
