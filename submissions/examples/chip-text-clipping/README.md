# Chip Text Clipping Fix

## Description

This example prevents long chip labels from being clipped on smaller screens by allowing the chip to wrap its content while remaining responsive.

## Problem

Chip components with lengthy text may clip or overflow on narrow screens, making labels difficult to read.

## Solution

Use a responsive chip with wrapping enabled.

```css
.chip {
  max-width: 100%;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;
}
```

## Benefits

- Prevents text clipping
- Fully responsive
- Supports long labels
- Pure CSS implementation
- Reusable across chips, tags, and badges