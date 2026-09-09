# ease-desaturate-out – Desaturate and Fade Exit

An exit animation where an element transitions to grayscale and fades out over 0.5 seconds. Gives a "sad" or "deactivated" feel, useful for removing items or indicating a disabled state.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-100
- **Components:** ease-card, ease-overflow-hidden
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-6
- **Buttons:** ease-btn, ease-btn-secondary
- **Hover:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition
- **Interactivity:** ease-cursor-pointer

## How it works
- The element starts with ilter: saturate(1) and opacity: 1.
- When the class .exit is added (by clicking the card), it transitions to saturate(0) and opacity: 0 using a 0.5s ease‑in.
- A "Show Again" button removes the .exit class, bringing the element back to its colorful state.
- The animation respects prefers-reduced-motion.

## How to use
1. Add the class desaturate-box to any container you want to animate.
2. Use JavaScript to toggle the class .exit when you want the element to disappear.
3. Copy the CSS into your project; ensure the path to easemotion.css is correct.
