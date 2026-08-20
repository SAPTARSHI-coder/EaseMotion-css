# ⚡ Ease Spotlight Hover Card Effect

A premium card component for EaseMotion CSS featuring an immersive radial-gradient flashlight or torch effect that maps smoothly to cursor coordinate transformations.

## ✨ What it does
Tracks active pointer positions across target containers, matching raw relative spatial values with internal CSS custom properties (`--x`, `--y`). This feeds directly into a localized hardware-accelerated background layer mask, rendering micro-lighting gradients dynamically at 60fps.

## 🚀 How to Use
Add the structural layout class markers into your custom markup grid architectures:

```html
<div class="ease-spotlight-card">
  <div class="ease-spotlight-card__glow"></div>
  
  <div class="ease-spotlight-card__content">
    <h3>Premium Component Card</h3>
    <p>Move your cursor across this interface.</p>
  </div>
</div>