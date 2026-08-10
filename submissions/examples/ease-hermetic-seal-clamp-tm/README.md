# Hermetic Seal Clamp

Animation component for the EaseMotion CSS library. Issue **#67373**.

## Overview

The seal clamp animation simulates the firm, progressive clamping action of an hermetic sealing press.

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="ease-hermetic-seal-clamp ease-hermetic-seal-clamp-md ease-hermetic-seal-clamp-blue ease-hermetic-seal-clamp-demo"></div>
```

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-hermetic-seal-clamp-duration` | 1200ms | Animation total duration |
| `--ease-hermetic-seal-clamp-delay` | 0ms | Start delay |
| `--ease-hermetic-seal-clamp-easing` | cubic-bezier(0.4,0,0.2,1) | Timing function |
| `--ease-hermetic-seal-clamp-iterations` | infinite | Cycle count |
| `--ease-hermetic-seal-clamp-direction` | normal | Animation direction |
| `--ease-hermetic-seal-clamp-color-primary` | #4a90e2 | Primary background |
| `--ease-hermetic-seal-clamp-color-secondary` | #7ed321 | Mid-state color |
| `--ease-hermetic-seal-clamp-color-accent` | #f5a623 | Accent / peak color |
| `--ease-hermetic-seal-clamp-scale-x` | 1 | Horizontal scale |
| `--ease-hermetic-seal-clamp-scale-y` | 1 | Vertical scale |

## Variants

### Sizes
`ease-hermetic-seal-clamp-xs`, `ease-hermetic-seal-clamp-sm`, `ease-hermetic-seal-clamp-md` (default), `ease-hermetic-seal-clamp-lg`, `ease-hermetic-seal-clamp-xl`

### Colors
`ease-hermetic-seal-clamp-blue`, `ease-hermetic-seal-clamp-purple`, `ease-hermetic-seal-clamp-orange`, `ease-hermetic-seal-clamp-teal`, `ease-hermetic-seal-clamp-rose`

### Easings
`ease-hermetic-seal-clamp-ease-in`, `ease-hermetic-seal-clamp-ease-out`, `ease-hermetic-seal-clamp-ease-in-out`, `ease-hermetic-seal-clamp-spring`, `ease-hermetic-seal-clamp-bounce`

### Directions
`ease-hermetic-seal-clamp-reverse`, `ease-hermetic-seal-clamp-alternate`, `ease-hermetic-seal-clamp-alternate-reverse`

### Iterations
`ease-hermetic-seal-clamp-once`, `ease-hermetic-seal-clamp-twice`, `ease-hermetic-seal-clamp-3x`

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
