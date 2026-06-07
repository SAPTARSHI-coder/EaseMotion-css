# Animation: Parallax Tilt Effect

## What does this do?

A pure CSS 3D tilt interaction for cards. Hovering over any corner triggers a perspective rotation and shimmer highlight with no JavaScript.

---

## How is it used?

Wrap your card content in `.em-tilt-wrapper` and place the four invisible quadrant triggers before `.em-tilt-transform`:

```html
<div class="em-tilt-wrapper">
  <div class="em-tilt-card">

    <div class="em-tilt-quadrant em-tilt-quadrant--tl" aria-hidden="true"></div>
    <div class="em-tilt-quadrant em-tilt-quadrant--tr" aria-hidden="true"></div>
    <div class="em-tilt-quadrant em-tilt-quadrant--bl" aria-hidden="true"></div>
    <div class="em-tilt-quadrant em-tilt-quadrant--br" aria-hidden="true"></div>

    <div class="em-tilt-transform">
      <div class="em-tilt-shimmer" aria-hidden="true"></div>
      <!-- your card content here -->
    </div>

  </div>
</div>
```

---

## Why is it useful?

Tilt-on-hover is a common premium UI pattern seen in portfolio and product cards. This implementation uses only CSS `perspective`, `transform-style: preserve-3d`, and sibling selectors — no JavaScript, no libraries, mobile-safe (tilt disables on touch screens via media query).