# css-wiggle-snake-loader-aaniya22
Pure CSS wiggle snake loader — a row of glowing dots that bounce in sequence, forming a snake-like wiggle motion. No JavaScript required.

## How to use
```html
<div class="ease-snake-loader-aaniya22" role="status" aria-label="Loading">
  <span class="ease-snake-segment-aaniya22"></span>
  <span class="ease-snake-segment-aaniya22"></span>
  <span class="ease-snake-segment-aaniya22"></span>
  <span class="ease-snake-segment-aaniya22"></span>
  <span class="ease-snake-segment-aaniya22"></span>
  <span class="ease-snake-segment-aaniya22"></span>
</div>
```

Each segment animates with a staggered `animation-delay` to create a wiggling, snake-like wave. `role="status"` and `aria-label="Loading"` announce the loading state to screen readers. Respects `prefers-reduced-motion`.
