# Ice Saw Kerf

Animation component for the EaseMotion CSS library. Issue **#67377**.

## Overview

The kerf animation simulates the narrow slot cut by a saw blade through ice, with a crisp linear progression.

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="ease-ice-saw-kerf ease-ice-saw-kerf-md ease-ice-saw-kerf-blue ease-ice-saw-kerf-demo"></div>
```

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-ice-saw-kerf-duration` | 1200ms | Animation total duration |
| `--ease-ice-saw-kerf-delay` | 0ms | Start delay |
| `--ease-ice-saw-kerf-easing` | cubic-bezier(0.4,0,0.2,1) | Timing function |
| `--ease-ice-saw-kerf-iterations` | infinite | Cycle count |
| `--ease-ice-saw-kerf-direction` | normal | Animation direction |
| `--ease-ice-saw-kerf-color-primary` | #4a90e2 | Primary background |
| `--ease-ice-saw-kerf-color-secondary` | #7ed321 | Mid-state color |
| `--ease-ice-saw-kerf-color-accent` | #f5a623 | Accent / peak color |
| `--ease-ice-saw-kerf-scale-x` | 1 | Horizontal scale |
| `--ease-ice-saw-kerf-scale-y` | 1 | Vertical scale |

## Variants

### Sizes
`ease-ice-saw-kerf-xs`, `ease-ice-saw-kerf-sm`, `ease-ice-saw-kerf-md` (default), `ease-ice-saw-kerf-lg`, `ease-ice-saw-kerf-xl`

### Colors
`ease-ice-saw-kerf-blue`, `ease-ice-saw-kerf-purple`, `ease-ice-saw-kerf-orange`, `ease-ice-saw-kerf-teal`, `ease-ice-saw-kerf-rose`

### Easings
`ease-ice-saw-kerf-ease-in`, `ease-ice-saw-kerf-ease-out`, `ease-ice-saw-kerf-ease-in-out`, `ease-ice-saw-kerf-spring`, `ease-ice-saw-kerf-bounce`

### Directions
`ease-ice-saw-kerf-reverse`, `ease-ice-saw-kerf-alternate`, `ease-ice-saw-kerf-alternate-reverse`

### Iterations
`ease-ice-saw-kerf-once`, `ease-ice-saw-kerf-twice`, `ease-ice-saw-kerf-3x`

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
