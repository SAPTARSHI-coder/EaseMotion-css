# Toast Notification Overflow Fix

## Description

This example prevents toast notifications from overflowing the viewport on smaller screens by using a responsive width and proper text wrapping.

## Problem

Toast notifications with long messages or fixed widths can extend beyond the viewport, making part of the notification difficult to read or dismiss on mobile devices.

## Solution

Use a responsive width together with text wrapping.

```css
.toast {
  max-width: 340px;
  width: calc(100% - 40px);
  overflow-wrap: break-word;
  word-break: break-word;
}

@media (max-width: 480px) {
  .toast {
    left: 20px;
    right: 20px;
    width: auto;
    max-width: none;
  }
}
```

## Benefits

- Prevents horizontal overflow
- Mobile-friendly layout
- Long messages wrap correctly
- Lightweight CSS-only solution