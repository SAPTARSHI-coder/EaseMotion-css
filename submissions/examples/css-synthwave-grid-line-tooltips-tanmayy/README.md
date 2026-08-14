# CSS Synthwave Grid Line Tooltips & Popovers

A pure CSS, hardware-accelerated tooltip component heavily inspired by the 1980s retro-futuristic "Outrun" aesthetic. This component demonstrates how to use 3D CSS transforms and clever background positioning to render an immersive, animated 3D highway inside a tiny floating popover.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders interactive tooltips that deploy smoothly on hover or keyboard focus. Rather than displaying standard flat text, the tooltip card acts as a tiny window into an 80s Synthwave landscape. The interior features a glowing retro sun (sliced with horizontal scanlines) and a neon wireframe grid that constantly accelerates forward in 3D perspective. The design uses aggressive neon cyans (`#00ffff`), magentas (`#ff007f`), and deep void blacks (`#0a0014`) to perfectly capture the genre.

### 2. How is it used?

The interactivity is managed entirely via the CSS `:hover` and `:focus` pseudo-classes on the `.tooltip-wrapper` and `.synth-btn` elements, ensuring full accessibility without JavaScript event listeners.

**The 3D Highway Engine:**
The grid is essentially a flat `.synth-grid` div pushed into 3D space using `perspective: 200px` and `transform: rotateX(75deg)`. The wireframe itself is just two overlapping CSS `linear-gradient` patterns.

To make the grid "move forward", we use a seamless `@keyframes` loop that shifts the `background-position` vertically by the exact height of one grid cell (20px).

```css
.synth-grid {
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.6) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: drive-grid 1s linear infinite;
}

@keyframes drive-grid {
  0% { background-position: 0px 0px; }
  100% { background-position: 0px 20px; } /* Exactly one cell height */
}
```

**The Sliced Retro Sun:**
The iconic horizontally-sliced sun is built using a CSS `mask-image`. A `repeating-linear-gradient` mask acts like a stencil, erasing horizontal bands of pixels from the sun to create the classic retro sunset look.

### 3. Why is it useful?

Rendering infinite 3D moving grids usually requires writing a WebGL `<canvas>` script or a heavy JavaScript rendering loop to constantly calculate perspective vectors. 

By pushing the grid rendering directly into the CSS DOM using native `perspective`, `transform`, and `background-position`, we offload the entire 3D calculation engine to the browser's GPU compositor. This guarantees flawless 60fps performance without writing a single line of JavaScript or draining mobile batteries. Crucially, the component strictly adheres to `@media (prefers-reduced-motion: reduce)` by immediately halting the 3D grid animation for users with motion sensitivities.
