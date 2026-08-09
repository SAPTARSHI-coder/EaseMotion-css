# Circular Progress Circle

## 1. What does this do?

This component renders lightweight circular progress indicators using SVG `stroke-dashoffset` path animations, completely driven and animated by pure CSS on page load.

## 2. How is it used?

Structure your HTML using the wrapper container and the SVG path markup, adjusting the `--ease-progress-value` variable:

```html
<div
  class="ease-progress-circle-container"
  style="--ease-progress-value: 75; --ease-progress-size: 130px; --ease-progress-color: #6366f1;"
>
  <svg class="ease-progress-circle" viewBox="0 0 100 100">
    <circle class="ease-progress-circle__bg" cx="50" cy="50" r="40" />
    <circle class="ease-progress-circle__fill" cx="50" cy="50" r="40" />
  </svg>
  <div class="ease-progress-circle__label">
    <span class="ease-progress-circle__percentage">75%</span>
  </div>
</div>
```

### Configurable CSS Variables

- `--ease-progress-value`: Progress value from `0` to `100` (e.g., `75`).
- `--ease-progress-size`: Sizing diameter of the circle container (defaults to `120px`).
- `--ease-progress-color`: Stroke color of the fill ring.
- `--ease-progress-duration`: Duration of the load animation (defaults to `1.2s`).
- `--ease-progress-stroke`: Width of the track and fill stroke (defaults to `8`).

### Modifiers/Variants

- `.ease-progress-circle--glow`: Adds an HSL-colored shadow glow filter to the indicator.
- `.ease-progress-circle--thin`: Configures a thin stroke-width of `4` for minimalist pages.
- `.ease-progress-circle--thick`: Configures a bold stroke-width of `12` for heavy emphasis.

## 3. Why is it useful?

Circular progress indicators are widely used in dashboards, metrics sections, and profile statistics. Using pure CSS and SVGs avoids heavy JavaScript runtimes, keeping the library lightweight, fast to render, and fully compatible with dark mode and reduced-motion preferences.
