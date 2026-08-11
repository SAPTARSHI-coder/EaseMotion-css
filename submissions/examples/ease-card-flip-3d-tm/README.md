# Card Flip 3D Component

Add ease-card-flip-3d-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--cf-accent` | `#6366f1` |
| `--cf-radius` | `12px` |
| `--cf-shadow` | `0 8px 32px rgba(0,0,0,.4)` |

## Technique

`transform-style: preserve-3d` + `backface-visibility: hidden` + `rotateY(180deg)` on hover.
