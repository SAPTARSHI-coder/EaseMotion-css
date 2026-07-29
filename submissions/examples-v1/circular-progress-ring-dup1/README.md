# Circular Progress Ring

An SVG-based circular progress ring (donut/radial progress) with stroke-dasharray animation — pure CSS.

## Features
- SVG circle with stroke-dasharray/stroke-dashoffset for progress
- Custom properties: `--ease-ring-value` (0-100), `--ease-ring-size`, `--ease-ring-stroke-width`, `--ease-ring-color`
- Centered percentage label
- Smooth animated transition on value change
- Color variants matching existing progress bar pattern

## Expected Classes
- `.ease-progress-ring` — SVG container
- `.ease-progress-ring-svg` — SVG element
- `.ease-progress-ring-track` — background track circle
- `.ease-progress-ring-fill` — colored progress arc
- `.ease-progress-ring-label` — center percentage display

## Usage
```html
<div class="ease-progress-ring" style="--ease-ring-value: 75; --ease-ring-color: #eab308;">
  <svg class="ease-progress-ring-svg" viewBox="0 0 120 120">
    <circle class="ease-progress-ring-track" cx="60" cy="60" r="50"></circle>
    <circle class="ease-progress-ring-fill" cx="60" cy="60" r="50"></circle>
  </svg>
  <span class="ease-progress-ring-label">75%</span>
</div>
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS + inline SVG, no JavaScript
