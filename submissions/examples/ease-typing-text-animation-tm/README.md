# Typing Text Animation Component

Add ease-typing-text-animation-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|---------|
| `--tt-accent` | `#6366f1` |
| `--tt-size` | `clamp(1.5rem,4vw,2.5rem)` |
| `--tt-speed` | `4s` |

## Technique

`overflow:hidden` + `width` animation + blinking cursor via `::after`. Zero JS.
