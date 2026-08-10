# Wishlist Heart

1. What does this do? A heart-shaped wishlist toggle that transitions from an outline to a filled state with a springy pop scale animation on click. The heart is built entirely with CSS using a rotated square and two pseudo-element circles.

2. How is it used? Click the button to toggle `.filled` class on `.heart-shape`. The fill transition is driven by CSS `transition` on `background`/`border-color`, and the pop effect uses `@keyframes heart-pop` with `scale(1.3)` at peak. A small JS snippet handles the toggle.

3. Why is it useful? Wishlist/favorite toggles are a core e-commerce and social pattern. The outline-to-filled + pop animation gives satisfying microfeedback, encouraging engagement with the wishlist feature.
