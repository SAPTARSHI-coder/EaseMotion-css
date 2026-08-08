# ease-noise

Animated grain/noise texture overlay using SVG feTurbulence and CSS animation. Zero JavaScript required.

## Usage

```html
<!-- Add grain overlay to any element -->
<div class="ease-noise">Content with grain texture</div>

<!-- Heavy grain -->
<div class="ease-noise ease-noise-heavy">Heavy grain</div>
```

The element must have `position: relative` (already set by the class). The grain is rendered via a `::after` pseudo-element with `pointer-events: none`, so it never blocks clicks.

## Intensity Variants

| Class | Opacity |
|---|---|
| `ease-noise-light` | 0.04 |
| `ease-noise` (default) | 0.08 |
| `ease-noise-heavy` | 0.18 |

## Speed Variants

| Class | Speed |
|---|---|
| `ease-noise-fast` | 0.08s |
| `ease-noise` (default) | 0.2s |
| `ease-noise-slow` | 0.5s |
| `ease-noise-static` | No animation |

## Color Tint Variants

| Class | Tint |
|---|---|
| `ease-noise-warm` | Warm sepia tone |
| `ease-noise-cool` | Cool blue tone |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-noise-opacity` | `0.08` | Grain overlay opacity |
| `--ease-noise-size` | `200px` | Grain texture tile size |
| `--ease-noise-speed` | `0.2s` | Animation frame speed |

## How It Works

The `::after` pseudo-element contains an inline SVG data URI with an `feTurbulence` filter generating fractalNoise. The `background-position` shifts rapidly through random offsets on each animation frame (using `steps(1)`) to simulate film grain movement — no JavaScript, no external image files.

## Notes

- Always add `overflow: hidden` to the parent if you need the grain clipped to a border-radius
- The grain sits above content via `z-index: 1` on `::after` — ensure your content has a higher `z-index` if needed
- Works on gradients, images, and solid color backgrounds

## Browser Support

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| SVG filter data URI | yes | yes | yes | yes |
| CSS pseudo-elements | yes | yes | yes | yes |
| prefers-reduced-motion | yes | yes | yes | yes |

## Submission

- **Author:** sudha09-git
- **Issue:** #3853
- **Files:** `style.css`, `demo.html`
