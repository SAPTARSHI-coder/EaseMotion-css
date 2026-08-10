# CSS Smoke Text Effect

A pure-CSS typographic animation that causes text to physically dissipate into "smoke" when hovered. It leverages hardware-accelerated CSS filters and sequentially staggered transition delays to create a fluid, organic rolling wave effect.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a dramatic hover state for heavy typography. When a user hovers their mouse (or tabs via keyboard) over a designated word, the individual letters smoothly drift upwards, expand in size, fade out, and heavily blur. The letters do not animate all at once; they animate sequentially from left to right, creating a realistic dissipating wave of smoke. When the cursor leaves, the text rapidly condenses back into its solid, readable state.

### 2. How is it used?

The implementation requires wrapping the text inside a container, and isolating every individual letter inside a `<span>` tag.

```html
<h2 class="smoke-word">
  <span>S</span><span>M</span><span>O</span><span>K</span><span>E</span>
</h2>
```

**The CSS Physics:**
The smoke effect is achieved by transitioning three properties simultaneously on hover:
- `opacity: 0;` (Fades out)
- `filter: blur(15px);` (The core smoke look)
- `transform: translateY(-80px) rotate(15deg) scale(2);` (The dispersion upward and outward)

**The Rolling Wave:**
The sequential staggering is applied using the CSS `:nth-child` pseudo-class:

```css
.smoke-word:hover span:nth-child(1) { transition-delay: 0.05s; }
.smoke-word:hover span:nth-child(2) { transition-delay: 0.10s; }
.smoke-word:hover span:nth-child(3) { transition-delay: 0.15s; }
/* ... */
```

### 3. Why is it useful?

Achieving advanced particulate physics or smoke dissipation traditionally required `<canvas>` pixel manipulation or heavy WebGL libraries. By utilizing the CSS `filter` engine (specifically `blur`), we can simulate volumetric dispersion natively in the DOM. Applying `will-change: transform, filter, opacity` ensures the browser offloads this rendering task to the GPU, guaranteeing a butter-smooth 60fps framerate even on mobile devices. The component also respects `@media (prefers-reduced-motion: reduce)` by disabling the blur and translation, opting instead for a simple, accessible opacity dimming.
