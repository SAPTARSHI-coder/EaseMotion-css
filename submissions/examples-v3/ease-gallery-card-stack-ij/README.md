# Gallery Card Stack — Cascade-Deck Animation (#36679)

A stacked card gallery that fans out horizontally on hover, revealing each card like a deck of cards.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--card-width` | `220px` | Width of each card |
| `--card-height` | `300px` | Height of each card |
| `--stack-gap` | `8px` | Offset gap between stacked cards |
| `--fan-duration` | `0.4s` | Animation duration for the fan-out effect |

## Behavior

- Cards are stacked in a slight cascade with progressive rotation.
- On hover, the stack fans outward with translate + rotate transforms.
- Each card scales up slightly and gains a stronger shadow.
- Built with pure CSS — no JavaScript required.
