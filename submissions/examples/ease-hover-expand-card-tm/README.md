# Hover Expand Card Component

Add ease-hover-expand-card-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|---------|
| `--hec-accent` | `#6366f1` |
| `--hec-radius` | `12px` |
| `--hec-shadow` | `0 8px 32px rgba(0,0,0,.4)` |
| `--hec-trans` | `0.4s cubic-bezier(.4,0,.2,1)` |

## Technique

Hover lifts the card (`translateY` + `scale`) while the image zooms independently (`scale 1.08`).
