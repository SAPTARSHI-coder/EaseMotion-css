# Ease Firefly Toast

A toast notification with a soft, pulsing "firefly" glow dot and an ambient box-shadow flicker, evoking a firefly's glow.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-firefly-duration` | `0.5s` | Entrance animation duration |
| `--ease-firefly-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrance easing curve |
| `--ease-firefly-glow` | `#fde047` | Glow/dot color |
| `--ease-firefly-bg` | `#1f2937` | Toast background |

## Usage
```html
<div class="ease-toast" role="status">
  <span class="ease-toast__dot"></span>
  Changes saved successfully
</div>
```

## Accessibility
`role="status"` for screen reader announcement. `prefers-reduced-motion` disables the ambient glow/pulse, keeping only a quick fade-in.

## Why it fits EaseMotion CSS
Pure CSS, `ease-` prefixed classes, themeable via custom properties, zero dependencies.
