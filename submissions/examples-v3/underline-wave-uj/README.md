# Underline Wave Hover

## What does this do?

It creates an animated underline wave that sweeps from left to right on hover and retracts to the right on mouse leave.

## How is it used?

Apply the `underline-wave-uj` class to your link elements:

```html
<a href="#" class="underline-wave-uj">
  Discover More
</a>
```

You can customize underline wave variables directly in your CSS:
- `--underline-wave-height`: Thickness of the line (defaults to `2px`).
- `--underline-wave-color`: Custom line color (defaults to `currentColor`).

## Why is this useful?

This micro-interaction enhances navigation links and text citations without shifting surrounding document layouts. By animating compositor-only properties (`transform: scaleX()`), it remains extremely lightweight, executes efficiently on mobile browsers, and degrades to a clean fallback when users choose a reduced motion environment.
