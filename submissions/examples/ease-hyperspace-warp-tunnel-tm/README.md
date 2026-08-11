# ease-hyperspace-warp

CSS-only hyperspace warp tunnel loader animation component.

**Issue:** #63177

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--warp-tunnel-size` | `120px` | Tunnel diameter |
| `--warp-tunnel-duration` | `2.5s` | Ring expansion cycle |
| `--warp-tunnel-ease` | `cubic-bezier(0.25,0,0.75,1)` | Easing function |
| `--warp-color-1` | `#6366f1` | Primary ring color |
| `--warp-color-2` | `#a78bfa` | Secondary ring color |
| `--warp-color-3` | `#38bdf8` | Tertiary ring color |
| `--warp-color-4` | `#f472b6` | Accent ring color |
| `--warp-glow` | `rgba(99,102,241,0.6)` | Glow effect |
| `--warp-size-sm` | `80px` | Small variant |

## Variants

- **Expanding Rings** — Multiple rings expanding outward from center
- **Spin + Expand** — Slow rotation combined with ring expansion
- **Hue Rotation** — Color-cycling through the warp spectrum

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="warp-tunnel warp-glow">
  <div class="warp-ring"></div>
  <div class="warp-center"></div>
</div>
```

## Accessibility

- `prefers-reduced-motion: reduce` disables all warp animations
- `prefers-color-scheme: light` adjusts to light background
