# Alert Message Overflow Fix

## Description

This example demonstrates how to prevent long alert messages from overflowing on smaller screens.

## Problem

Long words or lengthy alert messages may extend outside the alert container, reducing readability and breaking the layout.

## Solution

Apply responsive text wrapping:

```css
.alert {
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}
```

## Benefits

- Prevents text overflow
- Improves readability
- Mobile-friendly
- CSS-only solution