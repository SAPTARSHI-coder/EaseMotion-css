# Rotate-Fade Tooltip (`ease-rotate-fade-tooltip-ksk`)

1. What does this do?  
An animated tooltip component designed for Gaming Hub layouts. Hovering or focusing the trigger container activates a 3D rotate-fade entrance transition where the tooltip panel rotates along the 3D X-axis (`rotateX(-15deg) scale(0.9)`) to flat alignment using a spring transition (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

2. How is it used?  
Wrap the trigger and `.ease-tooltip` inside `.ease-tooltip-wrapper`. No JS is required for display:

```html
<div class="ease-tooltip-wrapper" tabindex="0" role="button">
  <span>Hover Me</span>
  <div class="ease-tooltip" role="tooltip">
    <h4 class="tooltip-title">Title</h4>
    <p class="tooltip-desc">Description text...</p>
  </div>
</div>
```

Configure parameters using CSS variables:
```css
.ease-tooltip-wrapper {
  --ease-tooltip-duration: 0.35s;
  --ease-tooltip-easing:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-tooltip-rotate:   -15deg;        /* initial 3D X-tilt angle */
  --ease-tooltip-scale:    0.9;           /* initial scale ratio */
}
```

3. Why is it useful?  
Standard tooltips open abruptly. This enhancement animates the card with a 3D space rotation while remaining lightweight, fully keyboard focusable, prefers-reduced-motion compatible, and supports both Light and Dark theme modes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #56492.*
