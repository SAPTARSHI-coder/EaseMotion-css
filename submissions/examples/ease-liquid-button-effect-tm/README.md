# Liquid Button Effect Component

Add ease-liquid-button-effect-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--lb-accent` | `#6366f1` |
| `--lb-radius` | `8px` |
| `--lb-glow` | `0 0 30px rgba(99,102,241,0.6)` |

## Technique

Liquid ripple uses `::before` with scale transform on `:active`. Outline fill uses `scaleX(0→1)` on hover.
