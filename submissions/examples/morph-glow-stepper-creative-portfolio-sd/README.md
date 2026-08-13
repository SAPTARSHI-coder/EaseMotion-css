# Morph-Glow Stepper

CSS-only stepper with smooth morph-glow animation on the active step.

## Usage

```html
<ol class="morph-glow-stepper">
  <li class="step active">Ideate</li>
  <li class="step">Create</li>
  <li class="step">Launch</li>
</ol>
```

Add `.active` to the current step.

## CSS Custom Properties

| Property                 | Default                        | Description         |
| ------------------------ | ------------------------------ | ------------------- |
| `--stepper-duration`     | `0.35s`                        | Animation duration  |
| `--stepper-easing`       | `cubic-bezier(0.4, 0, 0.2, 1)` | Animation easing    |
| `--stepper-accent-color` | `#6d28d9`                      | Active step color   |
| `--stepper-glow-color`   | `rgba(109, 28, 217, 0.35)`     | Glow shadow color   |
| `--stepper-size`         | `2.75rem`                      | Step indicator size |

## Why?

Lightweight, pure CSS, responsive, honors reduced motion, and easy to theme via custom properties.
