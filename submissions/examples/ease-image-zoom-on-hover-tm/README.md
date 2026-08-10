# Image Zoom on Hover Component

Add ease-image-zoom-on-hover-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|--------|
| `--iz-accent` | `#6366f1` |
| `--iz-radius` | `12px` |
| `--iz-shadow` | `0 8px 32px rgba(0,0,0,.4)` |
| `--iz-trans` | `0.5s cubic-bezier(.4,0,.2,1)` |

## Technique

Image scales up (1.15x) with `overflow:hidden` on container clipping the zoom. Card lifts with `translateY` on hover.
