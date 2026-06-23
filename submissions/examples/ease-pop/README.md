# ease-pop – Quick Pop Scale

A fast, one‑shot attention grabber: the element scales up slightly and snaps back, drawing the user's eye without being obtrusive.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-6, ease-mt-8, ease-p-8
- **Components:** ease-card, ease-btn, ease-btn-primary
- **Hover:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The element uses a @keyframes pop-attention that goes from scale(1) to scale(1.15) (or the value of --ease-pop-amount) and back to scale(1) over 0.3s.
- The animation is triggered by adding the pop class via JavaScript and plays exactly once.
- The class can be removed and re‑added to replay.
- Respects prefers-reduced-motion.

## How to use
1. Add the class pop-card to any element you want to highlight.
2. Toggle the pop class to trigger the effect.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
