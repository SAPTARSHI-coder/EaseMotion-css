# Animated Circular Progress Bar

A premium pure-CSS animated circular progress indicator using SVG `stroke-dashoffset` animation and CSS custom properties. No JavaScript required for the animation.

---

## Overview

This submission demonstrates the `.ease-progress-circle` component:

- **Animation technique:** SVG `stroke-dasharray` + `stroke-dashoffset` animated via `@keyframes` from fully hidden to the target value.
- **Customisation:** Four CSS custom properties control value, color, size, and animation duration — all settable via inline `style`.
- **Accessibility:** SVG is marked `aria-hidden="true"`, percentage is in a `<span>` with an `aria-label`.
- **Reduced motion:** Respects `prefers-reduced-motion` — animation skips to final state immediately.
- **Size variants:** `.ease-progress-circle--sm` (80px) and `.ease-progress-circle--lg` (160px).

---

## Usage

```html
<div class="ease-progress-circle"
     style="--ease-progress-value: 75;
            --ease-progress-color: #7c3aed;">
  <svg viewBox="0 0 100 100" class="progress-svg" aria-hidden="true">
    <circle class="progress-track" cx="50" cy="50" r="42"/>
    <circle class="progress-fill"  cx="50" cy="50" r="42"/>
  </svg>
  <span class="progress-label" aria-label="75 percent">75%</span>
</div>
```

### CSS Variable Reference

| Variable | Default | Description |
|---|---|---|
| `--ease-progress-value` | `75` | Progress value 0–100 |
| `--ease-progress-color` | `#7c3aed` | Stroke / fill color |
| `--ease-progress-size` | `120px` | Circle diameter |
| `--ease-progress-duration` | `1.4s` | Fill animation duration |
| `--ease-progress-stroke` | `7px` | Ring stroke width |
