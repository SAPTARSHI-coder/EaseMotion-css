# Feature Card Grid Component

Add ease-feature-card-grid-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|---------|
| `--fcg-accent` | `#6366f1` |
| `--fcg-accent2` | `#ec4899` |
| `--fcg-radius` | `12px` |
| `--fcg-shadow` | `0 4px 24px rgba(0,0,0,.3)` |

## Technique

`grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))` creates responsive grid. Hover lift via `translateY`.
