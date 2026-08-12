# 3D Glassmorphism Flip Card (`ease-3d-glass-tilt-is`)

An interactive 3D perspective flip card featuring a frosted glassmorphism texture, smooth 180° rotation, and GPU-accelerated CSS transforms.

## Features

- **3D Perspective Flip**: Utilizes `perspective: 1000px` and `transform-style: preserve-3d` for lifelike depth.
- **Frosted Glass Texture**: Uses `backdrop-filter: blur(16px)` and subtle inset border highlights.
- **Pure CSS**: Zero JavaScript required for 3D flip interaction.
- **GPU Accelerated**: Runs hardware-accelerated animations at 60 FPS using `will-change` and `transform`.

## Quick Usage

```html
<div class="card-scene">
  <div class="ease-3d-card">
    <!-- Front Face -->
    <div class="card-face card-face-front">
      <h2>Front Title</h2>
    </div>
    <!-- Back Face -->
    <div class="card-face card-face-back">
      <h2>Back Details</h2>
    </div>
  </div>
</div>
```

## Why it Fits EaseMotion CSS

- **Animation-First Philosophy**: Adds impressive 3D interactive depth to cards, pricing tables, and feature showcases.
- **Lightweight & Composable**: Written in clean, modular vanilla CSS with zero external dependencies.

## Browser Support

- Chrome 76+
- Firefox 70+
- Safari 13.1+
- Edge 79+
