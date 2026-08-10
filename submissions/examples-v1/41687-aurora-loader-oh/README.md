# Component: ease-aurora-loader

This submission implements the `ease-aurora-loader` component for GSSOC issue **#41687**.

## Description

An aurora-style animated loader with gradient wave animations. Each bar animates with a smooth scale and opacity transition, creating an aurora-like effect.

## Usage

```html
<div class="ease-aurora-loader">
  <div class="aurora-bar"></div>
  <div class="aurora-bar"></div>
  <div class="aurora-bar"></div>
</div>
```

### Color Variants

```html
<!-- Primary (blue) -->
<div class="ease-aurora-loader ease-aurora-primary">...</div>

<!-- Success (green) -->
<div class="ease-aurora-loader ease-aurora-success">...</div>

<!-- Warning (yellow) -->
<div class="ease-aurora-loader ease-aurora-warning">...</div>

<!-- Danger (red) -->
<div class="ease-aurora-loader ease-aurora-danger">...</div>
```

### Size Variants

```html
<!-- Large -->
<div class="ease-aurora-loader ease-aurora-lg">...</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--aurora-start` | `#6366f1` | Gradient start color |
| `--aurora-mid` | `#8b5cf6` | Gradient middle color |
| `--aurora-end` | `#a855f7` | Gradient end color |
| `--aurora-duration` | `1.5s` | Animation duration |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Pure CSS animation
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
- ✅ Dark mode compatible
