# ease-quantity-selector – Product Quantity Selector

A product quantity selector with animated +/− buttons and a number display that pops on change. Min/max clamping (1‑99) and press feedback included.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16, ease-mx-auto, ease-gap-0
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-xl, ease-font-semibold, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8, ease-px-4
- **Components:** ease-btn, ease-btn-primary, ease-btn-sm
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Buttons increment/decrement a JavaScript variable within min/max bounds.
- The number display gets a quick CSS pop animation on each change.
- Buttons have a subtle scale‑down on :active for haptic‑like feedback.
- The UI uses EaseMotion’s ease-btn-sm for compact button sizing.
- Reduced‑motion users see static updates without animation.

## How to use
1. Copy the HTML structure, CSS, and JS into your project.
2. Customize the min/max values as needed.
3. Ensure the path to easemotion.css is correct.
