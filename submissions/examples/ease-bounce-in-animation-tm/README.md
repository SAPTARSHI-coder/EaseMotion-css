# Bounce In Animation Component

Add ease-bounce-in-animation-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--bi-accent` | `#6366f1` |
| `--bi-radius` | `12px` |
| `--bi-shadow` | `0 8px 32px rgba(0,0,0,.4)` |
| `--bi-delay` | `0.3s` |

## Technique

`cubic-bezier(0.34,1.56,0.64,1)` gives the bouncy overshoot spring feel. Staggered `animation-delay` on nth-child.
