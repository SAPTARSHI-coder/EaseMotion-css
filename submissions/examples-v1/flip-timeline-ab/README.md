# Flip Timeline — Dark Mode

**Implements:** #41510

---

## Overview

A CSS flip timeline component with 3D card flip animations on hover, dark mode styling, and animated dot indicators. Zero JavaScript required.

## Features

- 3D flip card on hover using CSS transform
- Animated glowing dot indicators
- Vertical timeline with gradient line
- Dark mode design
- prefers-reduced-motion support
- Responsive

## Usage

```html
<div class="ft-card ease-flip-3d">
  <div class="ft-card-inner ease-flip-3d-inner">
    <div class="ft-card-front ease-flip-3d-face">Front content</div>
    <div class="ft-card-back ease-flip-3d-back">Back content</div>
  </div>
</div>
```

## How to Preview

Open `demo.html` in any modern browser. Hover each card to see the flip animation.

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+