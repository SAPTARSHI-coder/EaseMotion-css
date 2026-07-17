# CSS Conic Gradient Progress Ring (`ease-conic-progress-ring`)

A pure CSS circular progress ring component that utilizes modern CSS `@property` syntax to smoothly animate `conic-gradient` fills.

## 🚀 Features & EaseMotion Showcase

- **Pure CSS Animation**: Animates custom CSS properties within a conic-gradient without requiring JavaScript recalculations.
- **Modifiers Included**: Demonstrates standard solid fills, smooth gradient sweeps, and underlying track backgrounds.
- **Center Cutout**: Uses a simple CSS `inset` pseudo-element to create the ring thickness cleanly.
- **Customizable**: Built heavily around CSS variables (`--ease-progress-size`, `--ease-progress-thickness`, `--ease-progress-color`).

## 🛠️ Usage

This demo is completely self-contained. Open `demo.html` in your browser.

```html
<!-- Base Usage -->
<div class="ease-conic-progress" style="animation: fill-75 1.5s forwards;">
  <span class="ease-conic-progress__value">75%</span>
</div>
