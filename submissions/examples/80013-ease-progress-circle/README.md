# Animated Circular Progress Bar Component (`ease-progress-circle`)

A pure HTML + SVG + Vanilla CSS animated circular progress indicator component using SVG `stroke-dasharray` and `stroke-dashoffset` (`@keyframes ease-progress-circle-draw`), configurable progress values (`0-100`), center percentage labels, ARIA progressbar semantics, light/dark theme adaptation, and full accessibility support.

## Features

- **Pure HTML + SVG + CSS**: 100% responsive circular progress bar without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **SVG Stroke Dashoffset Keyframe Drawing**: Uses SVG `<circle>` with radius 40 (circumference \( C \approx 251.33 \)), `stroke-dasharray: 251.33`, and target progress offset `calc(251.33 * (1 - var(--ease-progress-value) / 100))` animated via `@keyframes ease-progress-circle-draw`.
- **CSS Custom Properties API**:
  - `--ease-progress-value`: `0-100` (e.g. `75`)
  - `--ease-progress-color`: progress color (e.g. `#0284c7`)
  - `--ease-progress-size`: component size (e.g. `160px`)
  - `--ease-progress-duration`: animation duration (e.g. `1.8s`)
- **100% Accessible**: Built using ARIA progressbar attributes (`role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`), screen-reader labels, and readable center percentage text. Keyboard focus support (`:focus-visible`).
- **Responsive & Mobile Ready**: Scalable SVG circles adjust fluidly down to mobile viewports (320px–1440px+) without horizontal scrollbars.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML + SVG:

```html
<div
  class="ease-progress-circle"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Project completion progress: 75%"
  style="--ease-progress-value: 75; --ease-progress-color: #0284c7;"
>
  <svg class="progress-svg" viewBox="0 0 100 100" aria-hidden="true">
    <circle class="progress-track" cx="50" cy="50" r="40"></circle>
    <circle class="progress-bar" cx="50" cy="50" r="40"></circle>
  </svg>
  <div class="progress-label">
    <span class="progress-value">75%</span>
    <span class="progress-sublabel">Project Complete</span>
  </div>
</div>
```

### Customization Variables

```css
.ease-progress-circle {
  --ease-progress-value: 85;
  --ease-progress-color: #10b981;
  --ease-progress-size: 180px;
  --ease-progress-duration: 2s;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/80013-ease-progress-circle/demo.html) directly in any modern web browser to interact with the animated circular progress bar component offline.
