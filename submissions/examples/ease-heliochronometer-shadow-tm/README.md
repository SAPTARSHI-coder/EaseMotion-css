# Heliochronometer Shadow

Animation component for the EaseMotion CSS library. Issue **#67372**.

## Overview

The shadow animation tracks the precise movement of a sundial gnomon shadow across a dial face.

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="ease-heliochronometer-shadow ease-heliochronometer-shadow-md ease-heliochronometer-shadow-blue ease-heliochronometer-shadow-demo"></div>
```

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-heliochronometer-shadow-duration` | 1200ms | Animation total duration |
| `--ease-heliochronometer-shadow-delay` | 0ms | Start delay |
| `--ease-heliochronometer-shadow-easing` | cubic-bezier(0.4,0,0.2,1) | Timing function |
| `--ease-heliochronometer-shadow-iterations` | infinite | Cycle count |
| `--ease-heliochronometer-shadow-direction` | normal | Animation direction |
| `--ease-heliochronometer-shadow-color-primary` | #4a90e2 | Primary background |
| `--ease-heliochronometer-shadow-color-secondary` | #7ed321 | Mid-state color |
| `--ease-heliochronometer-shadow-color-accent` | #f5a623 | Accent / peak color |
| `--ease-heliochronometer-shadow-scale-x` | 1 | Horizontal scale |
| `--ease-heliochronometer-shadow-scale-y` | 1 | Vertical scale |

## Variants

### Sizes
`ease-heliochronometer-shadow-xs`, `ease-heliochronometer-shadow-sm`, `ease-heliochronometer-shadow-md` (default), `ease-heliochronometer-shadow-lg`, `ease-heliochronometer-shadow-xl`

### Colors
`ease-heliochronometer-shadow-blue`, `ease-heliochronometer-shadow-purple`, `ease-heliochronometer-shadow-orange`, `ease-heliochronometer-shadow-teal`, `ease-heliochronometer-shadow-rose`

### Easings
`ease-heliochronometer-shadow-ease-in`, `ease-heliochronometer-shadow-ease-out`, `ease-heliochronometer-shadow-ease-in-out`, `ease-heliochronometer-shadow-spring`, `ease-heliochronometer-shadow-bounce`

### Directions
`ease-heliochronometer-shadow-reverse`, `ease-heliochronometer-shadow-alternate`, `ease-heliochronometer-shadow-alternate-reverse`

### Iterations
`ease-heliochronometer-shadow-once`, `ease-heliochronometer-shadow-twice`, `ease-heliochronometer-shadow-3x`

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
