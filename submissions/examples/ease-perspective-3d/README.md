# CSS 3D Perspective Utilities (`ease-perspective-3d`)

A demonstration of using CSS `perspective` and `transform-style: preserve-3d` to create immersive spatial interactions and flip cards natively in the browser.

## 🚀 Features & EaseMotion Showcase

- **Native 3D Engine**: Avoids heavy WebGL rendering by utilizing the browser's native hardware-accelerated CSS 3D capabilities.
- **`preserve-3d` Context**: Shows how to maintain true 3D spatial relationships between parent and child elements.
- **Interactive Depth**: Demonstrates `translateZ()` to push elements forward, creating realistic parallax tilt effects without JS calculating mouse coordinates.
- **Accessibility Friendly**: Fully integrates `prefers-reduced-motion` to disable the 3D spinning for vestibular safety, and maps `:focus-within` so keyboard users can trigger the flips!

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To create a 3D context, wrap your animating element in a perspective container:
```html
<!-- 1. Establish the camera focal point -->
<div class="ease-perspective-container">
  
  <!-- 2. Tell children to stay in 3D space, not flatten -->
  <div class="card ease-preserve-3d">
    <div class="front">Front</div>
    <div class="back">Back</div>
  </div>

</div>
