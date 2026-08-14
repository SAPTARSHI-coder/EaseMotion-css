# Dot Wave Loader (`ease-dot-wave-dw`)

## Description
This submission adds a **Dot Wave Loader** to EaseMotion CSS.

It displays three animated dots moving in a smooth wave pattern. This is useful for loading states, buttons, skeletons, dashboards, and async UI sections.

## Features
- Pure CSS, zero JavaScript
- Smooth wave-style loading animation
- Customizable dot color, size, and speed
- Accessible with `role="status"` support
- Includes `prefers-reduced-motion` support

## How to Use
Add a container with the class and three `<span>` elements inside:

```html
<div class="ease-dot-wave-dw" role="status" aria-label="Loading">
  <span></span>
  <span></span>
  <span></span>
</div>
```

## Customization
You can change color, size, and speed using CSS variables:

```html
<div
  class="ease-dot-wave-dw"
  role="status"
  aria-label="Loading"
  style="
    --dot-color-dw: #ff4ecd;
    --dot-size-dw: 14px;
    --dot-speed-dw: 0.8s;
  "
>
  <span></span>
  <span></span>
  <span></span>
</div>
```

## Demo
Open `demo.html` directly in your browser. No server is required.

## Checklist
- [x] Code is placed inside `submissions/examples/dot-wave-loader-dw/`
- [x] Includes `demo.html`
- [x] Includes `style.css`
- [x] Includes `README.md`
- [x] Follows unique suffix naming rule
- [x] No changes made to `core/`
- [x] No changes made to `components/`