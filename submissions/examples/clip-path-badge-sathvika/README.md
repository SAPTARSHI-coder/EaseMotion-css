# Ease Clip Path Badge

A badge with an angled parallelogram shape via `clip-path`, which straightens into a rectangle on hover.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-badge-duration` | `0.4s` | Transition duration |
| `--ease-badge-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring-style easing |
| `--ease-badge-bg` | `#4f46e5` | Badge background |
| `--ease-badge-text` | `#ffffff` | Text color |

## Usage
```html
<span class="ease-badge">NEW</span>
```

## Accessibility
Plain inline text element, fully readable by screen readers with no extra markup needed. `prefers-reduced-motion` disables the shape transition.

## Why it fits EaseMotion CSS
Pure CSS `clip-path` technique, `ease-` prefixed classes, themeable, zero dependencies.
