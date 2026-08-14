# Tooltip Viewport Overflow Fix

## Description

This submission fixes an issue where tooltips with long content overflow outside the viewport when displayed near the screen edges. The tooltip now wraps text and stays fully visible on desktop and mobile devices.

## Features

- Prevents tooltip overflow
- Responsive maximum width
- Automatic text wrapping
- Pure CSS implementation

## Usage

```html
<button class="tooltip-trigger">
  Hover Me
  <span class="tooltip">
    Long tooltip message...
  </span>
</button>
```

## Benefits

- Improves readability
- Prevents clipped tooltip content
- Responsive across different screen sizes
- Easy to integrate with existing tooltip components