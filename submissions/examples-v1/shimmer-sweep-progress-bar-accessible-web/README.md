# CSS Shimmer-Sweep Progress Bar — Accessible Web Layout

A pure CSS progress bar where a light shimmer band sweeps across the filled portion on a continuous loop, reinforcing that the process is still active.

## CSS Custom Properties

| Property                          | Default    | Description                    |
|---------------------------------------|--------------|--------------------------------------|
| `--ease-progress-shimmer-duration`  | `1.6s`        | Duration of one shimmer sweep cycle  |
| `--ease-progress-track-bg`          | `#e5e7eb`     | Track background color               |
| `--ease-progress-fill-bg`           | `#1d4ed8`     | Fill bar color                        |
| `--ease-progress-shimmer-color`     | `rgba(255,255,255,0.5)` | Shimmer band color        |
| `--ease-progress-height`            | `20px`        | Bar height                            |
| `--ease-progress-radius`            | `6px`         | Corner radius                         |

## Usage

```html
<div class="ease-progress__track" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" aria-label="Download progress">
  <div class="ease-progress__fill" style="width: 72%;"></div>
</div>
```

## Accessibility

- Uses `role="progressbar"` with full `aria-value*`/`aria-label` attributes.
- Bold 2px border ensures track visibility without relying on color contrast alone.
- `prefers-reduced-motion: reduce` removes the shimmer sweep entirely, leaving a static filled bar.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing/colors via CSS custom properties, matching the framework's zero-JS-overhead, animation-first philosophy.
