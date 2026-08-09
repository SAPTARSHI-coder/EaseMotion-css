# Native CSS Scroll-Driven Progress Bar

## Description
This submission resolves Issue #68977 by implementing a native CSS scroll-driven progress bar that tracks the user's scroll position without requiring any JavaScript.

## Features
- **Zero JavaScript**: Uses the modern CSS `@scroll-timeline` specification (via `animation-timeline: scroll()`).
- **Dynamic Fill**: The progress bar's `transform: scaleX()` value is tied directly to the document root's scroll position, mapping 0% scroll to `scaleX(0)` and 100% scroll to `scaleX(1)`.
- **Performance Optimized**: Hardware accelerated via `transform` properties.
- **Graceful Fallback**: Implements `@supports not (animation-timeline: scroll())` to provide an indeterminate scrolling bar animation for older browsers that do not yet support the specification.

## Usage
Add the `<div class="ease-scroll-progress"></div>` element to your HTML, typically placed as a direct child of the `<body>`. Ensure you include the associated CSS to bind the animation to the document scroll.

```html
<body>
  <div class="ease-scroll-progress"></div>
  
  <header>...</header>
  <main>
    <!-- Long scrolling content here -->
  </main>
</body>
```
