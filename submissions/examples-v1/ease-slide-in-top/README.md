# ease-slide-in-top – Slide In From Top

An entrance animation where the element slides down from above while fading in, perfect for modals, notifications, or hero content.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-6, ease-mt-8, ease-p-8
- **Components:** ease-card, ease-btn, ease-btn-primary
- **Hover:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The element starts with 	ranslateY(-30px) and opacity: 0.
- Adding the slide class transitions the element to 	ranslateY(0) and opacity: 1 over 0.4s with an ease-out curve.
- The slide distance is customisable via the --ease-slide-distance variable.
- JavaScript reset allows replaying the animation.
- Respects prefers-reduced-motion.

## How to use
1. Add the class slide-in-top-card to any element you want to animate.
2. Toggle the slide class to trigger the entrance.
3. Optionally override --ease-slide-distance to change how far it drops.
4. Copy style.css into your project and ensure the path to easemotion.css is correct.
