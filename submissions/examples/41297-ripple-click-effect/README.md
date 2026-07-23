# Ripple Click Effect

1. **What does this do?** Creates a circular ripple wave that expands outward from the exact point a user clicks or taps a button, then fades out.
2. **How is it used?** Apply the `.ripple-btn` class to any button or clickable element. A small inline script listens for clicks, calculates the click position relative to the element, and injects a `.ripple-span` element at that point to animate the ripple.
3. **Why is it useful?** EaseMotion CSS currently has hover-based feedback (grow, shimmer) but nothing for the actual click/tap moment, which matters most on touch devices where hover doesn't apply. This resolves issue #41297 by giving buttons tactile visual feedback on press. The effect respects `prefers-reduced-motion` by disabling the animation for users who request reduced motion.
