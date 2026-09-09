# Flip Turn Page Book

1. What does this do? Provides a core SCSS animation mixin pattern for EaseMotion. It animates an element flipping over like a page turning in a book using `rotateY` on a custom `transform-origin`.
2. How is it used? Apply the `.ease-anim-flip-turn-page-book` class to an element. Important: The animated element must have `transform-origin: left center` (or right, depending on the flip direction), and its parent must have a `perspective` value applied (e.g., `1200px`) for the 3D depth to render. The maintainer will integrate this code directly into `core/animations.css`.
3. Why is it useful? Page turn animations are highly requested for digital brochures, portfolios, and storytelling UIs. This provides a highly performant, 60fps hardware-accelerated 3D flip over the Y-axis with an accompanying opacity fade, complete with a fallback for users who prefer reduced motion.
