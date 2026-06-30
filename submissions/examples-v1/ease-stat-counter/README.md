# ease-stat-counter – Animated Statistics Counter

A responsive statistics section with large numbers that count up from zero when they scroll into view. Each stat has a label and a suffix (K+, M+, %, etc.).

## EaseMotion classes used
- **Layout:** ease-container, ease-grid, ease-grid-cols-2, ease-md-grid-cols-4, ease-gap-8, ease-mx-auto, ease-py-16
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Each stat card contains a number element with data-target and data-suffix attributes.
- An IntersectionObserver triggers the count‑up animation when the element enters the viewport.
- The number increments from 0 to the target value over 2 seconds using equestAnimationFrame.
- Labels below the numbers describe each statistic.
- The layout uses EaseMotion's grid and spacing utilities for responsiveness.

## How to use
1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Update the data-target and data-suffix attributes for your own statistics.
3. Ensure the path to easemotion.css is correct.
