# Parallax Depth Scroll Container

A modular, high-performance, and GPU-accelerated **3D Parallax Depth Scroll Container** built entirely with pure CSS. By utilizing a 3D perspective viewport, this utility allows child elements to render at various depths in 3D perspective space, creating natural, smooth speed differentials during vertical scrolling without any JavaScript or scroll event listeners.

## What does this do?

It transforms a standard vertical scrolling section into a layered, immersive experience. Elements placed on "back" layers scroll slower than normal, while elements placed on "fore" layers scroll faster than normal. The scaling is mathematically corrected so that all layers maintain their correct visual size at the starting point, but shift dramatically when scrolled.

## How is it used?

Structure your HTML using the container-group-layer pattern:

```html
<!-- 1. The scroll viewport container -->
<div class="ease-parallax-container">

  <!-- 2. A section representing the 3D space -->
  <section class="ease-parallax-group">
    
    <!-- 3. Parallax layers placed at different depths -->
    <div class="ease-parallax-layer ease-depth-back-slow">
      <!-- Background decoration (scrolls slow) -->
    </div>
    
    <div class="ease-parallax-layer ease-depth-base ease-parallax-interactive">
      <!-- Main readable content (scrolls normal) -->
    </div>
    
    <div class="ease-parallax-layer ease-depth-fore-fast">
      <!-- Foreground detail (scrolls fast) -->
    </div>
    
  </section>

</div>
```

### Depth Classes Available

Assuming a `perspective: 1px` configuration, the following speed factors are supported:

| Class Name | Z-Index | Depth Translation | Speed Factor | Stacking Order |
| :--- | :--- | :--- | :--- | :--- |
| `.ease-depth-back-slowest` | `1` | `translateZ(-3px) scale(4)` | `0.25x` (Very Slow) | Deepest |
| `.ease-depth-back-slower` | `2` | `translateZ(-2px) scale(3)` | `0.33x` (Slow) | Deep |
| `.ease-depth-back-slow` | `3` | `translateZ(-1px) scale(2)` | `0.50x` (Moderately Slow) | Midground |
| `.ease-depth-base` | `4` | `translateZ(0) scale(1)` | `1.00x` (Normal) | Content Base |
| `.ease-depth-fore-fast` | `5` | `translateZ(0.33px) scale(0.67)` | `1.50x` (Fast) | Close Foreground |
| `.ease-depth-fore-faster` | `6` | `translateZ(0.50px) scale(0.5)` | `2.00x` (Very Fast) | Closer Foreground |
| `.ease-depth-fore-fastest` | `7` | `translateZ(0.75px) scale(0.25)` | `4.00x` (Super Fast) | Closest |

### Interactive Elements

By default, decoration layers have `pointer-events: none` applied so they do not block mouse interaction on underlying content. To allow clicking, scrolling, typing, or hovering on forms/links/buttons inside a layer, apply the `.ease-parallax-interactive` helper class to the layer wrapper or individual interactive elements.

## Why is it useful?

- **Silky-Smooth 120 FPS Performance:** Traditional JS-based scroll parallax recalculates transforms on every scroll tick on the CPU main thread, causing stutter. This CSS-only implementation runs entirely on the browser's GPU compositing thread, avoiding layout reflows entirely.
- **Pure CSS Layout:** Zero script dependencies. It does not break under script blocking extension setups and is extremely lightweight.
- **Accessibility Friendly:** Includes built-in support for the standard CSS `@media (prefers-reduced-motion: reduce)` rule, which automatically collapses the layers into a clean, flat static layout for users sensitive to motion.

## Preview

Open [demo.html](file:///c:/Users/Rushabh%20Mahajan/Documents/GitHub/EaseMotion-css/submissions/examples/parallax-depth-scroll-container-tm/demo.html) directly in your browser to see the interactive cosmic odyssey simulation.

## Contribution Notes

- Class names follow the `.ease-*` convention, matching EaseMotion CSS core.
- Fully compatible with the existing framework variables and layers design tokens.
