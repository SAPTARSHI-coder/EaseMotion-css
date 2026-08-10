# CSS Delivery ETA Badge

A responsive delivery estimate badge with a truck indicator, subtle motion, and accessible presentation.

## Features

- Delivery ETA badge
- Truck delivery indicator
- Smooth hover interaction
- Responsive layout
- Semantic HTML
- Visible focus styling
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` — Interactive demonstration
- `style.css` — Component styling
- `README.md` — Documentation

## Usage

```html
<div class="eta-badge" aria-label="Delivery expected tomorrow">
  <span class="truck" aria-hidden="true">▰</span>
  <span>
    <small>Delivery ETA</small>
    <strong>Tomorrow</strong>
  </span>
</div>