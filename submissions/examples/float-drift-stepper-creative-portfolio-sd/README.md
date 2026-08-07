# Float-Drift Stepper

CSS-only stepper with a gentle float-drift motion on the active step.

## Usage

```html
<ol class="float-drift-stepper">
  <li class="step active">Ideate</li>
  <li class="step">Create</li>
  <li class="step">Launch</li>
</ol>
```

Add `.active` to the current step.

## CSS Custom Properties

| Property                   | Default   | Description           |
| -------------------------- | --------- | --------------------- |
| `--stepper-duration`       | `0.4s`    | Animation duration    |
| `--stepper-easing`         | `ease`    | Animation easing      |
| `--stepper-accent-color`   | `#0891b2` | Active step color     |
| `--stepper-drift-distance` | `6px`     | Upward float distance |
| `--stepper-size`           | `2.75rem` | Step indicator size   |

## Why?

Lightweight, pure CSS, responsive, honors reduced motion, and easy to theme via custom properties.
