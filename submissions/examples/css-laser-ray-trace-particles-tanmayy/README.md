# CSS Laser Ray Trace Particles

A high-velocity optical fiber/laser simulation built entirely in pure CSS. This component leverages advanced CSS gradients and hardware-accelerated transforms to render glowing data streams shooting across the viewport.

## 📋 Mandatory Questions

### 1. What does this do?

This component simulates a high-speed data network or sci-fi "warp drive" effect. Dozens of glowing, neon-colored laser beams rapidly shoot back and forth across a deep space background. The lasers feature intensely glowing heads and organically fading tails, while a translucent UI glassmorphism card sits flawlessly over the chaos.

### 2. How is it used?

The implementation requires zero JavaScript and relies on CSS `linear-gradient` to create the optical illusion of a speeding laser beam with a tail. 

**The Laser Shape:**
The fading tail is achieved by wrapping the element in a transparent-to-solid gradient, combined with heavy `box-shadow` to create the bloom effect.
```css
.ltr-beam {
  height: 2px;
  /* Glowing head on the right, fading tail on the left */
  background: linear-gradient(to right, transparent 0%, #06b6d4 80%, #ffffff 100%);
  box-shadow: 0 0 15px 2px #06b6d4;
}
```

**The Cinematic Angle:**
Instead of rotating every single laser beam to create a dynamic diagonal effect, the entire container (`.laser-grid`) is skewed using `transform: skewY(-10deg)`. This mathematically slants the entire rendering matrix, meaning the particles only need to be animated purely horizontally (`translateX`), which is highly optimized for the browser's compositor thread. The foreground UI card reverses this skew (`skewY(10deg)`) to remain perfectly horizontal.

### 3. Why is it useful?

High-speed particle trails traditionally demand HTML5 `<canvas>` rendering where a JavaScript loop manually redraws fading trails on every frame (60 times a second), which heavily taxes the CPU and destroys mobile battery life. 

By offloading the visual "tail" to a static CSS gradient and animating only the `transform: translateX` property via `@keyframes`, this component achieves absolute 60fps performance entirely on the GPU. Additionally, it respects `@media (prefers-reduced-motion: reduce)` by drastically slowing the velocity of the beams to ensure the page remains accessible to users with motion sensitivities.
