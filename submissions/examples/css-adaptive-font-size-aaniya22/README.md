# css-adaptive-font-size-aaniya22
Pure CSS adaptive font size — typography that scales smoothly between a minimum and maximum size as the viewport changes, using `clamp()`. No JavaScript, no media query breakpoints required.

## How to use
```html
<div class="ease-adaptive-font-aaniya22">
  <h1 class="ease-adaptive-heading-aaniya22">Adaptive Heading</h1>
  <h2 class="ease-adaptive-subheading-aaniya22">Adaptive Subheading</h2>
  <p class="ease-adaptive-body-aaniya22">
    This paragraph's font size scales smoothly between a minimum and
    maximum value as the viewport width changes, using CSS clamp().
  </p>
</div>
```

Each text element uses `clamp(min, preferred, max)` with a viewport-relative preferred value, so font sizes grow and shrink fluidly with the browser width instead of jumping at fixed breakpoints. Purely CSS, no JavaScript resize listeners needed.
