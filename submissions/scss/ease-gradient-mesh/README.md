# SCSS Liquid Gradient Mesh (Hardware Accelerated)

A fluid, organic gradient background that softly shifts and morphs, mimicking a colorful liquid mesh (popularized by modern AI product landing pages).

Historically, these complex, shifting color meshes required mounting an HTML5 `<canvas>`, compiling complex WebGL Fragment Shaders (GLSL), and running a heavy `requestAnimationFrame` render loop on the main thread. This submission demonstrates how to achieve a massive, flawless liquid mesh natively using pure CSS radial gradients and `background-position` translations!

---

## 🏛️ The Architecture

### 1. The Gradient Stack
Instead of rendering one flat background, we stack 4 massive `radial-gradient` circles on top of each other using a single `background-image` property!
**The Secret to the Overlap:** We map each of the 4 gradients to a different corner of the screen using the `circle at...` syntax (e.g., `circle at 0% 0%` for Top-Left, `circle at 100% 100%` for Bottom-Right). We tell them to fade to `transparent` exactly at the 50% mark. Because they are all layered on top of each other, they naturally bleed and overlap in the direct center of the screen, creating organic new color mixtures!

### 2. The Solid Base Layer
Because all 4 gradients fade to transparent at 50%, the extreme edges of the screen would technically become empty. To fix this, we apply a solid `background-color` underneath the entire stack.
We use the SCSS `mix()` function to mathematically calculate the exact average hex code of all 4 passed-in colors to ensure the base color perfectly blends with the gradients!

### 3. The Math (The Liquid Physics)
To make the mesh feel alive and liquid, the gradients need to constantly shift, resize, and collide.
We do this by making the entire background texture massively larger than the actual container!
```css
background-size: 200% 200%;
```
Because the background is now twice as big as the screen, we can run a simple CSS `@keyframes` animation that constantly translates the `background-position` (from `0% 50%` to `100% 100%`, etc.) and the `background-size`! As the massive texture slides around behind the window, the 4 radial gradients are physically dragged across the screen, violently colliding and separating to simulate fluid dynamics!

---

## 💻 Usage

Import the mixin into your SCSS file, and apply it to a container (like the `body` or a Hero Section).

```scss
@import 'gradient-mesh';

.my-hero-section {
    @include ease-gradient-mesh(
        $color1: #ff3366, /* Vibrant Pink */
        $color2: #7c3aed, /* Deep Purple */
        $color3: #0ea5e9, /* Cyan Blue */
        $color4: #f43f5e, /* Rose Red */
        $duration: 20s    /* Slow, elegant 20-second loop */
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of Three.js or WebGL Fragment Shaders!
- **DOM Manipulations:** `0`. It runs entirely on the background properties of a single HTML node.
- **GPU Compositor:** By hinting the browser with `will-change: background-position, background-size`, we force the browser engine to offload the 2D texture translations entirely to the GPU compositor thread. This allows the browser to simply slide the pre-rendered pixel data around without constantly repainting the layout, ensuring a flawless 60fps render!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the infinite shifting animation, locking the mesh to a static, beautiful blended state.
