# Ripple-Wave Stepper

CSS-only stepper with a subtle ripple-wave effect on the active step.

## Usage

```html
<ol class="ripple-wave-stepper">
  <li class="step active">Ideate</li>
  <li class="step">Create</li>
  <li class="step">Launch</li>
</ol>
```

Add `.active` to the current step.

## CSS Custom Properties

| Property                 | Default       | Description         |
| ------------------------ | ------------- | ------------------- |
| `--stepper-duration`     | `0.35s`       | Animation duration  |
| `--stepper-easing`       | `ease-in-out` | Animation easing    |
| `--stepper-accent-color` | `#d946ef`     | Active step color   |
| `--stepper-ripple-size`  | `1.25rem`     | Ripple ring radius  |
| `--stepper-size`         | `2.75rem`     | Step indicator size |

## Why?

Lightweight, pure CSS, responsive, honors reduced motion, and easy to theme via custom properties.
