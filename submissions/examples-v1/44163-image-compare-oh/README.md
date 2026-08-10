# Component: ease-image-compare-slider

This submission implements the image comparison slider component for GSSoC issue **#44163**.

## Description

An interactive before/after image comparison slider with draggable handle.

## Features

- **Draggable Handle**: Smooth slider control
- **Touch Support**: Works on mobile devices
- **Mouse Support**: Click and drag with mouse
- **Visual Feedback**: Cursor changes on hover
- **Variants**: Horizontal, vertical, and labeled styles
- **Step-by-Step Guide**: How it works explanation

## Usage

```html
<div class="compare-slider">
  <div class="compare-container">
    <div class="compare-after">
      <img src="after.jpg" alt="After">
    </div>
    <div class="compare-before">
      <img src="before.jpg" alt="Before">
    </div>
    <div class="compare-handle">
      <div class="handle-line"></div>
      <div class="handle-button">⟷</div>
    </div>
  </div>
</div>
```

## How It Works

1. **Container Setup**: Parent container with `overflow: hidden`
2. **Before Image**: Clipped by slider position (width %)
3. **After Image**: Full width background layer
4. **Handle**: Absolute positioned draggable divider

## CSS Structure

```css
.compare-slider {
  position: relative;
  overflow: hidden;
}

.compare-before {
  position: absolute;
  width: 50%; /* JS controlled */
  overflow: hidden;
}

.compare-handle {
  position: absolute;
  left: 50%; /* JS controlled */
  transform: translateX(-50%);
}
```

## Variants

### Vertical
```html
<div class="compare-slider vertical">...</div>
```

### With Labels
```html
<div class="compare-slider labeled">...</div>
```

## JavaScript

```javascript
function updateSlider(x) {
  const rect = container.getBoundingClientRect();
  let position = (x - rect.left) / rect.width * 100;
  position = Math.max(0, Math.min(100, position));
  
  beforeImage.style.width = position + '%';
  sliderHandle.style.left = position + '%';
}
```

## Acceptance Criteria

- ✅ Draggable comparison slider
- ✅ Touch and mouse support
- ✅ Visual handle with line
- ✅ Before/after image containers
- ✅ Vertical variant
- ✅ Labeled variant
- ✅ Copy-ready HTML snippets
- ✅ Responsive design
