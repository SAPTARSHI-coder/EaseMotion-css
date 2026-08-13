# Pure CSS Smooth Auto-Height Accordion (#73124)

## 1. What does this do?
This component is a pure CSS FAQ accordion that flawlessly animates dynamic content heights without requiring any JavaScript.

## 2. How is it used?
It binds a hidden `<input type="checkbox">` to a `<label>` element using the native `for` attribute to handle the open/close boolean state.

The key mechanism relies on the CSS Grid `1fr` interpolation technique:
- The content container (`.ease-accordion-content-grid`) is defined as a CSS Grid container with `grid-template-rows: 0fr`.
- When the checkbox is toggled (`:checked`), `grid-template-rows` transitions to `1fr`.
- An inner child container (`.ease-accordion-content-inner`) with `overflow: hidden` allows the grid track to transition smoothly from `0fr` to `1fr`.
- This forces the browser rendering engine to compute the exact `height: auto` pixel value dynamically during the transition.

## 3. Why is it useful?
For years, animating elements to `height: auto` was impossible in standard CSS without resorting to:
- JavaScript-based `scrollHeight` inline style calculations.
- Hardcoded `max-height` hacks (e.g., `max-height: 1000px`), which cause awkward animation delays and destroy easing curve accuracy when content is shorter than the max height.

This native CSS architecture provides buttery smooth 60fps animations with proper GPU acceleration, clean focus accessibility via keyboard navigation (`:focus-visible`), and absolutely zero script execution overhead.
