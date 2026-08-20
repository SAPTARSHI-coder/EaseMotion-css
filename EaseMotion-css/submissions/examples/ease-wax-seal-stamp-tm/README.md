# ease-wax-seal

CSS-only wax seal stamp impression animation.

**Issue:** #63172

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--wax-size` | `80px` | Seal diameter |
| `--wax-color` | `#8b1a1a` | Base wax color |
| `--wax-color-gold` | `#c9a84c` | Gold seal variant |
| `--wax-color-burgundy` | `#722f37` | Burgundy variant |
| `--wax-color-navy` | `#1a3a5c` | Navy variant |
| `--wax-drop-duration` | `0.6s` | Drop animation duration |
| `--wax-glow` | `rgba(201,168,76,0.3)` | Glow color |
| `--wax-size-sm` | `48px` | Small variant |
| `--wax-size-lg` | `120px` | Large variant |

## Variants

- **Drop** — Seal drops from above with bounce landing
- **Stamp Imprint** — Stamps down with rotation overshoot
- **Melt Wobble** — Subtle edge wobble simulating melting wax
- **Glow Pulse** — Ambient gold glow pulse
- **Ripple** — Concentric ripples emanating outward

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="wax-seal wax-glow">W</div>
```

## Accessibility

- `prefers-reduced-motion: reduce` disables all wax animations
