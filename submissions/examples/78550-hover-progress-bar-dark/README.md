# Hover Progress Bar with Dark Mode Styling

A responsive dark-mode progress bar component with a smooth hover glow interaction.

## Features

- Dark mode styling
- Smooth hover glow effect
- Responsive layout
- Multiple progress values
- CSS-only implementation
- No JavaScript
- No external dependencies
- Semantic progressbar roles
- Keyboard focus support
- Reduced-motion support

## Usage

```html
<div
  class="progress-track"
  tabindex="0"
  role="progressbar"
  aria-label="HTML and CSS progress"
  aria-valuenow="92"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <span
    class="progress-fill"
    style="--progress: 92%;"
  >
    <span class="progress-glow"></span>
  </span>
</div>