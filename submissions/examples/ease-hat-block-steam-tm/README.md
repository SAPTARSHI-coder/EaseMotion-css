# Hat Block Steam

Animation component for the EaseMotion CSS library. Issue **#67370**.

## Overview

The steam animation simulates the gentle rising of steam from a hat-blocking iron, with dissipating warmth.

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="ease-hat-block-steam ease-hat-block-steam-md ease-hat-block-steam-blue ease-hat-block-steam-demo"></div>
```

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-hat-block-steam-duration` | 1200ms | Animation total duration |
| `--ease-hat-block-steam-delay` | 0ms | Start delay |
| `--ease-hat-block-steam-easing` | cubic-bezier(0.4,0,0.2,1) | Timing function |
| `--ease-hat-block-steam-iterations` | infinite | Cycle count |
| `--ease-hat-block-steam-direction` | normal | Animation direction |
| `--ease-hat-block-steam-color-primary` | #4a90e2 | Primary background |
| `--ease-hat-block-steam-color-secondary` | #7ed321 | Mid-state color |
| `--ease-hat-block-steam-color-accent` | #f5a623 | Accent / peak color |
| `--ease-hat-block-steam-scale-x` | 1 | Horizontal scale |
| `--ease-hat-block-steam-scale-y` | 1 | Vertical scale |

## Variants

### Sizes
`ease-hat-block-steam-xs`, `ease-hat-block-steam-sm`, `ease-hat-block-steam-md` (default), `ease-hat-block-steam-lg`, `ease-hat-block-steam-xl`

### Colors
`ease-hat-block-steam-blue`, `ease-hat-block-steam-purple`, `ease-hat-block-steam-orange`, `ease-hat-block-steam-teal`, `ease-hat-block-steam-rose`

### Easings
`ease-hat-block-steam-ease-in`, `ease-hat-block-steam-ease-out`, `ease-hat-block-steam-ease-in-out`, `ease-hat-block-steam-spring`, `ease-hat-block-steam-bounce`

### Directions
`ease-hat-block-steam-reverse`, `ease-hat-block-steam-alternate`, `ease-hat-block-steam-alternate-reverse`

### Iterations
`ease-hat-block-steam-once`, `ease-hat-block-steam-twice`, `ease-hat-block-steam-3x`

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
