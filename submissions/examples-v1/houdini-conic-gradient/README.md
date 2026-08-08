# Houdini `@property` Animated Conic Gradients

### 1. What does this do?
This demonstrates a highly advanced CSS technique to animate gradients. Traditionally, CSS cannot smoothly transition or animate gradient angles. By utilizing the CSS Houdini `@property` API, we can explicitly define an `--angle` variable as an `<angle>` type, allowing the CSS engine to interpolate it across a `@keyframes` animation. This creates a smooth, spinning glowing border.

### 2. How is it used?
Include `demo.html` structure. Load `style.css`. The animation relies entirely on the `@property` definition in the CSS. `script.js` is included purely as a capability-check to gracefully fallback to a static border on unsupported browsers (like Firefox).

### 3. Why is it useful?
It creates an incredibly performant, 60fps spinning border effect (often seen in gaming UIs or premium SaaS pricing tiers) without needing SVGs, Canvas, or complex Javascript loops.
