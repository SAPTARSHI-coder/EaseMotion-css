# ease-date-range-picker – Date Range Selection Component

A styled date range picker with two date inputs and a colored selection bar that animates into view when both dates are chosen. Minimal JavaScript is used only to detect when both inputs are valid; the animation itself is pure CSS.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16, ease-mx-auto, ease-gap-4, ease-block, ease-mb-1
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-font-semibold, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works

- Two <input type="date"> fields are styled with borders and focus rings.
- A small JavaScript function checks if both fields have valid dates and toggles the class
  ange-selected on the wrapper.
- The .range-highlight element uses a ransform: scaleX transition to expand from left to right, providing visual feedback.
- The animation respects prefers-reduced-motion.

## How to use

1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
