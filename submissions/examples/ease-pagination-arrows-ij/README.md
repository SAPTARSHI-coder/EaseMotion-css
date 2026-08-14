# Pagination Arrows

This submission implements a pagination component with animated arrow buttons, slide-based page content transitions, active page scale highlighting, disabled edge states, and a configurable page size selector.

## Features

- **Animated Arrow Buttons**: Previous / Next buttons include CSS arrow icons that shift on hover. Buttons respond with background, colour, and transform transitions on hover, active, and disabled states.
- **Slide Page Transitions**: Page content animates in from the left or right depending on navigation direction, using CSS `@keyframes` with opacity and translate transforms.
- **Active Page Scale Highlight**: The current page number receives a scale-up effect with a coloured background and box shadow glow.
- **Disabled Edge States**: The Previous button disables on the first page; the Next button disables on the last page, with reduced opacity and `not-allowed` cursor.
- **Page Size Selector**: A dropdown lets users change the number of items per page, dynamically recalculating the total page count and resetting to page 1.
- **Reduced Motion Respect**: The `prefers-reduced-motion` media query disables all component transitions and animations.

## Verification Steps

1. Open `demo.html` in a browser.
2. Click the **Next** button and observe the page content slide in from the right.
3. Click the **Prev** button and observe the content slide in from the left.
4. Verify the Previous button is disabled on page 1 and the Next button is disabled on the last page.
5. Click page number buttons directly to jump; observe the active page scale highlight.
6. Change the **Items per page** dropdown — verify the pagination recalculates and resets to page 1.
7. Hover over the arrow buttons and verify the arrow icons shift directionally.
8. Enable `prefers-reduced-motion: reduce` in your browser DevTools and confirm all animations are disabled.
