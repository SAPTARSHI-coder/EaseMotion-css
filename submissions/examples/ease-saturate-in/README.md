# ease-saturate-in – Saturate Into Color

An entrance animation where an element begins completely grayscale and transparent, then transitions to full saturation and opacity over 0.6 seconds.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-max-w-sm, ease-mx-auto
- **Background:** ease-bg-gray-100
- **Components:** ease-card, ease-overflow-hidden
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-6
- **Buttons:** ease-btn, ease-btn-secondary
- **Hover:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The target element starts with ilter: saturate(0) and opacity: 0.
- When the class .animate is added (on page load or button click), it transitions to saturate(1) and opacity: 1 using a 0.6s ease-out.
- The animation respects prefers-reduced-motion by showing the element immediately without motion.

## How to use
1. Add the saturate-box class to any container you want to animate.
2. Use JavaScript to toggle the class .animate when you want the effect to play.
3. Copy the CSS into your project; ensure the path to easemotion.css is correct.
