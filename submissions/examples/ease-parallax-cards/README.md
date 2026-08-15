# ⚡ Ease Parallax Scroll Cards Component

A high-performance visual depth component for EaseMotion CSS that maps spatial element translation offsets against layout scroll vectors.

## ✨ What it does
The component captures page scrolling loops passively and reads customizable speed multipliers (`--parallax-speed`) mapped onto specific CSS template tokens. This allows layout nodes positioned side-by-side inside the same parent container to step upwards at entirely independent rates, mimicking premium physical lenses.

## 🚀 How to Use
```html
<div class="ease-parallax-grid">
  <div class="ease-parallax-card ease-parallax-card--slow">
    <h3>Slow Layer Content</h3>
  </div>
  <div class="ease-parallax-card ease-parallax-card--normal">
    <h3>Standard Midground Content</h3>
  </div>
  <div class="ease-parallax-card ease-parallax-card--fast">
    <h3>Fast Foreground Accent</h3>
  </div>
</div>