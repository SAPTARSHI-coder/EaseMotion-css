# Countdown Timer Component

**Issue:** [#71808](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/71808)

Animated countdown timer with blinking colon separators using pure CSS.

## Design Tokens

| Token | Default |
|-------|---------|
| `--tm-ct-primary` | `#6366f1` |
| `--tm-ct-accent` | `#f59e0b` |
| `--tm-ct-digit-size` | `4rem` |
| `--tm-ct-radius` | `12px` |
| `--tm-ct-font` | monospace |

## Structure

- `.ct-display` — timer container
- `.ct-unit` — individual time unit (digit + label)
- `.ct-digit` — large digit display
- `.ct-label` — unit label text
- `.ct-divider` — blinking colon separator
