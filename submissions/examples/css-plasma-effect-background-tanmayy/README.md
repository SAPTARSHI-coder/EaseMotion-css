# CSS Plasma Effect Background

A pure-CSS implementation of a fluid, organic, color-shifting background. This component simulates complex particle/fluid dynamics without the need for WebGL, Canvas, SVG filters, or JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component creates a mesmerizing background effect that looks like slow-moving plasma, aurora borealis, or lava lamps. As the background slowly shifts, a beautiful frosted-glass (glassmorphism) foreground card rests on top, providing a striking visual contrast between the sharp UI elements and the chaotic, blurred background.

### 2. How is it used?

The background is built by placing multiple `div` elements inside a container with `overflow: hidden`. Each `div` is assigned a distinct, vibrant background color and transformed into a circle (`border-radius: 50%`). 

```html
<div class="plasma-wrapper">
  <div class="plasma-blob blob-1"></div>
  <div class="plasma-blob blob-2"></div>
  <div class="plasma-blob blob-3"></div>
  <!-- Foreground Content -->
</div>
```

**The Core Trick:**
To create the "plasma" look, a massive CSS `filter: blur(60px)` is applied to all the blobs. When they overlap, the browser's rendering engine automatically blends their blurred edges together, creating new colors and organic shapes.

```css
.plasma-blob {
  position: absolute;
  filter: blur(60px);
  will-change: transform;
}
```

### 3. Why is it useful?

Achieving fluid, color-mixing backgrounds traditionally required importing heavy JavaScript libraries (like Three.js or Paper.js) or utilizing complex SVG `<feColorMatrix>` gooey filters, both of which can be computationally expensive and drain battery life on mobile devices.

By utilizing pure CSS translations (`transform: translate`) mapped to `@keyframes`, we push the entire animation to the browser's GPU compositor thread. The `filter: blur()` is also highly optimized in modern browsers. This results in an incredibly lightweight, 60fps animation that looks like a heavy physics simulation but requires virtually zero CPU overhead. The component also respects `@media (prefers-reduced-motion: reduce)` by drastically slowing down the animation speed rather than stopping it entirely, ensuring the aesthetic is preserved for all users.
