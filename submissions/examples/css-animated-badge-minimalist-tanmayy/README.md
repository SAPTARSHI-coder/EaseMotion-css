# CSS Minimalist Animated Badges

A collection of three ultra-clean, hardware-accelerated animated CSS badges. This component suite demonstrates how to achieve premium, eye-catching status indicators (Shimmer, Pulse, and Conic Trace) using native CSS features without relying on JavaScript or heavy SVGs.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides three distinct styles of minimalist animated badges:
- **Variant 1 (Shimmer Sweep)**: A solid badge that features a subtle, angled glare (`linear-gradient`) periodically sweeping across its surface to catch the user's eye.
- **Variant 2 (Status Pulse)**: An outlined badge containing a live status dot. The dot uses `box-shadow` scaling to simulate a continuous breathing or radar pulse.
- **Variant 3 (Conic Border Trace)**: A futuristic, outline-style badge where a glowing neon gradient infinitely traces around the perimeter of the pill shape.

### 2. How is it used?

Each variant relies entirely on native CSS pseudo-elements and `@keyframes` to achieve its effect while keeping the HTML markup incredibly semantic and clean.

**The Conic Border Trace (Variant 3):**
The glowing moving border is achieved using a classic CSS layering trick. The outer wrapper (`.badge-trace-wrapper`) is given a tiny amount of padding (e.g., `1.5px`) and `overflow: hidden`. Inside this wrapper, a `::before` pseudo-element is generated with a `conic-gradient` that constantly rotates 360 degrees.

Finally, an inner block (`.badge-trace-inner`) is placed on top of it. Because the inner block exactly matches the background color of the webpage, it visually blocks out the center of the spinning conic gradient, leaving only the `1.5px` padding exposed. This optical illusion creates a perfect, smoothly animated border trace.

```css
.badge-trace-wrapper::before {
  content: '';
  position: absolute;
  /* A sharp conic gradient */
  background: conic-gradient(transparent, transparent, transparent, #3b82f6);
  animation: badge-spin 3s linear infinite;
  z-index: 0;
}

@keyframes badge-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### 3. Why is it useful?

Animating borders or complex shimmering effects typically requires injecting heavy SVG animation scripts or JavaScript rendering loops that cause unnecessary browser repaints. 

By leveraging native CSS `conic-gradient`, `box-shadow` scaling, and `transform: rotate()`, we offload the entire animation payload to the browser's GPU compositor. This ensures smooth 60fps animations across all devices with zero performance penalties. Additionally, the component adheres strictly to accessibility standards by utilizing `@media (prefers-reduced-motion: reduce)` to strip out the `@keyframes` and replace the animations with elegant static fallbacks for users with motion sensitivities.
