# Ease Cursor — Animated CSS Cursor Follower

**Implements:** #2732

---

## Overview

Adds a smooth animated custom cursor follower using CSS and minimal
JavaScript. Replaces the default browser cursor with a small dot and
a lagging ring that follows mouse movement with a premium feel.

## Classes

| Class                  | Effect                                |
| ---------------------- | ------------------------------------- |
| `.ease-cursor-dot`     | Small 8px solid cursor dot            |
| `.ease-cursor-ring`    | Larger outlined ring that lags behind |
| `.ease-cursor-blend`   | Mix-blend-mode difference effect      |
| `.ease-cursor-grow`    | Ring grows over hoverable elements    |
| `.ease-cursor-primary` | Uses --ease-color-primary             |
| `.ease-cursor-hidden`  | Hides default system cursor           |

## How to Use

```html
<!-- Add to body -->
<div class="ease-cursor-dot" id="cursorDot"></div>
<div class="ease-cursor-ring" id="cursorRing"></div>

<!-- Ring grows automatically on hover -->
<a href="#" class="ease-cursor-grow">Hover me</a>
```

## How to Test

1. Open `demo.html` in any modern browser
2. Move your mouse around the page
3. Hover over the button — the ring grows smoothly
4. The dot follows instantly, the ring lags for a premium feel

## Browser Support

| Browser | Minimum Version |
| ------- | --------------- |
| Chrome  | 80+             |
| Firefox | 80+             |
| Safari  | 14+             |
| Edge    | 80+             |
