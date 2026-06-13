# Image Comparison Slider — Issue #7412

## Overview

Before/after image comparison slider with a draggable handle. Uses clip-based reveal, smooth drag behavior, touch support, and ARIA accessibility.

## Features

- Drag handle or click anywhere to compare
- Smooth resize transition
- Touch-friendly (mobile)
- ARIA slider role with valuemin/valuemax/valuenow
- Before/after text labels
- Circular handle with arrow indicators
- Keyboard focusable

## Usage

```html
<div class="img-comp-container" role="slider" tabindex="0"
     aria-label="Before and after image comparison"
     aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
  <div class="img-comp-img img-comp-before">
    <img src="before.jpg" alt="Before">
  </div>
  <div class="img-comp-img img-comp-after">
    <img src="after.jpg" alt="After">
  </div>
  <div class="img-comp-handle">
    <span class="handle-arrows">‹›</span>
  </div>
</div>
```

## Files

- `demo.html` — Interactive comparison with placeholder images
- `style.css` — Slider layout, handle, labels, responsive
- `README.md` — This documentation
