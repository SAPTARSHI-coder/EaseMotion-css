# Neon Elastic Gauge — EaseMotion CSS

## What does this do?
The **Neon Elastic Gauge** is a pure HTML and CSS component (no JavaScript) inspired by cyberpunk/neon UI patterns. It renders a 270-degree speedo-style circular gauge that features smooth energy-like background glow breathing, drop-shadow neon accents, dynamic CSS numeric count-up, and an elastic "spring" scale/rotation animation when values change or on hover.

## How is it used?
Integrate the gauge by adding the following structure to your markup:

```html
<div class="ease-elastic-gauge" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <!-- Glowing backplane -->
  <div class="ease-gauge__glow"></div>
  
  <!-- SVG Circular Gauge -->
  <div class="ease-gauge__track">
    <svg viewBox="0 0 100 100">
      <circle class="ease-gauge__track-bg" cx="50" cy="50" r="40" />
      <circle class="ease-gauge__progress" cx="50" cy="50" r="40" />
    </svg>
  </div>
  
  <!-- Overlay Info -->
  <div class="ease-gauge__content">
    <div class="ease-gauge__value">25%</div>
    <div class="ease-gauge__label">System Load</div>
  </div>
</div>
```

To control the value dynamically in a pure CSS environment, use hidden `<input type="radio">` buttons as sibling inputs and toggle state parameters via sibling combinators (`~`).

## Why is it useful?
This component provides a lightweight, performant, and visual-first way of displaying metrics, speeds, load indicators, or progress values in modern dark-themed web interfaces without loading heavy JavaScript charting frameworks. It provides instant visual feedback that feels tactile and alive.

## Configuration (CSS Custom Properties)
You can customize the component's look and feel by overriding the following CSS variables on the `.ease-elastic-gauge` class:

| Custom Property | Default Value | Description |
|---|---|---|
| `--ease-gauge-size` | `220px` | The width and height of the gauge container. |
| `--ease-gauge-border-radius` | `24px` | Border radius of the glassmorphic card wrapper. |
| `--ease-gauge-duration` | `1.2s` | Transition duration of progress changes. |
| `--ease-gauge-easing` | `cubic-bezier(0.34, 1.65, 0.64, 1)` | Elastic spring bezier curve for overshoot. |
| `--ease-gauge-elastic-strength` | `1.08` | Physical scale multiplier during transition pop. |
| `--ease-gauge-glow-intensity` | `1` | Intensity modifier of the backing neon glow. |
| `--ease-gauge-blur-amount` | `14px` | Backdrop filter blur radius. |
| `--ease-gauge-shadow-strength` | `0.55` | Shadows opacity/multiplier. |
| `--ease-gauge-color-progress` | `#00f2fe` | Main active progress color. |
| `--ease-gauge-color-glow` | `rgba(0, 242, 254, 0.35)` | Underlying drop-shadow glow color. |

## Accessibility & SEO Features
- **Semantic ARIA Attributes:** The wrapper uses `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` to present readable metrics to screen readers.
- **Keyboard Navigation:** In the interactive demo, users can navigate focus between option controls using the `Tab` key and select values using `Left` and `Right` Arrow keys.
- **Visible Focus Indicator:** Highlight focus outlines are displayed around labels when keyboard focus is active on their bound radios.
- **Reduced Motion Support:** Respects `prefers-reduced-motion` settings by instantly snapping values, disabling animations, and stripping away container vibrations and text shimmers.
