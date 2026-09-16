# CSS Solar Flare Radial Particles

A pure-CSS particle engine simulating a coronal mass ejection (solar flare). This component demonstrates how to achieve complex, omnidirectional particle explosions natively in the browser without relying on `<canvas>` or heavy JavaScript animation libraries.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders an intensely glowing, pulsating "Sun Core" in the center of a dark viewport. Emitting from the core are dozens of small, glowing particles that shoot rapidly outward in all directions. The particles slowly fade and scale down as they travel, perfectly simulating physics-based dispersion. 

### 2. How is it used?

Creating omnidirectional radial physics in pure CSS requires a rotational trick. Instead of attempting to calculate complex X/Y coordinates for every particle, we create invisible "tracks" (`.track`) that radiate outward from the center.

```html
<div class="flare-engine">
  <div class="track tr-1"><div class="particle p-1"></div></div>
  <div class="track tr-2"><div class="particle p-1"></div></div>
  <!-- ... -->
</div>
```

**The Radial Matrix:**
We rotate each track by a fixed degree (e.g., 0°, 30°, 60°), forming a 360° circle.
Because each track is already rotated into position, the actual `.particle` inside the track only needs to animate horizontally (`transform: translateX()`).

```css
/* Rotate the track into position */
.tr-1 { transform: rotate(0deg); }
.tr-2 { transform: rotate(30deg); }

/* Animate the particle horizontally down the track */
@keyframes shoot-particle {
  0% { transform: translateX(0) scale(1.5); opacity: 1; }
  100% { transform: translateX(180px) scale(0); opacity: 0; }
}
```

### 3. Why is it useful?

High-fidelity particle engines are traditionally built using HTML5 Canvas or WebGL via libraries like particles.js or Three.js. However, these libraries require downloading significant amounts of JavaScript and constantly executing calculations on the main thread. 

By mapping the geometry using CSS transforms (`rotate` for tracks, `translateX` for particles) and animating them via `@keyframes`, we push the entire particle system to the browser's GPU compositor thread. This ensures a flawless, buttery-smooth 60fps animation that requires practically zero CPU overhead. Furthermore, the component respects `@media (prefers-reduced-motion: reduce)` by drastically slowing down the particle speed and halting the rotational engine for accessibility compliance.
