# Component: ease-spiral-gauge

This submission implements the `ease-spiral-gauge` component for GSSOC issue **#41801**.

## Description

A spiral/circular gauge component for analytics dashboards. Uses CSS `conic-gradient` to create the spiral effect with smooth fill animation.

## Usage

```html
<div class="ease-spiral-gauge">
  <div class="gauge-track"></div>
  <div class="gauge-fill"></div>
  <div class="gauge-value">75%</div>
</div>
```

### Color Variants

```html
<!-- Primary (default) -->
<div class="ease-spiral-gauge ease-spiral-primary">...</div>

<!-- Success (green) -->
<div class="ease-spiral-gauge ease-spiral-success">...</div>

<!-- Warning (yellow) -->
<div class="ease-spiral-gauge ease-spiral-warning">...</div>

<!-- Danger (red) -->
<div class="ease-spiral-gauge ease-spiral-danger">...</div>
```

### Size Variants

```html
<!-- Large -->
<div class="ease-spiral-gauge ease-spiral-lg">...</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--gauge-size` | `120px` | Gauge diameter |
| `--gauge-track-width` | `10px` | Track thickness |
| `--gauge-fill` | `#3b82f6` | Fill color |
| `--gauge-duration` | `2s` | Animation duration |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Pure CSS implementation (no JavaScript)
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
- ✅ Dark mode compatible
