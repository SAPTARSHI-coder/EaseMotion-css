# Animated Progress Bar (Skew Style)

A reusable, neon-inspired progress bar built with pure CSS. It features a skewed layout with animated stripes and is suitable for dashboards, loading indicators, and system status panels.

## Features

- Pure CSS implementation (no JavaScript)
- Animated striped progress fill using `.ease-progress-stripe`
- Skew-style modern UI
- Responsive layout
- Accessible with `role="progressbar"` and ARIA attributes

## Usage

```html
<div
  class="skew-progress-bar"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="skew-progress-fill ease-progress-stripe" style="width:75%;"></div>
</div>