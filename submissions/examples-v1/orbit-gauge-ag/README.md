# Orbit Gauge

A reusable, data-focused circular progress gauge featuring a subtle orbiting satellite indicator, inspired by modern analytics dashboards.

## Overview

### What does this do?

The Orbit Gauge presents progress, scores, or telemetry metrics using a circular arc and a continuous, lightweight orbiting satellite animation that indicates system activity.

### How is it used?

It is declared as a single-element structure with an inline SVG circular track and progress indicator:

```html
<div
  class="orbit-gauge"
  style="--gauge-value: 75; --gauge-color: var(--ease-color-primary);"
>
  <svg class="gauge-svg" viewBox="0 0 200 200">
    <circle class="gauge-track" cx="100" cy="100" r="80" />
    <circle class="gauge-progress" cx="100" cy="100" r="80" />
  </svg>
  <div class="gauge-orbit-path">
    <div class="gauge-satellite"></div>
  </div>
  <div class="gauge-center">
    <span class="gauge-value-display">75%</span>
    <span class="gauge-label">Memory</span>
  </div>
</div>
```

### Why is it useful?

It fits EaseMotion's philosophy by using clean, human-readable styles and simple CSS custom properties. It delivers a highly responsive, performant, and accessible indicator that communicates active telemetry without depending on heavy third-party JavaScript chart engines.

---

## Features

- **Pure HTML + CSS**: Zero JavaScript required for core rendering and animations.
- **Custom property API**: Customize value, color, orbit speed, and sizing directly in HTML or parent CSS.
- **Theme Adaptability**: Adapts automatically to system prefers-color-scheme or manual `.theme-dark`/`.theme-light` parent classes.
- **Modern Look**: Dark-mode dashboard-focused look using Slate styling, Outfit/Inter typography, and JetBrains Mono fonts.
- **Accessible (A11y)**: Fully supports `role="progressbar"`, `aria-valuenow`, and clear keyboard focus styles.
- **Prefers-Reduced-Motion**: Detects user preferences and slows down the orbital rotation to a minimum.

---

## Folder Structure

```
submissions/examples/orbit-gauge-ag/
├── demo.html        # Interactive demonstration page
├── style.css        # Modular stylesheets and variable defaults
└── README.md        # Technical usage guidelines
```

---

## Customization API

The component can be configured via standard CSS Custom Properties:

| Variable              | Description                                            | Default Value                   |
| --------------------- | ------------------------------------------------------ | ------------------------------- |
| `--gauge-size`        | Diameter of the circular gauge                         | `180px`                         |
| `--gauge-stroke`      | Stroke width of progress and track lines               | `8px`                           |
| `--gauge-value`       | Progress value percentage (0 to 100)                   | `0`                             |
| `--gauge-color`       | Color for progress line, satellite, and highlight glow | `var(--ease-color-primary)`     |
| `--gauge-track-color` | Underlay track circle color                            | `var(--ease-color-neutral-200)` |
| `--orbit-speed`       | Duration of one full orbit rotation                    | `12s`                           |
| `--satellite-size`    | Sizing of the orbiting satellite dot                   | `8px`                           |

---

## Responsive Behavior

The component wraps cleanly in flex and grid layouts. Default size limits ensure columns adjust gracefully on Mobile (`< 640px`), Tablet (`768px`), and Desktop screens.

---

## Accessibility (A11y) Notes

- **Semantic Markup**: Uses `role="progressbar"` to inform screen readers.
- **State Labels**: Employs `aria-valuenow`, `aria-valuemin="0"`, and `aria-valuemax="100"` properties.
- **Reduced Motion**: Under `prefers-reduced-motion: reduce`, animations are slowed down to `40s` per cycle to eliminate motion discomfort.

---

## Integration Notes

Make sure you include the core `easemotion.min.css` in your webpage to inherit base framework tokens, transition speeds, and entry animations like `ease-fade-in`.
