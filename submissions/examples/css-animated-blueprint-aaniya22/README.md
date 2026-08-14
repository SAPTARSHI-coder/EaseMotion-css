# css-animated-blueprint-aaniya22
Pure CSS animated blueprint — technical drawing lines that sketch themselves into view using `stroke-dasharray`/`stroke-dashoffset`, like a blueprint being drawn by hand. No JavaScript required.

## How to use
```html
<div class="ease-blueprint-aaniya22">
  <svg class="ease-blueprint-svg-aaniya22" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect class="ease-blueprint-line-aaniya22 ease-blueprint-delay1-aaniya22" x="40" y="40" width="150" height="100" fill="none" />
    <line class="ease-blueprint-line-aaniya22 ease-blueprint-delay2-aaniya22" x1="190" y1="60" x2="250" y2="30" />
    <line class="ease-blueprint-line-aaniya22 ease-blueprint-delay2-aaniya22" x1="190" y1="140" x2="250" y2="110" />
    <line class="ease-blueprint-line-aaniya22 ease-blueprint-delay3-aaniya22" x1="250" y1="30" x2="250" y2="110" />
    <circle class="ease-blueprint-line-aaniya22 ease-blueprint-delay4-aaniya22" cx="115" cy="90" r="35" fill="none" />
  </svg>
</div>
```

Each shape's `stroke-dasharray`/`stroke-dashoffset` is animated on a staggered delay so lines appear to draw themselves in sequence, on a grid-paper blueprint background. Respects `prefers-reduced-motion` by showing the fully-drawn state with no animation.
