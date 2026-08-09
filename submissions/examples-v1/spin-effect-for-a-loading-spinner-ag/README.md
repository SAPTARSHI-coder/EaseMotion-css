# Spin Effect for a Loading Spinner

## What does this example do?
This example demonstrates a classic circular loading spinner. It uses a CSS `@keyframes` animation to continuously rotate a circular `<div>` element that has a multi-colored border, creating the illusion of a spinning wheel. This visually indicates to the user that a background process (like fetching data) is currently running.

## How is it used?
Place a container with `role="status"` in your DOM where the loading state should appear. Inside, include an empty `<div>` with the `.ease-spin-spinner` utility class, and optionally some accompanying text.

```html
<div class="loading-container" role="status" aria-label="Loading data">
    <div class="ease-spin-spinner"></div>
    <span class="loading-text">Loading...</span>
</div>
```

The `.ease-spin-spinner` class styles the element as a circle (`border-radius: 50%`) with a distinct colored top and right border. It then applies an infinitely looping linear rotation animation.

## Why is it useful?
Loading spinners are universally recognized indicators of background activity. Rather than relying on heavy GIF images or external SVG libraries, a pure CSS spinner is incredibly lightweight, resolution-independent, and easily customizable via CSS variables or standard styling.

This implementation is:
- **Lightweight**: Pure CSS, requiring zero JavaScript or image assets.
- **Accessible**: Uses `role="status"` and `aria-label` to ensure screen readers announce the loading state. Crucially, it includes a `@media (prefers-reduced-motion: reduce)` media query that disables the continuous spinning animation for users sensitive to motion, falling back to a static visual indicator.
- **Performant**: Uses a hardware-accelerated `transform: rotate()` animation combined with `will-change: transform` to ensure the animation runs smoothly on the GPU without triggering browser repaints.
