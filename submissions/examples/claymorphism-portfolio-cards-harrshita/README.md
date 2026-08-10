# 3D Claymorphism Portfolio Cards

A claymorphism-style portfolio card component for interactive 3D character showcases.

## Features
- Retro window frame with colored control dots
- 3D elevation `translateY` hover effect using `cubic-bezier(spring)` easing
- Three color themes: olive, yellow, purple
- Responsive flex wrapping
- `prefers-reduced-motion` support

## Structure

```html
<div class="avatar-card theme-olive">
  <div class="window-header">
    <span class="character-title">Name</span>
    <div class="window-dots">
      <span class="window-dot dot-purple"></span>
      <span class="window-dot dot-yellow"></span>
      <span class="window-dot dot-green"></span>
    </div>
  </div>
  <div class="card-viewport">
    <!-- 3D iframe or placeholder -->
  </div>
</div>
```
