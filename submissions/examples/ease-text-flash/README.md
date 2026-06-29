# ease-text-flash – Text Color Flash

A one‑shot text color flash for emphasis. The text briefly changes to a highlight color and then returns to its original color.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-2xl, ease-font-semibold, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-6, ease-mt-8
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The text element uses the class lash-text and a custom property --ease-text-flash-color to define the flash color (default orange).
- When the class lash is added (via button click), a CSS keyframe 	ext-flash changes the text color to the flash color and then back to the original in 0.6 seconds.
- The class is removed and re‑added to allow repeating the animation.
- The effect respects prefers-reduced-motion by disabling the animation.

## How to use
1. Add the class lash-text to any text element and set --ease-text-flash-color if you want a custom flash color.
2. Use JavaScript to toggle the lash class on the element to trigger the effect.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
