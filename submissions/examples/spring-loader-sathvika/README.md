# Ease Spring Loader

A three-dot loading indicator where each dot bounces with a spring-style overshoot easing curve, staggered slightly per dot.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-spring-duration` | `1.2s` | Bounce cycle duration |
| `--ease-spring-easing` | `cubic-bezier(0.68, -0.55, 0.27, 1.55)` | Spring overshoot curve |
| `--ease-spring-color` | `#4f46e5` | Dot color |
| `--ease-spring-size` | `48px` | Loader container size |

## Usage
```html
<div class="ease-spring-loader" role="status" aria-label="Loading">
  <span class="ease-spring-loader__dot"></span>
  <span class="ease-spring-loader__dot"></span>
  <span class="ease-spring-loader__dot"></span>
</div>
```

## Accessibility
`role="status"` and `aria-label="Loading"` announce state to screen readers. `prefers-reduced-motion` slows the animation rather than removing it entirely, since loaders need to still convey "in progress."

## Why it fits EaseMotion CSS
Pure CSS keyframe animation, `ease-` prefixed classes, fully themeable via custom properties, zero dependencies.
