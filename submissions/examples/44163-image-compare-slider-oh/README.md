# Component: ease-image-compare-slider

This submission implements the `ease-image-compare-slider` component for GSSoC issue **#44163**.

## Description

An image comparison slider component that allows users to compare before/after images by dragging a slider handle. Perfect for photo editing, filters, and enhancement showcases.

## Usage

```html
<div class="ease-compare-slider">
  <div class="compare-container">
    <img src="after.jpg" alt="After" class="compare-after">
    <div class="compare-before" style="width: 50%;">
      <img src="before.jpg" alt="Before" class="compare-img">
      <div class="compare-label compare-label-left">Before</div>
    </div>
    <div class="compare-slider" style="left: 50%;">
      <div class="slider-line"></div>
      <div class="slider-handle">
        <!-- Arrow icons -->
      </div>
    </div>
    <div class="compare-label compare-label-right">After</div>
  </div>
  <input type="range" min="0" max="100" value="50" class="compare-range" oninput="updateCompare(this)">
</div>
```

### JavaScript

```javascript
function updateCompare(range) {
  const slider = range.parentElement;
  const before = slider.querySelector('.compare-before');
  const compareSlider = slider.querySelector('.compare-slider');
  const value = range.value;
  
  before.style.width = value + '%';
  compareSlider.style.left = value + '%';
}
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--compare-radius` | `12px` | Border radius |

## Features

- Drag slider to compare before/after images
- Smooth animation on drag
- Before/After labels
- Centered slider handle with arrows
- Hover effects on handle
- Rounded corners
- Pure HTML/CSS with minimal JavaScript

## Use Cases

- Photo enhancement comparisons
- Before/after restorations
- Filter previews
- Image editing showcases
- Real estate property comparisons

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Drag to compare images
- ✅ Smooth animation on interaction
- ✅ Before/After labels
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
