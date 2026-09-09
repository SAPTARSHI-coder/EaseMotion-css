# Blur Text Reveal Component

Add ease-blur-text-reveal-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|---------|
| `--btr-accent` | `#6366f1` |
| `--btr-accent2` | `#ec4899` |
| `--btr-size` | `clamp(2rem,6vw,4rem)` |
| `--btr-weight` | `900` |

## Technique

`filter: blur(12px)` animates to `blur(0)` with `translateY` and `opacity` for a cinematic reveal.
