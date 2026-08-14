# ease-strikethru – Strikethrough Draw

A strikethrough line that draws across the element from left to right when triggered. Uses a CSS custom property for the line color.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-2xl, ease-font-semibold, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-6, ease-mb-8, ease-mt-4, ease-mt-8
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The text element has an ::after pseudo‑element that acts as the strikethrough line, initially with width: 0.
- The line color is controlled by --ease-strikethru-color (default red).
- When the class strike is added (via button click), the pseudo‑element's width transitions to 100%, drawing the line across the text.
- The class can be removed and re‑added to replay the animation.
- The effect respects prefers-reduced-motion.

## How to use
1. Add the class strikethru-text to any text element and set --ease-strikethru-color for a custom line color.
2. Trigger the animation by toggling the strike class via JavaScript.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
