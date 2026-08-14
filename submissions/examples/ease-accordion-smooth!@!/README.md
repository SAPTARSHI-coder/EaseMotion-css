# Smooth Pure-CSS Accordion (`ease-accordion-smooth`)

## Overview
This submission introduces a smooth, animated accordion component built entirely with CSS. It solves the classic CSS problem of "animating to `height: auto`" by utilizing the modern `grid-template-rows` technique, eliminating the need for JavaScript height calculations or messy max-height hacks.

## Features
- **Pure CSS Animation**: Uses `grid-template-rows: 0fr` to `1fr` for a buttery-smooth, dynamic height transition that perfectly fits the content.
- **Zero JavaScript Dependency**: State is managed via the native HTML `<input type="checkbox">` and `:checked` pseudo-class.
- **Accessible**: Includes proper `:focus-visible` outlines for keyboard navigation and a lightweight script in the demo *only* to sync `aria-expanded` for screen readers.
- **Theming Ready**: Leverages `--ease-color-*` CSS variables for seamless integration with the core design token system.
- **Reduced Motion Support**: Gracefully disables transitions for users with `prefers-reduced-motion` enabled.

## Files Included
- `demo.html`: Interactive showcase with multiple accordion items.
- `style.css`: Clean, production-ready CSS using the grid-row animation trick.

## How to Test
1. Ensure you are in the `submissions/examples/ease-accordion-smooth-<your-initials>` directory.
2. Open `demo.html` in any modern web browser.
3. Click the headers to expand/collapse, and use the `Tab` and `Enter`/`Space` keys to verify keyboard accessibility.

## Notes for Maintainer
- This is a prime candidate for the `components/` directory in future releases.
- The `grid-template-rows` trick is widely supported in all modern browsers (Chrome 107+, Firefox 107+, Safari 16.4+).
- Follows all temporary contribution guidelines (self-contained in `submissions/examples/` with a unique identifier suffix).