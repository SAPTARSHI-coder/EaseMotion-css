# ease-sticker-peel

CSS-only sticker corner peel reveal animation.

**Issue:** #63168

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--sticker-width` | `160px` | Sticker width |
| `--sticker-height` | `160px` | Sticker height |
| `--sticker-bg` | `#6366f1` | Background color |
| `--sticker-bg-gold` | `#f59e0b` | Gold variant |
| `--sticker-bg-success` | `#22c55e` | Green variant |
| `--sticker-bg-danger` | `#ef4444` | Red variant |
| `--sticker-shadow` | `rgba(0,0,0,0.25)` | Drop shadow |
| `--sticker-peel-duration` | `0.6s` | Peel animation duration |
| `--sticker-shadow-depth` | `4px` | Shadow offset |
| `--sticker-size-sm` | `100px` | Small variant |
| `--sticker-size-lg` | `220px` | Large variant |

## Variants

- **Peel Up** — Slight rotation lift simulating peeling from surface
- **Bounce In** — Spring bounce with rotation entry
- **Shadow Drift** — Subtle shadow/rotation oscillation
- **Float** — Gentle up/down float with rotation

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="sticker sticker-peel">
  <span>NEW</span>
  <span>Arrived Today</span>
</div>
```

## Accessibility

- `prefers-reduced-motion: reduce` disables all sticker animations
