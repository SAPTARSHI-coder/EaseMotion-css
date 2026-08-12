# ease-infinity-figure8

CSS-only infinity figure-8 path loader animation component.

**Issue:** #63189

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--infinity-duration` | `3s` | Animation cycle duration |
| `--infinity-ease` | `cubic-bezier(0.65,0,0.35,1)` | Easing function |
| `--infinity-size` | `120px` | Base loader size |
| `--infinity-stroke` | `#6366f1` | Primary stroke color |
| `--infinity-stroke-alt` | `#a78bfa` | Secondary stroke |
| `--infinity-glow` | `rgba(99,102,241,0.4)` | Glow effect color |
| `--infinity-size-sm` | `80px` | Small variant |
| `--infinity-size-lg` | `180px` | Large variant |

## Variants

- **Path Animation** — infinity symbol traces along a figure-8 path with glow
- **Spin Spinner** — continuous rotation with pulse scaling
- **Particle Trace** — dot follows the infinity curve using offset-path
- **Ripple Rings** — expanding ring pulses emanating from center

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="infinity-loader">...</div>
```

## Accessibility

- `prefers-reduced-motion: reduce` disables all animations
- `prefers-color-scheme: light` inverts to light background
