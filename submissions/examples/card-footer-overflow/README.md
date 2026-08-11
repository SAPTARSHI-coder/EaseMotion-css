# Card Footer Overflow Fix

## Description

This example prevents card footer action buttons from overflowing on smaller screens by allowing them to wrap into multiple rows.

## Problem

When several buttons are placed in a card footer, they may extend outside the card on narrow screens, making the layout look broken.

## Solution

The footer uses a flexible layout with wrapping enabled.

```css
.card-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.card-footer button {
  flex: 1 1 120px;
}
```

## Benefits

- Prevents horizontal overflow
- Responsive on mobile devices
- Keeps all buttons visible
- Lightweight CSS-only solution