# CSS Synthwave Grid Particles

A pure-CSS 3D perspective engine rendering an infinite retro synthwave floor. Neon data packets (particles) race along the glowing grid lines toward the camera, utilizing native CSS 3D transforms to automatically handle perspective scaling and depth.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders a nostalgic, 1980s retro-futuristic scene. The bottom half of the screen features a glowing pink grid that infinitely scrolls forward. Superimposed on this grid are glowing cyan data packets (particles) that fly rapidly from the horizon line directly toward the user's screen. A classic sliced synthwave sun rests on the horizon in the background.

### 2. How is it used?

The 3D environment is created using CSS `perspective` and `transform: rotateX()`.

**The Infinite Grid:**
The grid itself is a massive `div` tilted backwards in 3D space (`rotateX(75deg)`). The grid lines are painted using a transparent `linear-gradient`. By animating the `background-position` of this gradient by exactly one grid cell size, we create the optical illusion of infinite forward scrolling.

**The 3D Particles:**
Because the `.synthwave-floor` is already tilted in 3D space, any child element placed inside it inherits that exact perspective.
```html
<div class="synthwave-floor-container" style="perspective: 600px;">
  <div class="synthwave-floor" style="transform: rotateX(75deg);">
    
    <!-- Particles inherit the 75deg tilt! -->
    <div class="grid-particle"></div>
    
  </div>
</div>
```
To make a particle fly toward the camera, we simply animate its standard 2D Y-axis (`transform: translateY(1500px)`). The browser's native CSS 3D engine automatically calculates the math to make the particle scale up and accelerate visually as it approaches the viewport.

### 3. Why is it useful?

Rendering 3D perspective grids and zooming particles is the textbook use case for WebGL and `<canvas>`. However, maintaining WebGL contexts is overkill for simple background aesthetics and drains battery life heavily. 

By defining a CSS 3D context, we can push the geometric perspective calculations directly to the browser's native rendering engine. Paired with `will-change: transform`, the particle animations run flawlessly on the GPU compositor thread, guaranteeing 60fps performance without writing a single line of JavaScript. The component also incorporates `@media (prefers-reduced-motion: reduce)` to disable the grid scroll and throttle particle speed for accessibility.
