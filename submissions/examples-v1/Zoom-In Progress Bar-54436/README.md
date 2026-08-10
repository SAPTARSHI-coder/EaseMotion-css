# ease-zoom-in-progress-bar

Pure CSS progress bars where the fill animates in on load and the percentage label zooms in with a small bounce. Zero JavaScript.

Resolves #54436.

## What it does

A set of labeled progress bars. On page load, each bar's fill grows from 0% to its target width while the percentage number scales down from larger-than-life into place — a "zoom-in" reveal, staggered per bar via `animation-delay`.

## How to use it

Copy `style.css` into your project, then mark up a bar like this:

```html
<div class="ease-progress-zoom" style="--ease-progress-duration: 1.2s; --ease-progress-easing: ease; --ease-progress-zoom-scale: 1.4;">
  <div class="ease-progress-zoom__item" style="--ease-progress-value: 72%;">
    <div class="ease-progress-zoom__label">
      <span>Storage used</span>
      <span class="ease-progress-zoom__pct">72%</span>
    </div>
    <div class="ease-progress-zoom__track" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" aria-label="Storage used">
      <div class="ease-progress-zoom__fill"></div>
    </div>
  </div>
</div>
```

Add more `.ease-progress-zoom__item` blocks for additional bars, giving each an `animation-delay` inline (e.g. `0.15s`, `0.3s`) to stagger them. Open `demo.html` directly in a browser — no build step or server needed.

### Customizing

| Property | Default | Set on | Effect |
|---|---|---|---|
| `--ease-progress-duration` | `1.2s` | `.ease-progress-zoom` | Length of the fill + label animation |
| `--ease-progress-easing` | `ease` | `.ease-progress-zoom` | Timing function for both animations |
| `--ease-progress-zoom-scale` | `1.4` | `.ease-progress-zoom` | Starting scale of the percentage label |
| `--ease-progress-value` | `0%` | each `.ease-progress-zoom__item` | Target fill width — **required** per bar |

## Why it fits EaseMotion CSS

- **No JavaScript**: driven entirely by `@keyframes` and CSS custom properties — the fill width and label scale are both pure CSS animations that run automatically on load.
- **Accessible**: each track carries `role="progressbar"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax` and a descriptive `aria-label`.
- **Respects `prefers-reduced-motion`**: animations are disabled and each bar jumps straight to its final state.
- **Responsive**: tracks grow slightly thicker on small viewports for touch legibility; layout is a simple flex column that reflows naturally at any width.

## Browsers tested

Chrome · Firefox · Edge