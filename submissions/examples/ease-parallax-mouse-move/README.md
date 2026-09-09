# Component: `ease-parallax-mouse-move`

## What does this do?
It implements a smooth, multi-layer mouse-driven parallax effect using CSS custom properties for hardware-accelerated depth shifting, combined with a lightweight linear interpolation (LERP) loop for fluid motion.

## How is it used?
Add the parallax class structures to your HTML container and layers:

```html
<!-- Main container/viewport -->
<div class="parallax-stage" id="myParallaxStage">
  
  <!-- Far background layer: moves counter to mouse (opposite direction) -->
  <div class="parallax-layer layer-bg" style="--depth-x: -20px; --depth-y: -20px;">
    <!-- Background element/image/stars -->
  </div>

  <!-- Midground layer: moves moderately -->
  <div class="parallax-layer layer-mid" style="--depth-x: 25px; --depth-y: 25px;">
    <!-- Midground objects/graphics -->
  </div>

  <!-- Foreground layer: moves heavily to emphasize front-facing depth -->
  <div class="parallax-layer layer-fg" style="--depth-x: 80px; --depth-y: 80px;">
    <!-- Foreground cards/text content -->
  </div>

</div>
```

Bind the stage to the lightweight mouse tracking script. It updates `--ease-parallax-x` and `--ease-parallax-y` custom properties using LERP:

```javascript
const stage = document.getElementById('myParallaxStage');
let rect = stage.getBoundingClientRect();
let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
const ease = 0.08;
let isHovered = false, animating = false;

function animate() {
  currentX += (targetX - currentX) * ease;
  currentY += (targetY - currentY) * ease;
  stage.style.setProperty('--ease-parallax-x', currentX.toFixed(4));
  stage.style.setProperty('--ease-parallax-y', currentY.toFixed(4));
  
  const delta = Math.sqrt(Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2));
  if (isHovered || delta > 0.001) {
    requestAnimationFrame(animate);
  } else {
    currentX = targetX; currentY = targetY;
    stage.style.setProperty('--ease-parallax-x', currentX);
    stage.style.setProperty('--ease-parallax-y', currentY);
    animating = false;
  }
}

stage.addEventListener('mousemove', (e) => {
  isHovered = true;
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  targetX = (e.clientX - centerX) / (rect.width / 2);
  targetY = (e.clientY - centerY) / (rect.height / 2);
  if (!animating) { animating = true; requestAnimationFrame(animate); }
});

stage.addEventListener('mouseenter', () => {
  isHovered = true;
  rect = stage.getBoundingClientRect();
  if (!animating) { animating = true; requestAnimationFrame(animate); }
});

stage.addEventListener('mouseleave', () => {
  isHovered = false;
  targetX = 0; targetY = 0;
  if (!animating) { animating = true; requestAnimationFrame(animate); }
});
```

## Why is it useful?
Traditional parallax components typically rely on bulky external libraries or heavy JavaScript routines that modify inline CSS positions on every frame, which can cause layout thrashing and lower frames-per-second (FPS). 

This component aligns with EaseMotion CSS's philosophy by using **CSS-first rendering**:
1. **GPU Acceleration**: JavaScript's only job is to compute and interpolate normalized coordinate variables (`[-1.0, 1.0]`). The actual movements are calculated via CSS variables and computed using GPU-accelerated `translate3d()`.
2. **Infinite Custom Depth Configs**: Any number of layers can be added with independent vertical and horizontal translation coefficients (`--depth-x`, `--depth-y`) directly in the CSS or style properties.
3. **Power-Efficient (Idle-Suspension)**: The animation loop only runs when there is active mouse movement or during the LERP deceleration period. Once the elements settle at target coordinates or return to center, the loop is completely halted.
4. **Accessibility Built-in**: Full fallback for users with vestibular disorders via a `prefers-reduced-motion` media query that disables all translation movements.

## Preview
Open `demo.html` directly in your browser to see the effect.
