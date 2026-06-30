# Avatar with Presence Pulse Indicator

A CSS-only avatar component that shows a pulsing ring around the profile picture to indicate online/active status. The pulse animation uses a continuous scale and opacity oscillation.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16, ease-gap-10, ease-flex-wrap
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works

- The avatar wrapper is a relative container holding the image and an ::after pseudo‑element for the pulsing ring.
- The ring uses a CSS @keyframes presence-pulse that scales and fades opacity in a continuous loop.
- The online state applies the animation; offline hides the ring entirely.
- The effect respects prefers-reduced-motion.

## How to use

1. Add the classes vatar-wrapper online to your avatar container.
2. Customize the image source and size as needed.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
