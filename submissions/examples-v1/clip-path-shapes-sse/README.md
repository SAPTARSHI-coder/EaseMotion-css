# Clip-Path Shape Utilities

> Submission for issue [#16546 — feat: add clip-path shape utilities](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/16546)

---

## 1. What does this do?

A collection of **18 reusable utility classes** that apply common geometric `clip-path` shapes (triangle, circle, hexagon, star, heart, arrow, chevron, parallelogram, trapezoid, cross, message bubble, etc.) to any HTML element — with an optional smooth **hover-morph effect** that transitions the shape into a circle.

---

## 2. How is it used?

Just add a shape class to any element. Optionally add `.cp-morph` to enable the smooth hover transition.

```html
<!-- Basic usage -->
<div class="cp-shape cp-hexagon"></div>

<!-- With hover morph effect -->
<div class="cp-shape cp-star cp-morph"></div>

<!-- Circle (no morph needed since it's already circular) -->
<div class="cp-shape cp-circle"></div>
```

### Available shape classes

| Class               | Shape                   |
| ------------------- | ----------------------- |
| `.cp-triangle`      | Triangle pointing up    |
| `.cp-triangle-down` | Triangle pointing down  |
| `.cp-rhombus`       | Diamond / rhombus       |
| `.cp-pentagon`      | 5-sided polygon         |
| `.cp-hexagon`       | 6-sided polygon         |
| `.cp-octagon`       | 8-sided polygon         |
| `.cp-star`          | 5-point star            |
| `.cp-heart`         | Heart shape             |
| `.cp-circle`        | Perfect circle          |
| `.cp-ellipse`       | Ellipse                 |
| `.cp-arrow-right`   | Right-pointing arrow    |
| `.cp-arrow-left`    | Left-pointing arrow     |
| `.cp-chevron-right` | Right chevron           |
| `.cp-parallelogram` | Parallelogram           |
| `.cp-trapezoid`     | Trapezoid               |
| `.cp-cross`         | Plus / cross shape      |
| `.cp-message`       | Speech bubble with tail |
| `.cp-inset`         | Rounded inset window    |

### Optional modifier

| Class       | Effect                                             |
| ----------- | -------------------------------------------------- |
| `.cp-morph` | Smoothly morphs the element into a circle on hover |

---

## 3. Why is it useful?

Clip-path shapes are a powerful but verbose CSS feature — most developers end up copy-pasting long `polygon(...)` coordinates from blog posts every time they need a basic shape. This utility set solves that by:

- **🚀 Zero boilerplate** — drop in one class instead of writing 8+ polygon coordinates.
- **🎨 Animation-friendly** — every shape includes a smooth `cubic-bezier` transition for `clip-path`, perfect for hover and entry animations.
- **♿ Accessible** — respects `prefers-reduced-motion` so motion-sensitive users aren't affected.
- **🧩 Composable** — works with any background, gradient, image, or content. Pair it with EaseMotion CSS hover effects, scroll reveals, or cursor interactions.
- **⚡ Pure CSS** — no JavaScript, no SVG, no dependencies. Works in every modern browser.

This fits EaseMotion CSS's philosophy of **lightweight, declarative, motion-first CSS utilities** that make beautiful UI effects trivial to add.

---

## Preview

Open `demo.html` in any browser to see all 18 shapes in a responsive grid, each with the optional morph-to-circle hover animation.

---

## Author

Submitted by [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)
