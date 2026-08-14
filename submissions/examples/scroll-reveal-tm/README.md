# Scroll-reveal entry

1. What does this do? Elements with `reveal-tm` fade and slide up as they enter the viewport, using the CSS `animation-timeline: view()` API.

2. How is it used? Add `reveal-tm` to any block-level element. Modifiers: `rv-slow-tm` (longer travel), `rv-fade-tm` (opacity only, no movement).

3. Why is it useful? It draws the eye down a long page without scroll listeners, IntersectionObserver wiring, or any JavaScript bundle.
