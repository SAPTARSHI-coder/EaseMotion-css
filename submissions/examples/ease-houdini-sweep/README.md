# ease-houdini-sweep

A high-performance CSS animation utility for smooth conic gradient angle rotation powered by the CSS Houdini `@property` API.

---

### 1. What does this do?
`ease-houdini-sweep` animates the angle of a conic gradient smoothly from `0turn` to `1turn`. By registering a custom CSS property `--sweep-angle` with syntax `<angle>`, the browser gains native mathematical awareness of the angle variable, enabling fluid 60 FPS conic gradient rotation without layout hacks or expensive DOM manipulations.

---

### 2. How is it used?

Simply link `style.css` and add the `.ease-houdini-sweep` class to any HTML element:

```html
<!-- Example 1: Conic Gradient Wheel / Badge -->
<div class="ease-houdini-sweep"></div>

<!-- Example 2: Glowing Avatar Border Ring -->
<div class="avatar-ring ease-houdini-sweep">
  <img src="avatar.jpg" alt="Avatar" />
</div>
```

#### CSS Implementation Overview
```css
@property --sweep-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0turn;
}

@keyframes ease-sweep-anim {
  to {
    --sweep-angle: 1turn;
  }
}

.ease-houdini-sweep {
  --sweep-angle: 0turn;
  background: conic-gradient(from var(--sweep-angle), #ff007f, #7f00ff, #00d4ff, #ff007f);
  animation: ease-sweep-anim 4s linear infinite;
}
```

---

### 3. Why is it useful?
- **Native Mathematical Interpolation**: Historically, CSS gradient strings (e.g. `conic-gradient(...)`) could not be directly interpolated by browser animation engines.
- **Eliminates Hacky Workarounds**: Previous implementations required rendering oversized pseudo-elements (`::before` / `::after`) and animating `transform: rotate()` or shifting `background-position`, causing extra layer creation and visual clipping issues.
- **Superior Performance & Efficiency**: Registering `--sweep-angle` as an `<angle>` via CSS Houdini `@property` lets the browser calculate intermediate angle values directly on the render thread with GPU acceleration, delivering smooth 60 FPS animations with zero layout thrashing or overflow hacks.
