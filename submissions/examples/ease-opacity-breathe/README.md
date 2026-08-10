# ease-opacity-breathe – Subtle Opacity Breath

A gentle, slow opacity oscillation that gives a static element a “living” feel. The opacity smoothly transitions between 1 and 0.85 over a 3.5-second cycle.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-8, ease-p-8
- **Components:** ease-card
- **Effects:** ease-shadow-md
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The element uses a CSS animation opacity-breathe that alternates opacity between 1 and 0.85.
- The animation runs continuously with an ease-in-out timing over 3.5 seconds.
- The effect respects prefers-reduced-motion: the element stays fully opaque when reduced motion is enabled.

## How to use
1. Add the class reathe-box to any container you want to gently pulse.
2. Copy style.css into your project.
3. Ensure the path to easemotion.css is correct.
