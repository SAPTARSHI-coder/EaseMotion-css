# Animated Progress Bars

A tiny, dependency‑free module that adds **smooth, animated progress bars** to any web page.  
Three ready‑made styles are included:

| Class | Visual style | Typical use |
|------|--------------|-------------|
| `.progress-bar` (plain) | Solid primary colour | Simple completion indicator |
| `.progress-bar.striped` | Diagonal animated stripes | Loading / processing states |
| `.progress-bar.multi` | Multi‑colour gradient | Dashboard stats, “premium” progress |

## Demo

Open `demo.html` in a browser – you’ll see three bars (70 %, 85 %, 60 %) with their respective animations.

## How to use

```html
<link rel="stylesheet" href="path/to/progress-bars/style.css">

<div class="progress-container">
  <div class="progress-bar" data-progress="45%">45%</div>
</div>

<!-- Striped version -->
<div class="progress-container striped">
  <div class="progress-bar striped" data-progress="78%">78%</div>
</div>

<!-- Gradient version -->
<div class="progress-container multicolor">
  <div class="progress-bar multi" data-progress="92%">92%</div>
</div>