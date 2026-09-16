# Circular Progress Indicator (`ease-progress-circular`)

A lightweight, zero-dependency SVG circular/ring progress component built for the EaseMotion-css framework.

## 🚀 Features

- **SVG Based**: Uses native SVG circles with `stroke-dasharray` and `stroke-dashoffset` for pixel-perfect rendering at any size.
- **CSS Variable Driven**: The progress percentage is controlled purely via a single CSS variable (`--ease-progress-value`).
- **Smooth Animations**: Uses `cubic-bezier` transitions for smooth fill animations when the value updates dynamically.
- **Zero JavaScript Required**: The core component operates solely on CSS variables and HTML layout (JS is only used in the demo to dynamically move the slider).
- **Responsive Sizes**: Includes variants for Small (`.ease-progress-sm`), Medium (default), and Large (`.ease-progress-lg`).
- **Theme Variants**: Pre-configured colors for `.ease-progress-success`, `.ease-progress-warning`, and `.ease-progress-danger`.

## 🛠️ Usage

Wrap the SVG structure inside a container div with the `.ease-progress-circular` class. Control the fill percentage by setting `--ease-progress-value` inline.

```html
<div class="ease-progress-circular" style="--ease-progress-value: 75;">
  <svg viewBox="0 0 100 100">
    <circle class="ease-progress-bg" cx="50" cy="50" r="45"></circle>
    <circle class="ease-progress-value" cx="50" cy="50" r="45"></circle>
  </svg>
  <span class="ease-progress-text">75%</span>
</div>
