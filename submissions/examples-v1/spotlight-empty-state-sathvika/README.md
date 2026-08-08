# Ease Spotlight Empty State

An empty-state block with a soft, slowly-sweeping radial "spotlight" glow drifting across the background.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-spotlight-duration` | `3s` | Sweep cycle duration |
| `--ease-spotlight-color` | `rgba(79, 70, 229, 0.15)` | Spotlight glow color |
| `--ease-spotlight-bg` | `#fafafa` | Container background |

## Usage
```html
<div class="ease-empty-state">
  <div class="ease-empty-state__icon">📭</div>
  <div class="ease-empty-state__title">No results found</div>
  <div class="ease-empty-state__body">Try adjusting your filters or search terms.</div>
</div>
```

## Accessibility
Purely decorative background animation via `::before` with `pointer-events: none`, doesn't interfere with content or screen readers. `prefers-reduced-motion` freezes the spotlight in place.

## Why it fits EaseMotion CSS
Pure CSS radial-gradient sweep animation, `ease-` prefixed classes, themeable, zero dependencies.
