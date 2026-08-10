# Hydraulic Press Ram

Animation component for the EaseMotion CSS library. Issue **#67375**.

## Overview

The press ram animation shows slow, powerful compression with a steady buildup of force.

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="ease-hydraulic-press-ram ease-hydraulic-press-ram-md ease-hydraulic-press-ram-blue ease-hydraulic-press-ram-demo"></div>
```

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-hydraulic-press-ram-duration` | 1200ms | Animation total duration |
| `--ease-hydraulic-press-ram-delay` | 0ms | Start delay |
| `--ease-hydraulic-press-ram-easing` | cubic-bezier(0.4,0,0.2,1) | Timing function |
| `--ease-hydraulic-press-ram-iterations` | infinite | Cycle count |
| `--ease-hydraulic-press-ram-direction` | normal | Animation direction |
| `--ease-hydraulic-press-ram-color-primary` | #4a90e2 | Primary background |
| `--ease-hydraulic-press-ram-color-secondary` | #7ed321 | Mid-state color |
| `--ease-hydraulic-press-ram-color-accent` | #f5a623 | Accent / peak color |
| `--ease-hydraulic-press-ram-scale-x` | 1 | Horizontal scale |
| `--ease-hydraulic-press-ram-scale-y` | 1 | Vertical scale |

## Variants

### Sizes
`ease-hydraulic-press-ram-xs`, `ease-hydraulic-press-ram-sm`, `ease-hydraulic-press-ram-md` (default), `ease-hydraulic-press-ram-lg`, `ease-hydraulic-press-ram-xl`

### Colors
`ease-hydraulic-press-ram-blue`, `ease-hydraulic-press-ram-purple`, `ease-hydraulic-press-ram-orange`, `ease-hydraulic-press-ram-teal`, `ease-hydraulic-press-ram-rose`

### Easings
`ease-hydraulic-press-ram-ease-in`, `ease-hydraulic-press-ram-ease-out`, `ease-hydraulic-press-ram-ease-in-out`, `ease-hydraulic-press-ram-spring`, `ease-hydraulic-press-ram-bounce`

### Directions
`ease-hydraulic-press-ram-reverse`, `ease-hydraulic-press-ram-alternate`, `ease-hydraulic-press-ram-alternate-reverse`

### Iterations
`ease-hydraulic-press-ram-once`, `ease-hydraulic-press-ram-twice`, `ease-hydraulic-press-ram-3x`

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
