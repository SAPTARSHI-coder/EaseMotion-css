# ease-pop-in – Pop In Entrance

A playful entrance animation where an element scales up from nothing with a slight overshoot, then settles to its final size, giving a spring‑like pop effect.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-6, ease-mt-8, ease-p-8
- **Components:** ease-card, ease-btn, ease-btn-primary
- **Hover:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The element starts with 	ransform: scale(0) and opacity: 0.
- When the class pop is added, a @keyframes pop-in-overshoot plays: the element scales up to 1.1 (overshoot) and then eases back to 1, while opacity goes from 0 to 1.
- The animation is triggered via JavaScript (class toggle) and can be replayed.
- Respects prefers-reduced-motion by instantly showing the element at full size.

## How to use
1. Add the class pop-box to any container.
2. Toggle the pop class to trigger the effect.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
