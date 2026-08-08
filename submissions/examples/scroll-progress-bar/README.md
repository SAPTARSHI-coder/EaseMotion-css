# Pure CSS Scroll-Linked Reading Progress Bar

A sticky reading progress bar at the top of the screen that fills up as the user scrolls down the page, utilizing modern CSS Scroll-Driven Animations.

## Why is this useful?

Reading progress bars are very popular on blogs and article pages. Historically, these required JS `window.onscroll` event listeners, which can be bad for performance. With the new CSS `animation-timeline: scroll()` feature, we can tie a CSS animation directly to the scroll position of the document, completely eliminating the need for JS while achieving perfectly smooth 120fps animations.

## Implementation Details

- Creates a fixed `.ease-progress-bar` at the top of the viewport.
- Applies a `transform-origin: 0% 50%` and an animation that scales the element from `scaleX(0)` to `scaleX(1)`.
- Links the animation to the page scroll using `animation-timeline: scroll(root);`.
- Includes graceful fallbacks for browsers that don't yet support scroll-driven animations via `@supports`.

## Features
- **Zero JavaScript**: Pure CSS implementation for maximum performance.
- **Hardware Accelerated**: Transforms are composited for silky smooth 120fps animations.
- **Modern Aesthetics**: Utilizes a vibrant gradient and subtle drop shadow for a premium feel.
