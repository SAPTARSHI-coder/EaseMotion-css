# CSS Laser Beam Effect

A pure-CSS sci-fi scanner effect featuring a glowing laser beam that sweeps across a designated viewport. It utilizes layered CSS box-shadows to create a highly realistic, performant bloom/glow effect without relying on SVGs or canvas filters.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders a "Security Scan" UI card. Inside the viewport, a bright cyan laser beam automatically sweeps from top to bottom and back again. The beam features a solid white core surrounded by multiple layers of intense cyan glow. It also casts a subtle, semi-transparent light "cone" over the underlying content (a fingerprint icon on a blueprint grid) as it passes over it.

### 2. How is it used?

The implementation relies heavily on CSS `box-shadow` stacking and `@keyframes` translation. The `.laser-beam` element is placed absolutely inside a container with `overflow: hidden`.

```html
<div class="scanner-viewport">
  
  <!-- Target Content (Images, text, wireframes) -->
  <div class="target-subject">...</div>

  <!-- The Animated Beam -->
  <div class="laser-beam"></div>
  
</div>
```

**The Glow Trick:**
To achieve the intense, neon "bloom" effect in CSS, you must stack multiple `box-shadow` declarations on a single element. Each shadow increases the `blur-radius` and `spread-radius` while decreasing the opacity:

```css
.laser-beam {
  background-color: #ffffff; /* Solid white core */
  box-shadow: 
    0 0 8px 2px rgba(6, 182, 212, 0.8),   /* Inner intense glow */
    0 0 16px 5px rgba(6, 182, 212, 0.5),  /* Mid glow */
    0 0 30px 10px rgba(6, 182, 212, 0.3); /* Outer diffuse halo */
}
```

### 3. Why is it useful?

High-fidelity visual effects like laser beams, glowing trails, or light sweeps are traditionally handled using HTML5 Canvas or heavy JavaScript animation libraries (like GSAP or Three.js). By leveraging CSS `box-shadow` stacking for the aesthetic and `transform: translateY` for the motion, we push the entire animation to the browser's GPU compositor thread. This ensures the 60fps sweep runs flawlessly on mobile devices without blocking main thread JavaScript execution. The component also incorporates `@media (prefers-reduced-motion: reduce)` to drastically slow down the sweep for users sensitive to rapid motion.
