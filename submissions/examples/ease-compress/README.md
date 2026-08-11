# ease-compress – Compress & Spring Back

A playful squash animation: the element compresses vertically, overshoots slightly, and settles back to its original size.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-6, ease-mt-8, ease-p-8
- **Components:** ease-card, ease-btn, ease-btn-primary
- **Hover:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The element uses a @keyframes compress-spring animation that goes from scaleY(1) down to scaleY(0.6), overshoots to scaleY(1.1), and settles at scaleY(1).
- The animation is triggered by adding the compress class via JavaScript.
- The class can be removed and re‑added to replay.
- Respects prefers-reduced-motion.

## How to use
1. Add the class compress-box to any element you want to squash.
2. Toggle the compress class to trigger the animation.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
