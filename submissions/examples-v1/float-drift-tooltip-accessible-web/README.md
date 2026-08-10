# CSS Float-Drift Tooltip — Accessible Web Layout

A pure CSS tooltip that, once visible, gently drifts up and down in a slow continuous loop while it remains open.

## CSS Custom Properties

| Property                       | Default    | Description                        |
|-----------------------------------|--------------|----------------------------------------|
| `--ease-tooltip-float-duration` | `3s`          | Duration of one float drift cycle      |
| `--ease-tooltip-drift-distance` | `4px`         | Vertical drift distance                |
| `--ease-tooltip-bg`             | `#111827`     | Tooltip background color                |
| `--ease-tooltip-text`           | `#f9fafb`     | Tooltip text color                      |
| `--ease-tooltip-radius`         | `8px`         | Tooltip corner radius                   |
| `--ease-tooltip-focus-ring`     | `#1d4ed8`     | Focus outline color on the trigger      |

## Usage

```html
<div class="ease-tooltip-wrap">
  <button class="ease-tooltip-trigger" aria-describedby="tooltip1">Hover or Focus Me</button>
  <span class="ease-tooltip" role="tooltip" id="tooltip1">Tooltip text</span>
</div>
```

The tooltip shows on `:hover` and `:focus-within`, and the float animation starts automatically once visible.

## Accessibility

- Uses `role="tooltip"` and `aria-describedby` linking trigger to tooltip content.
- Fully keyboard accessible — `:focus-within` shows the tooltip for keyboard users, not just mouse hover.
- Strong border and high-contrast trigger styling avoid relying on color alone.
- `prefers-reduced-motion: reduce` disables the float animation, keeping the tooltip static once shown.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing/distance via CSS custom properties for easy theming, matching the framework's zero-JS-overhead, animation-first philosophy.
