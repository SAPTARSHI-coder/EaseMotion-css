# Glow Button Pulse Component

Add ease-glow-button-pulse-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|---------|
| `--gb-accent` | `#6366f1` |
| `--gb-accent2` | `#ec4899` |
| `--gb-radius` | `8px` |
| `--gb-shadow` | `0 0 20px rgba(99,102,241,0.5)` |

## Technique

`::before` pseudo-element with `z-index:-1` and pulsing keyframe animation creates the glow ring effect.
