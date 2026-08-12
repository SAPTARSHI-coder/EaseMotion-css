# Interactive Animation Comparison Showcase

## What does this do?
Displays several animation styles (Fade In, Slide In, Bounce, Zoom, Rotate)
side-by-side in cards for quick visual comparison. Hovering each card
triggers its respective animation.

## How is it used?

```html
<div class="ease-showcase-grid">
  <div class="ease-showcase-card">
    <h4>Fade In</h4>
    <div class="ease-showcase-box ease-fade-in"></div>
  </div>
  <div class="ease-showcase-card">
    <h4>Slide In</h4>
    <div class="ease-showcase-box ease-slide-in"></div>
  </div>
  <!-- ...Bounce, Zoom, Rotate similarly -->
</div>
```

## Why is it useful?
Makes animation discovery easier, improves developer experience, and
provides a practical, interactive demonstration of available animation
options. Pure CSS, no JS required, with full prefers-reduced-motion support.