# CSS Countdown Timer — Issue #30435

Pure CSS countdown timer with bar and ring variants. Uses `animation-duration` driven by `--ease-cd-duration` CSS variable.

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-countdown` | Timer container |
| `.ease-countdown-display` | Numeric display |
| `.ease-countdown-bar` | Linear progress track |
| `.ease-countdown-bar-fill` | Shrinking bar fill |
| `.ease-countdown-ring` | Circular SVG container |
| `.ease-countdown-ring-fill` | SVG arc (dashoffset animation) |
| `.ease-countdown-ring-label` | Center label |
| `.ease-countdown-sm` / `-lg` | Size variants |

## CSS Variables

- `--ease-cd-duration` (seconds, default 60)
- `--ease-cd-size` (ring diameter, default 6rem)
- `--ease-cd-color`, `--ease-cd-track`, `--ease-cd-font-size`
