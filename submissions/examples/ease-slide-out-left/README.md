# ease-slide-out-left – Slide Out Left Exit

A simple exit animation: the element slides to the left while fading out. Useful for dismissing items or navigating away.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto, ease-gap-4
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-6, ease-mt-8, ease-p-8
- **Components:** ease-card, ease-btn, ease-btn-primary, ease-btn-secondary
- **Hover:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The card starts with 	ransform: translateX(0) and opacity: 1.
- Adding the class .exit triggers a CSS transition that moves the card 40px to the left and fades it out over 0.3s with an ease-in curve.
- A “Reset” button removes the class, bringing the card back instantly.
- The effect respects prefers-reduced-motion by simply hiding the element without sliding.

## How to use
1. Add the class slide-out-card to any dismissible element.
2. Toggle the class exit via JavaScript to animate the exit.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
