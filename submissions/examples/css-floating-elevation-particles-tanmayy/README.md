# CSS Floating Elevation Particles

A premium, dark-mode compatible background engine simulating Z-axis depth (elevation) using exclusively CSS. This component leverages decoupled DOM animations to isolate 2D lateral drifting from 3D shadow diffusion, creating an incredibly organic illusion of physical depth.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders a sophisticated, modern UI background populated by geometric "tiles" (circles, squares, rectangles). These tiles gently drift across the screen while continuously rising and falling toward the camera. As they rise, they scale up slightly and their drop shadows diffuse heavily, creating a hyper-realistic simulation of physical elevation (Z-depth) in a 2D space. The component natively and instantly adapts to the user's OS Light or Dark mode.

### 2. How is it used?

Attempting to apply multiple `transform` animations to a single element in CSS usually results in conflicts and erratic behavior. To simulate complex physics smoothly, this component uses **DOM Decoupling**.

Every tile is wrapped in two nested elements, each handling a different axis of physics:

```html
<!-- Layer 1 handles X/Y lateral movement -->
<div class="drifter">
  
  <!-- Layer 2 handles Z-axis scaling and shadows -->
  <div class="elevate shape-square"></div>
  
</div>
```

**The Z-Axis Simulator:**
The `.elevate` layer strictly manages the illusion of depth by animating `transform: scale()` alongside `box-shadow` spread. By varying the animation durations across different tiles, the system ensures they are all floating at completely randomized Z-depths at any given moment.

```css
@keyframes simulate-z {
  0% {
    transform: scale(0.95);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Low elevation */
  }
  100% {
    transform: scale(1.15);
    box-shadow: 0 30px 50px rgba(0,0,0,0.2); /* High elevation */
  }
}
```

### 3. Why is it useful?

High-fidelity depth simulations are typically achieved using JavaScript physics engines that manually calculate X, Y, and Z coordinates on every `requestAnimationFrame` loop. 

By structurally decoupling the animation axes directly into the DOM tree, we can trigger independent CSS `@keyframes` that push all interpolation to the browser's native GPU compositor. This results in flawless 60fps physics with zero JavaScript overhead. Furthermore, by defining the shadow colors in CSS Custom Properties (`:root`), the component seamlessly switches to deeper, heavier shadows in Dark Mode—a critical requirement since shadows are notoriously difficult to see on dark backgrounds. Finally, it utilizes `@media (prefers-reduced-motion: reduce)` to halt lateral drifting and severely dampen the elevation bouncing for motion-sensitive users.
