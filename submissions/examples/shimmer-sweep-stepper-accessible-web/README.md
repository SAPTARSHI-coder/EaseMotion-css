# CSS Shimmer-Sweep Stepper — Accessible Web Layout

A pure CSS stepper where the active step's circle shows a light shimmer band sweeping across it, signaling "in progress" beyond color alone.

## CSS Custom Properties

| Property                        | Default    | Description                    |
|-------------------------------------|--------------|--------------------------------------|
| `--ease-stepper-shimmer-duration` | `1.6s`        | Duration of one shimmer sweep cycle  |
| `--ease-stepper-accent`           | `#1d4ed8`     | Active/complete step color            |
| `--ease-stepper-inactive`         | `#d1d5db`     | Inactive step border/line color       |
| `--ease-stepper-text`             | `#111827`     | Label text color                       |
| `--ease-stepper-shimmer-color`    | `rgba(255,255,255,0.7)` | Shimmer band color        |

## Usage

```html
<div class="ease-stepper__step is-active" role="listitem" aria-current="step">
  <div class="ease-stepper__circle">2</div>
  <div class="ease-stepper__label">Shipping</div>
</div>
```

## Accessibility

- `role="list"`/`listitem` with `aria-current="step"` on the active step.
- Distinct border/fill states (not color alone) mark step status.
- `prefers-reduced-motion: reduce` disables the shimmer sweep entirely.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing/colors via CSS custom properties, matching the framework's zero-JS-overhead, animation-first philosophy.
