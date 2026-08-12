# ease-gradient-border

A rotating gradient border effect built entirely with CSS — powered by the **CSS Houdini `@property`** API. Created for **Issue #64063**.

---

## What does this do?

This component wraps any card (or container) in a smoothly rotating conic-gradient border. The rotation is driven by a single CSS custom property (`--border-angle`) whose type is registered as `<angle>` via the Houdini `@property` rule. Because the browser knows the property holds an angle, it can **natively interpolate** between keyframe values on the compositor thread, producing a seamless 360° loop at 60 fps — with zero JavaScript.

A secondary `::after` pseudo-element applies the same gradient with a `blur(20px)` filter to create a soft ambient glow behind the card.

---

## How is it used?

### 1. Register the custom property

```css
@property --border-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
```

### 2. Animate the property

```css
@keyframes rotate-gradient {
  to {
    --border-angle: 360deg;
  }
}
```

### 3. Apply the conic gradient

```css
.ease-gradient-border::before {
  background: conic-gradient(
    from var(--border-angle),
    #3b82f6, #ec4899, #10b981, #3b82f6
  );
  animation: rotate-gradient 4s linear infinite;
}
```

### 4. Markup

```html
<div class="ease-gradient-wrapper">
  <div class="ease-gradient-border">
    <h2>Houdini Gradient</h2>
    <p>Your content here.</p>
  </div>
</div>
```

Open `demo.html` in any modern Chromium-based browser to see it in action.

---

## Why is it useful?

Traditional rotating gradient borders require JavaScript `requestAnimationFrame` loops — often rendering to a hidden `<canvas>` or manually updating inline styles every frame. This approach:

| Concern | JS Canvas Hack | CSS Houdini `@property` |
|---|---|---|
| Animation thread | Main thread (JS) | Compositor thread (GPU) |
| Frame rate | Prone to jank under load | Consistent 60 fps |
| Code complexity | High (rAF + canvas API) | Low (pure CSS) |
| Bundle size impact | Adds JS payload | Zero |
| Progressive enhancement | Requires JS enabled | Degrades to static gradient |

By declaring `syntax: "<angle>"`, we tell the browser that `--border-angle` is not an opaque string but a typed angle value. The browser's rendering pipeline can then hand the interpolation off to the **compositor thread**, which runs independently of the main thread. The result is butter-smooth animation that never competes with JavaScript execution, layout, or paint work.

---

## Browser Support

CSS Houdini `@property` is supported in:

- ✅ Chrome 85+
- ✅ Edge 85+
- ✅ Opera 71+
- ⚠️ Firefox 128+ (behind flag in earlier versions)
- ❌ Safari — not yet supported (falls back to a static gradient)

---

## License

Part of the [EaseMotion CSS](https://github.com/Viidhii19/EaseMotion-css) project.
