# Animated Progress Bar — Issue #7413

## Overview

Progress bar component with determinate, indeterminate, striped, and animated variants. Supports color and size variants with optional labels.

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| Determinate | `style="width: X%"` | Fixed percentage width |
| Striped | `.ease-progress-bar-striped` | Diagonal stripe pattern overlay |
| Animated Stripes | `.ease-progress-bar-animated-stripes` | Moving stripes animation |
| Indeterminate | `.ease-progress-bar-indeterminate` | Sliding marquee for unknown duration |

## Colors

| Color | Class |
|-------|-------|
| Primary | `.ease-progress-bar` (default) |
| Success | `.ease-progress-bar-success` |
| Warning | `.ease-progress-bar-warning` |
| Danger | `.ease-progress-bar-danger` |

## Sizes

| Size | Class | Height |
|------|-------|--------|
| Small | `.ease-progress-sm` | 0.375rem |
| Default | `.ease-progress` | 0.75rem |
| Large | `.ease-progress-lg` | 1.25rem |

## Usage

```html
<div class="ease-progress">
  <div class="ease-progress-bar ease-progress-bar-striped" style="width: 75%;">
    <span class="ease-progress-label">75%</span>
  </div>
</div>
```

## Files

- `demo.html` — Interactive demo with all variants
- `style.css` — Progress bar component styles
- `README.md` — This documentation
