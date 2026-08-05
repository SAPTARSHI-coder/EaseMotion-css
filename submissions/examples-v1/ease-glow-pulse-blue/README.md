# ease-glow-pulse-blue – Blue Glow Pulse

A continuous blue box‑shadow pulse that draws attention to informational or selected elements. The glow color is customisable via the --ease-info-glow-color CSS custom property.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-8, ease-p-8
- **Components:** ease-card
- **Effects:** ease-shadow-md
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The element uses a @keyframes blue-glow-pulse that alternates the ox-shadow between a smaller and larger blue glow.
- The glow colour is defined by --ease-info-glow-color, which defaults to a soft blue (gba(59, 130, 246, 0.6)).
- The animation runs continuously with ease-in-out timing.
- The effect respects prefers-reduced-motion: the glow remains static when reduced motion is enabled.

## How to use
1. Add the class glow-pulse to any container to apply the blue pulse glow.
2. Optionally override --ease-info-glow-color to change the glow colour.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
