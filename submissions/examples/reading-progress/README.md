# Reading Progress Bar

A pure CSS scroll-driven reading progress bar utilizing the modern `animation-timeline: scroll()` feature. 

## Features
- **No JavaScript**: Fully driven by CSS natively in the browser.
- **Accessibility**: Respects `prefers-reduced-motion: reduce` by disabling the animation and keeping the bar static but semi-transparent to prevent distractions.
- **Performant**: Uses `transform: scaleX()` and `will-change: transform` to ensure hardware acceleration and buttery-smooth animation off the main thread.

## Usage
Simply add the `<div class="ease-reading-progress"></div>` at the top of your document body. As the user scrolls down the page, the progress bar will seamlessly stretch from left to right.
