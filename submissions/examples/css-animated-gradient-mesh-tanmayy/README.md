# CSS Animated Gradient Mesh

A pure-CSS implementation of a dynamic, hardware-accelerated gradient mesh background. Unlike "plasma" or "gooey" effects that rely on heavy SVG or CSS blur filters, this component utilizes intersecting `radial-gradient` nodes and native alpha blending to create a crisp, highly performant mesh aesthetic commonly seen on modern SaaS landing pages.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a mesmerizing, slow-drifting gradient background behind a modern glassmorphism UI card. Five distinct colored "nodes" (Pink, Indigo, Cyan, Orange, Violet) slowly float around the container. Because they are built using radial gradients that fade to transparent, their colors mix beautifully when they overlap, creating the illusion of a complex, continuously mutating 3D gradient mesh.

### 2. How is it used?

The background is constructed using an `overflow: hidden` container filled with heavily oversized `div` elements representing the nodes. Each node uses a `radial-gradient` background.

```html
<div class="mesh-wrapper">
  <div class="mesh-node node-1"></div>
  <div class="mesh-node node-2"></div>
  <!-- ... -->
</div>
```

**The Core Trick:**
To ensure the nodes blend sharply and vibrantly without using computationally expensive `blur()` filters, we use standard CSS alpha fading and the `mix-blend-mode` property.

```css
.mesh-node {
  position: absolute;
  width: 150%; 
  height: 150%;
  mix-blend-mode: hard-light;
  will-change: transform;
}

.node-1 {
  background: radial-gradient(circle at center, rgba(236, 72, 153, 0.9) 0%, transparent 60%);
  animation: mesh-drift-1 12s infinite alternate ease-in-out;
}
```

### 3. Why is it useful?

Gradient meshes are incredibly popular in modern web design (e.g., Stripe, Apple, Vercel), but they are traditionally built using `<canvas>` WebGL shaders or by stacking dozens of background images. Both of these approaches can drain battery life and cause main-thread stuttering. 

By separating the gradient nodes into their own `div` elements and animating them using purely CSS `transform: translate()` mapped to `@keyframes`, we push the entire animation matrix to the browser's GPU compositor thread. This ensures an absolutely flawless 60fps animation that requires practically zero CPU overhead. The component also respects `@media (prefers-reduced-motion: reduce)` by drastically slowing down the node animations rather than stopping them entirely, preserving the visual aesthetic while remaining accessible.
