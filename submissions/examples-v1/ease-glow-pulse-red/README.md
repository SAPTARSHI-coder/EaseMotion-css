# ease-glow-pulse-red – Red Glow Pulse

A red box‑shadow pulse animation designed for error or alert states. The glow plays three cycles and then stops, drawing immediate attention without being endless.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-8, ease-p-8
- **Components:** ease-card
- **Effects:** ease-shadow-md
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works

- Uses a @keyframes red-glow-pulse that oscillates the ox-shadow between a soft red and a stronger red.
- The animation is limited to 3 iterations, then stops.
- The glow colour is customisable via the --ease-error-glow-color custom property (default:
  gba(239, 68, 68, 0.6)).
- Respects prefers-reduced-motion by showing a static glow.

## How to use

1. Add the class glow-pulse-red to any element you want to draw attention to.
2. Optionally override --ease-error-glow-color with a custom colour.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
