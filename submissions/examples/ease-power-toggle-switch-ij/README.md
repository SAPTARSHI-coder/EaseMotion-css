# Power Toggle Switch

A power/on-off toggle switch component with a glow effect. The toggle slides between on/off positions with an animated handle, and the on state features a pulsing glow. Includes SVG power icons and multiple style variants (default, slim, large, neon).

## Features

- Smooth slide animation with `translateX` on the handle
- Glow effect using `box-shadow` with a pulse keyframe
- SVG power icons that swap between off/on states
- Four built-in style variants
- Customizable via CSS custom properties

## Usage

```html
<link rel="stylesheet" href="style.css">
```

```html
<div class="pot-toggle" data-variant="default">
  <div class="pot-track">
    <div class="pot-handle">
      <!-- icons -->
    </div>
  </div>
</div>
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--pot-duration` | `0.35s` | Toggle transition duration |
| `--pot-toggle-bg` | `#1e293b` | Component background context |
| `--pot-on-color` | `#22c55e` | On state color |
| `--pot-off-color` | `#64748b` | Off state color |
| `--pot-handle-color` | `#ffffff` | Handle knob color |
| `--pot-glow-color` | `rgba(34,197,94,0.6)` | Glow shadow color |

## Variants

- **Default** — standard rounded toggle
- **Slim** — narrower track and smaller handle
- **Large** — bigger toggle for emphasis
- **Neon** — transparent track with glowing border

## License

MIT
