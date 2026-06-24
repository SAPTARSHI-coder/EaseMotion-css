# Progress Bar Component

**Implements:** #6581

---

## Overview

A flexible progress bar component supporting determinate (value-based)
and indeterminate (loading) states, with color variants for success
and danger contexts.

## Classes

| Class | Effect |
|-------|--------|
| `.ease-progress` | Track/container element |
| `.ease-progress-bar` | Filled bar, set width inline for determinate progress |
| `.ease-progress-bar-success` | Green variant |
| `.ease-progress-bar-danger` | Red variant |
| `.ease-progress-indeterminate` | Animated sliding bar for unknown-duration loading |

## How to Use

```html
<!-- Determinate -->
<div class="ease-progress" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
  <div class="ease-progress-bar" style="width: 65%;"></div>
</div>

<!-- Indeterminate -->
<div class="ease-progress" role="progressbar">
  <div class="ease-progress-bar ease-progress-indeterminate"></div>
</div>
```

## How to Test

1. Open `demo.html` in any modern browser
2. Observe the three determinate bars at different widths and colors
3. Observe the indeterminate bar sliding continuously

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 80+            |
| Firefox | 80+            |
| Safari  | 14+            |
| Edge    | 80+            |