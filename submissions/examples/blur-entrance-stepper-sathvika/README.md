# CSS Blur-Entrance Stepper

A step progress indicator where each step node blurs into focus on load, staggered slightly per step.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-stepper-duration` | `0.4s` | Entrance animation duration |
| `--ease-stepper-blur` | `8px` | Starting blur amount |
| `--ease-stepper-accent` | `#4f46e5` | Active step color |

## Usage
```html
<div class="ease-stepper" role="list" aria-label="Progress steps">
  <span class="ease-stepper__step ease-stepper__step--active" aria-current="step">1</span>
  <span class="ease-stepper__connector"></span>
  <span class="ease-stepper__step">2</span>
</div>
```

## Accessibility
`role="list"`/`listitem` and `aria-current="step"` on the active node communicate progress state to screen readers. `prefers-reduced-motion` removes the blur, using a fast opacity fade instead.

## Why it fits EaseMotion CSS
Pure CSS `filter: blur()` entrance technique, `ease-` prefixed classes, themeable, zero dependencies.
