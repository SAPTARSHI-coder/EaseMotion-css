# Scroll-Reveal Animation Demo

A responsive demonstration of scroll-triggered animations using EaseMotion CSS.

## What this demo demonstrates

This example shows how content can smoothly reveal itself when it enters
the viewport while scrolling.

It demonstrates:

- `ease-reveal`
- `ease-fade-in`
- `ease-slide-up`
- `ease-slide-in-left`
- `ease-slide-in-right`
- `ease-zoom-in`
- EaseMotion delay utilities
- Responsive layouts
- Reduced-motion accessibility support

## How to run

No build step is required.

Open `demo.html` directly in a modern web browser.

You can also serve the repository with any local static HTTP server.

## How it works

Add the `ease-reveal` class together with an EaseMotion animation class:

```html
<div class="ease-reveal ease-slide-up">
  Content appears when it enters the viewport.
</div>