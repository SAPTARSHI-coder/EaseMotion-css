# Text Crop Effect Component

Add ease-text-crop-effect-tm pure CSS component.

## Design Tokens

| Token | Default |
|-------|---------|
| `--tce-accent` | `#6366f1` |
| `--tce-accent2` | `#ec4899` |
| `--tce-size` | `clamp(3rem,8vw,6rem)` |
| `--tce-weight` | `900` |

## Technique

`clip-path: inset()` animates from full-hidden to full-revealed on `::after` pseudo-element.
