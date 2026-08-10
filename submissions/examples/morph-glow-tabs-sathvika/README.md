# CSS Morph-Glow Tabs

Tabs with a sliding, pulsing-glow indicator that morphs its width/position between tabs with spring easing.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-tabs-glow` | `#4f46e5` | Indicator/glow color |
| `--ease-tabs-duration` | `0.4s` | Text color transition duration |

## Usage
```html
<div class="ease-tabs" role="tablist">
  <div class="ease-tabs__indicator"></div>
  <button class="ease-tabs__tab ease-tabs__tab--active" role="tab" aria-selected="true">Overview</button>
  <button class="ease-tabs__tab" role="tab" aria-selected="false">Details</button>
</div>
```
Minimal JS repositions/resizes the indicator via `offsetLeft`/`offsetWidth` on click; the morph and glow animation itself is CSS.

## Accessibility
`role="tablist"`/`tab`/`aria-selected` reflect state. `prefers-reduced-motion` disables the ambient glow pulse (the position transition remains, since it conveys state change).

## Why it fits EaseMotion CSS
Pure CSS spring-easing morph + glow pulse, `ease-` prefixed classes, themeable.
