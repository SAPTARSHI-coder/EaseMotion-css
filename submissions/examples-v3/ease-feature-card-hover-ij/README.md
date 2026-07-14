# Feature Card Hover

A grid of feature cards that lift up with an increased shadow on hover.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--fc-duration` | `0.3s` | Transition duration |
| `--fc-lift-distance` | `-8px` | Y‑axis lift on hover |
| `--fc-card-bg` | `#ffffff` | Card background |
| `--fc-shadow-default` | `0 2px 8px rgba(0,0,0,0.08)` | Default card shadow |
| `--fc-shadow-hover` | `0 12px 28px rgba(0,0,0,0.18)` | Hover shadow |
| `--fc-radius` | `16px` | Card border‑radius |
| `--fc-text-color` | `#1a1a2e` | Text colour |

## Behaviour

- Cards lift via `translateY` and shadow deepens on `:hover` / `:focus-visible`.
- Smooth `transform` and `box-shadow` transition driven by `--fc-duration`.
- Interactive JS adds a subtle click console message.
