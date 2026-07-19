# Component: ease-progress-circle

This submission implements the `ease-progress-circle` component for GSSOC issue **#44675**.

## Description

Animated circular progress indicator using SVG `stroke-dashoffset` animation technique. Perfect for dashboards, skill sections, and profile pages.

## Usage

```html
<svg class="ease-progress-circle" viewBox="0 0 100 100" style="--ease-progress-value: 75;">
  <circle class="progress-bg" cx="50" cy="50" r="42" />
  <circle class="progress-fill" cx="50" cy="50" r="42" />
</svg>
```

### CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-progress-value` | `75` | Progress percentage (0-100) |
| `--ease-progress-color` | `#3b82f6` | Progress bar color |
| `--ease-progress-size` | `120px` | Circle diameter |
| `--ease-progress-duration` | `1.5s` | Animation duration |

### Size Variants

```html
<svg class="ease-progress-circle ease-progress-lg" ...>
<svg class="ease-progress-circle ease-progress-sm" ...>
```

## Acceptance Criteria

- ✅ SVG `stroke-dashoffset` animation technique
- ✅ CSS variables for value, color, size, duration
- ✅ Smooth fill animation on page load
- ✅ Dark mode compatible
- ✅ `prefers-reduced-motion` support
- ✅ No JavaScript required
