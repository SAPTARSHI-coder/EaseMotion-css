# ease-vanish – Shrink to Nothing Exit

A fast, dramatic exit animation: the element scales down to zero while fading out, as if vanishing into thin air.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto, ease-gap-4
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-6, ease-mt-8, ease-p-8
- **Components:** ease-card, ease-btn, ease-btn-primary, ease-btn-secondary
- **Hover:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The element starts at scale(1) and full opacity.
- Adding the class anish triggers a simultaneous transition to scale(0) and opacity: 0 over 0.3s with an ease-in curve.
- The 	ransform-origin is set to the center, so it shrinks toward the middle.
- A "Reset" button removes the class to restore the element.
- The animation respects prefers-reduced-motion.

## How to use
1. Add the class anish-card to any element you want to dismiss.
2. Toggle the anish class via JavaScript to trigger the effect.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
