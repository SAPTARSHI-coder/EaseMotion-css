# ease-lighthouse-beam

CSS-only lighthouse beam sweep animation.

**Issue:** #63174

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--lhb-beam-width` | `30deg` | Beam angular width |
| `--lhb-color` | `rgba(255,255,200,0.15)` | Beam fill color |
| `--lhb-sweep-duration` | `4s` | Full sweep cycle |
| `--lhb-sweep-ease` | `linear` | Sweep easing |
| `--lhb-sea-color` | `#0a1628` | Sea background |
| `--lhb-glow` | `rgba(255,255,150,0.4)` | Lighthouse glow |
| `--lhb-size` | `200px` | Scene size |
| `--lhb-size-sm` | `120px` | Small variant |

## Variants

- **Continuous Sweep** — Standard 360-degree rotation
- **Glow Pulse** — Beam with pulsing glow effect
- **Flicker** — Subtle intensity flicker

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="lhb-scene">
  <div class="lhb-beam-wrap"><div class="lhb-beam"></div></div>
  <div class="lhb-tower"></div>
  <div class="lhb-sea"></div>
</div>
```

## Accessibility

- `prefers-reduced-motion: reduce` disables sweep animation
- `prefers-color-scheme: light` adjusts to daytime palette
