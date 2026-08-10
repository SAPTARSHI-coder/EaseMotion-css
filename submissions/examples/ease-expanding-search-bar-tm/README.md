# Expanding Search Bar Component

**Issue:** [#71852](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/71852)

Search bar that smoothly expands on focus using pure CSS.

## Design Tokens

| Token | Default |
|-------|--------|
| `--s-focus` | `#6366f1` |
| `--s-w` | `220px` |
| `--s-w2` | `340px` |
| `--s-radius` | `50px` |
| `--s-trans` | `0.4s` |

## Technique

Width transition on `:focus` with `box-shadow` glow.
