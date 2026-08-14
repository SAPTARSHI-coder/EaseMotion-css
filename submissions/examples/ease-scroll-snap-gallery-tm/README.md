# Scroll Snap Gallery Component

Add ease-scroll-snap-gallery-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--ss-accent` | `#6366f1` |
| `--ss-radius` | `12px` |
| `--ss-shadow` | `0 4px 20px rgba(0,0,0,.3)` |

## Technique

`scroll-snap-type: x mandatory` + `scroll-snap-align: start` on flex items. Touch-friendly with `-webkit-overflow-scrolling: touch`. Custom scrollbar styling.
