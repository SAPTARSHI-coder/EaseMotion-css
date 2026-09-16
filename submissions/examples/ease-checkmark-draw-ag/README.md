# Checkmark Draw Animation (ease-checkmark-draw)

## What does this do?

An SVG checkmark icon that draws its circle border and checkmark line stroke-by-stroke when triggered, then fills and scales up slightly for a satisfying success completion effect.

## How is it used?

Add the SVG structure inside a container. Add the `.success` class to the container or wrapper to trigger the drawing animation:

```html
<div class="success-card success">
  <div class="checkmark-container">
    <svg
      class="checkmark-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
      <path
        class="checkmark-check"
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
    <div class="checkmark-ring"></div>
  </div>
</div>
```

## Why is it useful?

Self-drawing stroke animations are a highly polished, premium way to confirm form submissions, payments, and checkout flows. By keeping it entirely in CSS and hardware-accelerated SVG properties (`stroke-dasharray`/`stroke-dashoffset`), it ensures smooth 60fps performance without main thread blocking.

## Customization

The animation behavior can be fully customized by overriding these CSS variables in your stylesheet or inline:

```css
:root {
  --ease-check-color: #10b981; /* Checkmark & circle color */
  --ease-check-speed-circle: 0.6s; /* Circle draw duration */
  --ease-check-speed-check: 0.3s; /* Check icon draw duration */
  --ease-check-delay-check: 0.5s; /* Delay before check starts */
  --ease-check-delay-fill: 0.8s; /* Delay before solid circle fill */
}
```
