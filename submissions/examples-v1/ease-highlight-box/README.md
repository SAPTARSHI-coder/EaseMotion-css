# ease-highlight-box – Box Highlight Behind Element

A colored highlight rectangle that expands from left to right behind an element, like a marker pen effect. The color is customisable via a CSS custom property.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-inline-block, ease-relative
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-2xl, ease-font-semibold, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-6, ease-mt-8
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works

- The element uses a ::before pseudo‑element for the highlight box, initially scaled to 0 width (scaleX(0)) with ransform-origin: left.
- When the highlight class is added (via button click), the pseudo‑element transitions to scaleX(1), expanding the box behind the text.
- The highlight colour is set by --ease-highlight-bg-color (default: soft yellow #fef08a).
- The box is placed behind the text (z-index: -1).
- The animation respects prefers-reduced-motion.

## How to use

1. Add the class highlight-text to any text element and optionally set --ease-highlight-bg-color for a custom colour.
2. Toggle the highlight class via JavaScript to trigger the effect.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
