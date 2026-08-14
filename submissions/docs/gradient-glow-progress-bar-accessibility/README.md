# Gradient Glow Progress Bar

An accessible gradient progress bar with a glowing visual effect.

## Features

- Gradient progress indicator
- Customizable CSS variables
- Semantic `progressbar` ARIA role
- Screen-reader friendly progress value
- Responsive design
- Reduced-motion support

## Basic Usage

Add the following markup:

```html
<div
  class="progress-bar"
  role="progressbar"
  aria-label="Project completion"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="75"
>
  <div class="progress-bar__fill" style="width: 75%;"></div>
</div>