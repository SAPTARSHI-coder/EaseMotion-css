# CSS Minimalist Outline Particles

A pure-CSS particle engine featuring an elegant, ultra-lightweight geometric design. Instead of relying on heavy gradients or blurs, this component utilizes simple transparent shapes with thin borders to create a sophisticated, high-performance background effect.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders a clean, minimalist viewport where transparent geometric shapes (circles, squares, and diamonds) slowly drift upwards. As they rise, they gently rotate and drift horizontally, creating an organic, bubbling effect. The component is fully wired to automatically adapt to the user's operating system Light or Dark mode setting natively.

### 2. How is it used?

The particles are standard `div` elements stripped of their background colors, leaving only thin CSS borders. Different CSS classes (`.shape-circle`, `.shape-square`) dictate the `border-radius`.

```css
.outline-particle {
  background-color: transparent;
  border: 1px solid var(--theme-outline);
}
```

**Organic Physics Engine:**
To simulate fluid, organic movement without JavaScript physics libraries, the CSS `@keyframes` map multiple transform properties simultaneously. As the particle translates deep up the Y-axis, it also translates slightly on the X-axis while rotating a full 360 degrees.
```css
@keyframes float-up-cw {
  100% { 
    /* Y-axis rise, X-axis drift, and continuous rotation */
    transform: translateY(-800px) translateX(100px) rotate(360deg); 
  }
}
```

**Dark Mode Compatibility:**
The colors are completely abstracted into CSS Custom Properties (variables) under the `:root` scope. A standard `@media (prefers-color-scheme: dark)` query overrides these variables. When the user toggles their OS theme, the CSS transitions the variables smoothly, providing a native, instant dark mode experience without requiring a JavaScript theme toggle.

### 3. Why is it useful?

Minimalist backgrounds are highly sought after for SaaS landing pages and sophisticated portfolios, but developers often mistakenly import heavy WebGL or `<canvas>` particle libraries to achieve them. This causes unnecessary main-thread blocking and increases page load times. 

By relying exclusively on CSS `border` properties and `transform` animations, this component guarantees absolute 60fps performance on the GPU compositor thread with a microscopic file size footprint. It also respects `@media (prefers-reduced-motion: reduce)` by drastically slowing the upward drift to ensure an accessible experience for all users.
