# ease-bubble-rise

CSS-only rising bubble ambient field animation.

**Issue:** #63185

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--bubble-min-size` | `8px` | Minimum bubble diameter |
| `--bubble-max-size` | `28px` | Maximum bubble diameter |
| `--bubble-duration-min` | `4s` | Minimum rise duration |
| `--bubble-rise-ease` | `cubic-bezier(0.25,0.46,0.45,0.94)` | Rise easing |
| `--bubble-color` | `rgba(99,179,237,0.6)` | Bubble fill color |
| `--bubble-opacity` | `0.7` | Opacity level |

## Variants

- **Rise-1** — Linear upward float with opacity fade-in/out
- **Rise-2** — Horizontal wobble + lateral drift during rise
- **Wobble** — Side-to-side oscillation during rise

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="bubble-field">
  <div class="bubble"></div>
</div>
```

## Accessibility

- `prefers-reduced-motion: reduce` disables bubble animations
- `prefers-color-scheme: light` adjusts to cool blue palette
