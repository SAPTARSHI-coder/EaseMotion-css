# Hourglass Grain Fall

Animation component for the EaseMotion CSS library. Issue **#67374**.

## Overview

The grain fall animation captures the rhythmic trickle of sand through an hourglass neck.

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="ease-hourglass-grain-fall ease-hourglass-grain-fall-md ease-hourglass-grain-fall-blue ease-hourglass-grain-fall-demo"></div>
```

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-hourglass-grain-fall-duration` | 1200ms | Animation total duration |
| `--ease-hourglass-grain-fall-delay` | 0ms | Start delay |
| `--ease-hourglass-grain-fall-easing` | cubic-bezier(0.4,0,0.2,1) | Timing function |
| `--ease-hourglass-grain-fall-iterations` | infinite | Cycle count |
| `--ease-hourglass-grain-fall-direction` | normal | Animation direction |
| `--ease-hourglass-grain-fall-color-primary` | #4a90e2 | Primary background |
| `--ease-hourglass-grain-fall-color-secondary` | #7ed321 | Mid-state color |
| `--ease-hourglass-grain-fall-color-accent` | #f5a623 | Accent / peak color |
| `--ease-hourglass-grain-fall-scale-x` | 1 | Horizontal scale |
| `--ease-hourglass-grain-fall-scale-y` | 1 | Vertical scale |

## Variants

### Sizes
`ease-hourglass-grain-fall-xs`, `ease-hourglass-grain-fall-sm`, `ease-hourglass-grain-fall-md` (default), `ease-hourglass-grain-fall-lg`, `ease-hourglass-grain-fall-xl`

### Colors
`ease-hourglass-grain-fall-blue`, `ease-hourglass-grain-fall-purple`, `ease-hourglass-grain-fall-orange`, `ease-hourglass-grain-fall-teal`, `ease-hourglass-grain-fall-rose`

### Easings
`ease-hourglass-grain-fall-ease-in`, `ease-hourglass-grain-fall-ease-out`, `ease-hourglass-grain-fall-ease-in-out`, `ease-hourglass-grain-fall-spring`, `ease-hourglass-grain-fall-bounce`

### Directions
`ease-hourglass-grain-fall-reverse`, `ease-hourglass-grain-fall-alternate`, `ease-hourglass-grain-fall-alternate-reverse`

### Iterations
`ease-hourglass-grain-fall-once`, `ease-hourglass-grain-fall-twice`, `ease-hourglass-grain-fall-3x`

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
