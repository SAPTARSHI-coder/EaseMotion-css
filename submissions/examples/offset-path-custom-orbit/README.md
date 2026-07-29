# `offset-path` Custom Orbital Spinners

## What does this do?

Demonstrates three loading spinners where dots travel along non-circular SVG paths via `offset-path: path()`.

## How is it used?

```css
@keyframes follow-path {
  from { offset-distance: 0%; }
  to   { offset-distance: 100%; }
}

.orbit-dot {
  /* An infinity symbol path */
  offset-path: path("M 100,100 C 100,100 100,50 150,50 C 200,50 200,150 150,150 C 100,150 100,50 50,50 C 0,50 0,150 50,150 C 100,150 100,100 100,100 Z");
  animation: follow-path 3s linear infinite;
}
```

## Why is it useful?

Most CSS "orbital" loaders use the `transform: rotate()` hack combined with an offset `transform-origin` to spin dots around a center point. However, this technique *only* works for perfect circles. The `offset-path` (CSS Motion Path) specification allows you to send an HTML element along any vector path imaginable. This submission includes a figure-eight, a sharp-cornered pentagon (using `offset-rotate: auto` so the elements face their direction of travel), and an ellipse demonstrating non-linear speed via `ease-in-out`.
