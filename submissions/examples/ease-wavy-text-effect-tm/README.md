# Wavy Text Effect Component

Add ease-wavy-text-effect-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--wt-accent` | `#6366f1` |
| `--wt-size` | `clamp(1.5rem,4vw,3rem)` |
| `--wt-weight` | `700` |
| `--wt-speed` | `0.8s` |

## Technique

Each character wrapped in `<span>` with individually set `animation-delay` creates the wave cascade.
