# ease-progress-stripe – Animated Striped Progress Bar

A Bootstrap‑style animated progress bar with diagonal moving stripes that indicate active processing state.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-max-w-lg
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-2, ease-mb-4, ease-mb-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The progress bar uses epeating-linear-gradient to create diagonal stripes.
- ackground-position animates from right to left via @keyframes progress-stripe-move, creating a continuous moving‑stripe effect.
- The bar width (60%) can be dynamically updated to reflect progress.
- The animation respects prefers-reduced-motion.

## How to use
1. Copy the .progress-wrapper and .progress-bar elements into your project.
2. Adjust the width of .progress-bar to reflect actual progress.
3. Ensure the path to easemotion.css is correct.
