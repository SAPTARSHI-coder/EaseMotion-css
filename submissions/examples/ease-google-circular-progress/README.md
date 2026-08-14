## Google Circular Progress
Segmented radial loading indicator with Google colors perfectly wrapped around the circle. Each segment animates independently creating a smooth spinning effect.

## Features
- 4 Google color segments wrapped around the circle
- Smooth segment animation with stroke-dashoffset
- Multiple size variants (small, medium, large)
- Solid color variants (blue, red, yellow, green)
- Animation speed variants (slow, normal, fast)
- Pure CSS, no JavaScript required
- Reduced motion accessibility support

## Usage

### Basic Usage
```html
<div class="circular-progress">
  <svg viewBox="0 0 40 40">
    <circle class="bg-ring" cx="20" cy="20" r="16" />
    <circle class="segment segment-blue" cx="20" cy="20" r="16" />
    <circle class="segment segment-red" cx="20" cy="20" r="16" />
    <circle class="segment segment-yellow" cx="20" cy="20" r="16" />
    <circle class="segment segment-green" cx="20" cy="20" r="16" />
  </svg>
</div>