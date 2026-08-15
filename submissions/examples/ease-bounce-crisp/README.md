# ⚡ Fix ease-bounce Text Blur on Retina Displays

Maintains subpixel text anti-aliasing clarity during transformations on high-DPI screens.

## ✨ What it does
Prevents text elements inside bouncing components from falling into subpixel interpolation gaps, avoiding blurry or artifacted rendering transitions on premium Retina/high-res displays.

## 🚀 How to Use
```html
<div class="ease-bounce-crisp">
  <p>Sharp text during bounce!</p>
</div>