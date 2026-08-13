# Scroll Progress Bar

Closes #13662

A fixed progress bar at the top of the viewport that fills from left to right as the user scrolls. Uses `animation-timeline: scroll(root)` for the primary implementation with a scroll-event JS fallback for browsers that don't yet support CSS scroll-driven animations.

## Usage

```html
<div class="ease-progress-bar">
  <div class="bar-track">
    <div class="bar-fill js-fallback" id="progressFill"></div>
  </div>
</div>
```

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--ease-progress-height` | `4px` | Height of the progress bar |
