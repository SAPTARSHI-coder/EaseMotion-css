# ease-size-selector – Animated Size/Variant Selector

Product size selector buttons with smooth selected‑state transitions. Uses a CSS‑only radio‑input technique — no JavaScript required.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-2, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Radio inputs are visually hidden, and their <label> elements are styled as buttons.
- The :checked pseudo‑class on the hidden radio triggers the selected styling on the adjacent label.
- Transitions on background, border, color, box-shadow, and transform create a smooth animation.
- Hover and focus‑visible states are included for accessibility.
- Respects prefers-reduced-motion.

## How to use
1. Copy the radio + label markup and the CSS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
