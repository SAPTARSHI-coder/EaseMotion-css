# ease-moon-phase

CSS-only moon phase cycle indicator animation.

**Issue:** #63181

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--moon-size` | `80px` | Moon diameter |
| `--moon-color` | `#e8e4d9` | Moon surface color |
| `--moon-shadow` | `#1a1a2e` | Shadow side color |
| `--moon-ring-color` | `rgba(200,200,255,0.15)` | Outer ring glow |
| `--moon-glow` | `rgba(200,200,255,0.3)` | Full moon glow |
| `--moon-duration` | `8s` | Full cycle duration |
| `--moon-size-sm` | `48px` | Small variant |
| `--moon-size-lg` | `120px` | Large variant |

## Phases

- **New Moon** — Dark, no visible face
- **Waxing Crescent** — Growing from right
- **First Quarter** — Half illuminated
- **Waxing Gibbous** — More than half, growing
- **Full Moon** — Fully lit with glow pulse
- **Waning Gibbous** — Shrinking from left
- **Last Quarter** — Half illuminated (other side)
- **Waning Crescent** — Thin sliver, shrinking

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="moon-ring"><div class="moon-body"></div></div>
```

## Accessibility

- `prefers-reduced-motion: reduce` disables phase animations
