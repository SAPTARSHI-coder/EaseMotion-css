# ease-neon-audio-equalizer

CSS-only neon audio equalizer bars animation component.

**Issue:** #63795

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--eq-bar-count` | `8` | Number of bars |
| `--eq-bar-width` | `12px` | Width per bar |
| `--eq-bar-gap` | `6px` | Gap between bars |
| `--eq-bar-height-min` | `20px` | Minimum bar height |
| `--eq-bar-height-max` | `80px` | Maximum bar height |
| `--eq-bar-color` | `#00ff88` | Bar fill color |
| `--eq-bar-color-alt` | `#ff00aa` | Alternate bar color |
| `--eq-bar-glow` | `rgba(0,255,136,0.5)` | Glow shadow color |
| `--eq-bg` | `#0a0a14` | Background color |
| `--eq-duration-base` | `0.4s` | Base animation cycle |
| `--eq-size-sm` | `60px` | Small variant height |
| `--eq-size-lg` | `160px` | Large variant height |

## Variants

- **Neon Green Glow** — Default green neon with pulsing glow
- **Neon Pink Alt** — Pink/magenta color scheme
- **Mixed Colors** — Alternating green and pink bars
- **Small Size** — Compact eq-sm variant
- **Large Size** — eq-lg variant for hero sections

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="eq-container eq-glow">
  <div class="eq-bar"></div>
  <div class="eq-bar"></div>
  <div class="eq-bar"></div>
  <div class="eq-bar"></div>
  <div class="eq-bar"></div>
  <div class="eq-bar"></div>
  <div class="eq-bar"></div>
  <div class="eq-bar"></div>
</div>
```

## Accessibility

- `prefers-reduced-motion: reduce` freezes all bars at mid-height
- `prefers-color-scheme: light` inverts to light palette
