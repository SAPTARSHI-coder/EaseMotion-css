# Harpsichord Jack Pluck

Animation component for the EaseMotion CSS library. Issue **#67369**.

## Overview

The jack pluck animation captures the crisp, percussive string pluck of a harpsichord jack mechanism.

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="ease-harpsichord-jack-pluck ease-harpsichord-jack-pluck-md ease-harpsichord-jack-pluck-blue ease-harpsichord-jack-pluck-demo"></div>
```

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-harpsichord-jack-pluck-duration` | 1200ms | Animation total duration |
| `--ease-harpsichord-jack-pluck-delay` | 0ms | Start delay |
| `--ease-harpsichord-jack-pluck-easing` | cubic-bezier(0.4,0,0.2,1) | Timing function |
| `--ease-harpsichord-jack-pluck-iterations` | infinite | Cycle count |
| `--ease-harpsichord-jack-pluck-direction` | normal | Animation direction |
| `--ease-harpsichord-jack-pluck-color-primary` | #4a90e2 | Primary background |
| `--ease-harpsichord-jack-pluck-color-secondary` | #7ed321 | Mid-state color |
| `--ease-harpsichord-jack-pluck-color-accent` | #f5a623 | Accent / peak color |
| `--ease-harpsichord-jack-pluck-scale-x` | 1 | Horizontal scale |
| `--ease-harpsichord-jack-pluck-scale-y` | 1 | Vertical scale |

## Variants

### Sizes
`ease-harpsichord-jack-pluck-xs`, `ease-harpsichord-jack-pluck-sm`, `ease-harpsichord-jack-pluck-md` (default), `ease-harpsichord-jack-pluck-lg`, `ease-harpsichord-jack-pluck-xl`

### Colors
`ease-harpsichord-jack-pluck-blue`, `ease-harpsichord-jack-pluck-purple`, `ease-harpsichord-jack-pluck-orange`, `ease-harpsichord-jack-pluck-teal`, `ease-harpsichord-jack-pluck-rose`

### Easings
`ease-harpsichord-jack-pluck-ease-in`, `ease-harpsichord-jack-pluck-ease-out`, `ease-harpsichord-jack-pluck-ease-in-out`, `ease-harpsichord-jack-pluck-spring`, `ease-harpsichord-jack-pluck-bounce`

### Directions
`ease-harpsichord-jack-pluck-reverse`, `ease-harpsichord-jack-pluck-alternate`, `ease-harpsichord-jack-pluck-alternate-reverse`

### Iterations
`ease-harpsichord-jack-pluck-once`, `ease-harpsichord-jack-pluck-twice`, `ease-harpsichord-jack-pluck-3x`

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
