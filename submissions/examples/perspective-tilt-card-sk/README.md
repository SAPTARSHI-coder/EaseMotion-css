# Pure CSS Perspective Tilt Card (No JS)

## What does this do?
A 3D tilt card with two variants: a CSS-only fixed-angle tilt on hover, and a mouse-tracked variant where JS sets CSS custom properties (`--tilt-x`, `--tilt-y`) that drive the `rotateX/Y` transform — keeping all visual logic in CSS.

## How is it used?

```html
<!-- CSS-only variant (zero JS) -->
<div class="tilt-scene">
  <div class="tilt-card tilt-card--css-only">
    <div class="tilt-card__shine"></div>
    <div class="tilt-card__body">
      <h3 class="tilt-card__title">Title</h3>
      <p class="tilt-card__body-text">Content</p>
    </div>
  </div>
</div>

<!-- Mouse-tracked variant (JS sets CSS vars only) -->
<div class="tilt-scene">
  <div class="tilt-card" id="my-card">
    <div class="tilt-card__shine"></div>
    <div class="tilt-card__body">
      <div class="tilt-card__float">Content floats in Z-space</div>
    </div>
  </div>
</div>
```

```js
// Minimal JS — only sets CSS custom properties
card.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = card.getBoundingClientRect();
  card.style.setProperty('--tilt-x', ((0.5 - (e.clientY - top) / height) * 30).toFixed(2));
  card.style.setProperty('--tilt-y', (((e.clientX - left) / width - 0.5) * 30).toFixed(2));
});
```

## Why is it useful?
The CSS-only variant works with zero JS using `perspective()` in the transform. The mouse-tracked variant keeps all visual rules in CSS — JS only updates two numbers. `transform-style: preserve-3d` and `translateZ` on inner elements create depth layering. The gloss overlay uses a `radial-gradient` following the mouse via CSS custom properties. Respects `prefers-reduced-motion`.
