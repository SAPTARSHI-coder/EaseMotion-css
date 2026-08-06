# CSS Float-Drift Badge — Accessible Web Layout

A pure CSS badge that gently drifts up and down in a slow, continuous loop, drawing subtle attention without being distracting.

## CSS Custom Properties

| Property                      | Default    | Description                        |
|-----------------------------------|--------------|----------------------------------------|
| `--ease-badge-float-duration`   | `3s`          | Duration of one float drift cycle      |
| `--ease-badge-drift-distance`   | `4px`         | Vertical drift distance                |
| `--ease-badge-bg`               | `#1d4ed8`     | Badge background color                  |
| `--ease-badge-text`             | `#ffffff`     | Badge text color                        |
| `--ease-badge-border`           | `#1e40af`     | Badge border color                      |
| `--ease-badge-radius`           | `999px`       | Badge corner radius (pill shape)        |
| `--ease-badge-focus-ring`       | `#1d4ed8`     | Focus outline color                     |

## Usage

```html
<span class="ease-badge" role="status">✓ Accessible</span>
```

The float animation runs continuously by default.

## Accessibility

- `role="status"` allows the badge to announce its content to screen readers when used for live status.
- Bold 2px border ensures visibility without relying on background color contrast alone.
- Focusable badges (if used as buttons/links) get a visible `:focus-visible` outline.
- `prefers-reduced-motion: reduce` disables the float animation entirely.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing/distance via CSS custom properties for easy theming, matching the framework's zero-JS-overhead, animation-first philosophy.
