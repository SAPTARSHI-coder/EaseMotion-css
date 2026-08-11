# CSS Zoom-In Tooltip — Accessible Web Layout

A pure CSS tooltip that scales up from a small point into full size when shown, giving a punchy entrance.

## CSS Custom Properties

| Property                      | Default                                | Description                        |
|-----------------------------------|-------------------------------------------|----------------------------------------|
| `--ease-tooltip-zoom-duration`  | `0.25s`                                     | Duration of the zoom-in transition     |
| `--ease-tooltip-zoom-easing`    | `cubic-bezier(0.34, 1.56, 0.64, 1)`        | Overshoot easing curve                  |
| `--ease-tooltip-bg`             | `#111827`                                   | Tooltip background color                |
| `--ease-tooltip-text`           | `#f9fafb`                                   | Tooltip text color                      |
| `--ease-tooltip-radius`         | `8px`                                       | Tooltip corner radius                   |
| `--ease-tooltip-focus-ring`     | `#1d4ed8`                                   | Focus outline color on the trigger      |

## Usage

```html
<div class="ease-tooltip-wrap">
  <button class="ease-tooltip-trigger" aria-describedby="tooltip1">Hover or Focus Me</button>
  <span class="ease-tooltip" role="tooltip" id="tooltip1">Tooltip text</span>
</div>
```

The tooltip shows and zooms in on `:hover` and `:focus-within`.

## Accessibility

- Uses `role="tooltip"` and `aria-describedby` linking trigger to tooltip content.
- Fully keyboard accessible — `:focus-within` shows the tooltip for keyboard users, not just mouse hover.
- Strong border and high-contrast trigger styling avoid relying on color alone.
- `prefers-reduced-motion: reduce` shortens the transition and removes the scale effect, keeping a quick fade only.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing/easing via CSS custom properties for easy theming, matching the framework's zero-JS-overhead, animation-first philosophy.
