# ease-shake-vertical – Vertical Shake

A rapid up-and-down shake animation (translateY only) for emphasis, distinct from the horizontal ease-shake.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-6, ease-mt-8, ease-p-8
- **Components:** ease-card, ease-btn, ease-btn-primary
- **Hover:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The element uses a @keyframes shake-vertical that rapidly oscillates 	ranslateY between positive and negative values.
- The animation plays once for 0.5s when the .shake class is added.
- JavaScript removes and re-adds the class to replay.
- The effect respects prefers-reduced-motion.

## How to use
1. Add the class shake-box to any element.
2. Toggle the shake class via JavaScript to trigger.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
