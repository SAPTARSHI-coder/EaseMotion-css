# ease-ring — Circular / Radial Progress Ring

## What does this do?
An SVG-based circular progress ring component. Set `--ease-ring-progress` (0–100) on the `.ease-ring-fill` SVG circle and the stroke fills automatically. Animated fill on mount via `stroke-dashoffset` transition. Four size variants, five color variants (including gradient), fully accessible with ARIA attributes.

## How to use it

```html
<div class="ease-ring ease-ring-md ease-ring-primary"
     role="progressbar"
     aria-valuenow="75"
     aria-valuemin="0"
     aria-valuemax="100">
  <svg class="ease-ring-svg" viewBox="0 0 120 120">
    <circle class="ease-ring-track" cx="60" cy="60" r="52" />
    <circle class="ease-ring-fill" cx="60" cy="60" r="52"
      style="--ease-ring-progress: 75" />
  </svg>
  <div class="ease-ring-label">
    <span class="ease-ring-value">75%</span>
  </div>
</div>
```

## Update via JavaScript
```js
fill.style.setProperty('--ease-ring-progress', newValue);
ring.setAttribute('aria-valuenow', newValue);
```

## Size variants
| Class | Size |
|-------|------|
| `ease-ring-sm` | 80px |
| `ease-ring-md` | 120px (default) |
| `ease-ring-lg` | 160px |
| `ease-ring-xl` | 200px |

## Color variants
| Class | Color |
|-------|-------|
| `ease-ring-primary` | `--ease-color-primary` (purple) |
| `ease-ring-success` | Green `#22c55e` |
| `ease-ring-warning` | Amber `#f59e0b` |
| `ease-ring-danger` | Red `#ef4444` |
| `ease-ring-gradient` | Purple→pink gradient (requires SVG `<linearGradient>`) |

## CSS Variables (all customizable)
```css
:root {
  --ease-ring-size:        120px;
  --ease-ring-stroke:      8px;
  --ease-ring-track-color: rgba(255,255,255,0.08);
  --ease-ring-fill-color:  var(--ease-color-primary, #6c63ff);
  --ease-ring-duration:    1s;
}
```

## How the math works
The SVG circle has `r="52"`, giving a circumference of `2π×52 ≈ 326.726px`. The `stroke-dasharray` is set to this circumference. The `stroke-dashoffset` is computed as:

```
offset = circumference × (1 − progress/100)
```

In CSS: `calc(326.726 * (1 - var(--ease-ring-progress) / 100))`

At `--ease-ring-progress: 0`, offset equals the full circumference (nothing visible). At `100`, offset is 0 (full circle). The `transition` on `stroke-dashoffset` animates between these states.

## Accessibility
- `role="progressbar"` on the wrapper
- `aria-valuenow`, `aria-valuemin`, `aria-valuemax` attributes
- `aria-label` for context when no visible text label is present
- `prefers-reduced-motion` shortens the fill transition to near-instant
