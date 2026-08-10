# Shimmer Text Sweep Component

Add ease-shimmer-text-sweep-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--st-accent` | `#6366f1` |
| `--st-accent2` | `#ec4899` |
| `--st-size` | `clamp(1.5rem,4vw,3rem)` |
| `--st-weight` | `800` |
| `--st-speed` | `3s` |

## Technique

Light sweep: `::after` with animated `left` position. Gradient sweep: `background-position` keyframes on gradient text.
