# CSS Skew-Active Stepper — Accessible Web Layout

A pure CSS stepper where the active step's circle straightens from a skewed state and fills solid, giving a strong, non-color-dependent cue for the current step.

## CSS Custom Properties

| Property                       | Default    | Description                        |
|-----------------------------------|--------------|----------------------------------------|
| `--ease-stepper-skew-duration`  | `0.5s`        | Duration of the skew/fill transition   |
| `--ease-stepper-skew-easing`    | `ease-out`    | Easing curve for the transition        |
| `--ease-stepper-skew-angle`     | `-10deg`      | Initial skew angle of inactive circles |
| `--ease-stepper-accent`         | `#1d4ed8`     | Active/complete step color             |
| `--ease-stepper-inactive`       | `#d1d5db`     | Inactive step border/line color        |
| `--ease-stepper-text`           | `#111827`     | Label text color                        |

## Usage

```html
<div class="ease-stepper" role="list" aria-label="Checkout steps">
  <div class="ease-stepper__step is-complete" role="listitem">
    <div class="ease-stepper__circle">✓</div>
    <div class="ease-stepper__label">Cart</div>
  </div>
  <div class="ease-stepper__line"></div>
  <div class="ease-stepper__step is-active" role="listitem" aria-current="step">
    <div class="ease-stepper__circle">2</div>
    <div class="ease-stepper__label">Shipping</div>
  </div>
</div>
```

Add `is-active` or `is-complete` classes to `.ease-stepper__step` to trigger state transitions.

## Accessibility

- `role="list"`/`role="listitem"` with `aria-current="step"` on the active step for screen readers.
- Distinct border/fill states (not just color) so step status doesn't rely on color alone.
- `prefers-reduced-motion: reduce` disables the skew transform, keeping simple color/border transitions.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing/easing/skew angle via CSS custom properties for easy theming, matching the framework's zero-JS-overhead, animation-first philosophy.
