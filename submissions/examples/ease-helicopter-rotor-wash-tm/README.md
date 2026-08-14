# Helicopter Rotor Wash

Animation component for the EaseMotion CSS library. Issue **#67371**.

## Overview

The rotor wash animation conveys the turbulent downwash effect of a spinning helicopter blade.

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="ease-helicopter-rotor-wash ease-helicopter-rotor-wash-md ease-helicopter-rotor-wash-blue ease-helicopter-rotor-wash-demo"></div>
```

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-helicopter-rotor-wash-duration` | 1200ms | Animation total duration |
| `--ease-helicopter-rotor-wash-delay` | 0ms | Start delay |
| `--ease-helicopter-rotor-wash-easing` | cubic-bezier(0.4,0,0.2,1) | Timing function |
| `--ease-helicopter-rotor-wash-iterations` | infinite | Cycle count |
| `--ease-helicopter-rotor-wash-direction` | normal | Animation direction |
| `--ease-helicopter-rotor-wash-color-primary` | #4a90e2 | Primary background |
| `--ease-helicopter-rotor-wash-color-secondary` | #7ed321 | Mid-state color |
| `--ease-helicopter-rotor-wash-color-accent` | #f5a623 | Accent / peak color |
| `--ease-helicopter-rotor-wash-scale-x` | 1 | Horizontal scale |
| `--ease-helicopter-rotor-wash-scale-y` | 1 | Vertical scale |

## Variants

### Sizes
`ease-helicopter-rotor-wash-xs`, `ease-helicopter-rotor-wash-sm`, `ease-helicopter-rotor-wash-md` (default), `ease-helicopter-rotor-wash-lg`, `ease-helicopter-rotor-wash-xl`

### Colors
`ease-helicopter-rotor-wash-blue`, `ease-helicopter-rotor-wash-purple`, `ease-helicopter-rotor-wash-orange`, `ease-helicopter-rotor-wash-teal`, `ease-helicopter-rotor-wash-rose`

### Easings
`ease-helicopter-rotor-wash-ease-in`, `ease-helicopter-rotor-wash-ease-out`, `ease-helicopter-rotor-wash-ease-in-out`, `ease-helicopter-rotor-wash-spring`, `ease-helicopter-rotor-wash-bounce`

### Directions
`ease-helicopter-rotor-wash-reverse`, `ease-helicopter-rotor-wash-alternate`, `ease-helicopter-rotor-wash-alternate-reverse`

### Iterations
`ease-helicopter-rotor-wash-once`, `ease-helicopter-rotor-wash-twice`, `ease-helicopter-rotor-wash-3x`

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
