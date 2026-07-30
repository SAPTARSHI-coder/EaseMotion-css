# Tooltip Clipping Fix

## Description

This submission fixes an issue where tooltips become clipped when displayed inside parent containers. The tooltip is positioned above the trigger element with a high stacking order, ensuring it remains fully visible.

## Features

- Prevents tooltip clipping
- Responsive tooltip layout
- Proper positioning with absolute placement
- High z-index for visibility
- Pure CSS implementation

## Usage

```html
<button class="tooltip-btn">
  Hover Me
  <span class="tooltip">
    Tooltip text
  </span>
</button>
```

## Benefits

- Tooltip remains fully visible
- Improves usability
- Responsive across screen sizes
- Lightweight and easy to integrate