# ease-loader-pulse-xk

Pulsing loading indicators — circular spinner, bar sweep, and bouncing dots.

## How to use

```html
<link rel="stylesheet" href="style.css" />

<!-- Circular spinner -->
<div class="loader-circle" aria-label="Loading"></div>

<!-- Bar sweep -->
<div class="loader-bar-track" aria-label="Loading">
  <div class="loader-bar"></div>
</div>

<!-- Bouncing dots -->
<div class="loader-dots" aria-label="Loading">
  <span></span><span></span><span></span>
</div>
```

## Customisation

```css
:root {
  --lp-color: #6366f1;    /* accent colour */
  --lp-size: 48px;         /* circle diameter */
  --lp-duration: 1.2s;     /* animation speed */
  --lp-bar-h: 6px;         /* bar track height */
  --lp-bar-w: 200px;       /* bar track width */
}
```

## Accessibility

- `aria-label="Loading"` on every loader
- All animations pause when `prefers-reduced-motion: reduce` is set
