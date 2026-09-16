# Hygrometer Hair Coil

Animation component for the EaseMotion CSS library. Issue **#67376**.

## Overview

The hair coil animation represents the expansion and contraction of a hair hygrometer, with gentle oscillation.

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="ease-hygrometer-hair-coil ease-hygrometer-hair-coil-md ease-hygrometer-hair-coil-blue ease-hygrometer-hair-coil-demo"></div>
```

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-hygrometer-hair-coil-duration` | 1200ms | Animation total duration |
| `--ease-hygrometer-hair-coil-delay` | 0ms | Start delay |
| `--ease-hygrometer-hair-coil-easing` | cubic-bezier(0.4,0,0.2,1) | Timing function |
| `--ease-hygrometer-hair-coil-iterations` | infinite | Cycle count |
| `--ease-hygrometer-hair-coil-direction` | normal | Animation direction |
| `--ease-hygrometer-hair-coil-color-primary` | #4a90e2 | Primary background |
| `--ease-hygrometer-hair-coil-color-secondary` | #7ed321 | Mid-state color |
| `--ease-hygrometer-hair-coil-color-accent` | #f5a623 | Accent / peak color |
| `--ease-hygrometer-hair-coil-scale-x` | 1 | Horizontal scale |
| `--ease-hygrometer-hair-coil-scale-y` | 1 | Vertical scale |

## Variants

### Sizes
`ease-hygrometer-hair-coil-xs`, `ease-hygrometer-hair-coil-sm`, `ease-hygrometer-hair-coil-md` (default), `ease-hygrometer-hair-coil-lg`, `ease-hygrometer-hair-coil-xl`

### Colors
`ease-hygrometer-hair-coil-blue`, `ease-hygrometer-hair-coil-purple`, `ease-hygrometer-hair-coil-orange`, `ease-hygrometer-hair-coil-teal`, `ease-hygrometer-hair-coil-rose`

### Easings
`ease-hygrometer-hair-coil-ease-in`, `ease-hygrometer-hair-coil-ease-out`, `ease-hygrometer-hair-coil-ease-in-out`, `ease-hygrometer-hair-coil-spring`, `ease-hygrometer-hair-coil-bounce`

### Directions
`ease-hygrometer-hair-coil-reverse`, `ease-hygrometer-hair-coil-alternate`, `ease-hygrometer-hair-coil-alternate-reverse`

### Iterations
`ease-hygrometer-hair-coil-once`, `ease-hygrometer-hair-coil-twice`, `ease-hygrometer-hair-coil-3x`

## Accessibility

- Respects `prefers-reduced-motion`: animation is disabled when set.
- Focus states are clearly visible with an outline on the accent color.
- All interactive elements are keyboard navigable.

## Color Palette

- Blue: #4a90e2 / #50e3c2 / #7ed321
- Purple: #9b59b6 / #8e44ad / #e74c3c
- Orange: #f39c12 / #e67e22 / #d35400
- Teal: #1abc9c / #16a085 / #2ecc71
- Rose: #e91e63 / #c2185b / #f06292
