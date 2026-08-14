# Harmonic Oscillator

Animation component for the EaseMotion CSS library. Issue **#67368**.

## Overview

The oscillator animation models ideal simple harmonic motion with constant-period sinusoidal cycling.

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="ease-harmonic-oscillator ease-harmonic-oscillator-md ease-harmonic-oscillator-blue ease-harmonic-oscillator-demo"></div>
```

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-harmonic-oscillator-duration` | 1200ms | Animation total duration |
| `--ease-harmonic-oscillator-delay` | 0ms | Start delay |
| `--ease-harmonic-oscillator-easing` | cubic-bezier(0.4,0,0.2,1) | Timing function |
| `--ease-harmonic-oscillator-iterations` | infinite | Cycle count |
| `--ease-harmonic-oscillator-direction` | normal | Animation direction |
| `--ease-harmonic-oscillator-color-primary` | #4a90e2 | Primary background |
| `--ease-harmonic-oscillator-color-secondary` | #7ed321 | Mid-state color |
| `--ease-harmonic-oscillator-color-accent` | #f5a623 | Accent / peak color |
| `--ease-harmonic-oscillator-scale-x` | 1 | Horizontal scale |
| `--ease-harmonic-oscillator-scale-y` | 1 | Vertical scale |

## Variants

### Sizes
`ease-harmonic-oscillator-xs`, `ease-harmonic-oscillator-sm`, `ease-harmonic-oscillator-md` (default), `ease-harmonic-oscillator-lg`, `ease-harmonic-oscillator-xl`

### Colors
`ease-harmonic-oscillator-blue`, `ease-harmonic-oscillator-purple`, `ease-harmonic-oscillator-orange`, `ease-harmonic-oscillator-teal`, `ease-harmonic-oscillator-rose`

### Easings
`ease-harmonic-oscillator-ease-in`, `ease-harmonic-oscillator-ease-out`, `ease-harmonic-oscillator-ease-in-out`, `ease-harmonic-oscillator-spring`, `ease-harmonic-oscillator-bounce`

### Directions
`ease-harmonic-oscillator-reverse`, `ease-harmonic-oscillator-alternate`, `ease-harmonic-oscillator-alternate-reverse`

### Iterations
`ease-harmonic-oscillator-once`, `ease-harmonic-oscillator-twice`, `ease-harmonic-oscillator-3x`

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
