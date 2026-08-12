# CSS-Only Isometric Product Card

A product card rendered in a real **isometric 3D view** that "**pops up**" off the surface on hover or keyboard focus — built entirely with CSS transforms. No JavaScript, no images, no SVG.

---

## 1. What does this do?

It renders a 3D cube-style product card (top, front, and side faces visible) using the classic isometric projection (`rotateX(55deg) rotateZ(-45deg)`). On hover or focus, the cube lifts upward in 3D space while its ground shadow expands and softens — creating a satisfying, tactile "pop up" effect.

---

## 2. How is it used?

A card wraps a 3D cube (3 faces) and a separate ground shadow. Each face is a `<div>` positioned in 3D using `translateZ`, `rotateX`, and `rotateY`.

```html
<div class="iso-card-sou iso-card-phone-sou" tabindex="0" aria-label="Phone product card">
  <div class="iso-cube-sou">
    <div class="iso-face-sou iso-face-top-sou">
      <span class="iso-brand-sou">PIXEL X</span>
      <span class="iso-tagline-sou">Pro Edition</span>
    </div>
    <div class="iso-face-sou iso-face-front-sou">
      <span class="iso-icon-sou" aria-hidden="true">▢</span>
    </div>
    <div class="iso-face-sou iso-face-side-sou"></div>
  </div>
  <div class="iso-shadow-sou" aria-hidden="true"></div>
  <p class="iso-caption-sou">Pixel X — $899</p>
</div>
```

### Available color variants

| Class                   | Palette          |
| ----------------------- | ---------------- |
| `iso-card-phone-sou`    | Violet (default) |
| `iso-card-audio-sou`    | Cyan / Teal      |
| `iso-card-shoe-sou`     | Coral / Red      |

### Tunable CSS variables (on `.iso-card-sou`)

| Variable | Default | Purpose                                    |
| -------- | ------- | ------------------------------------------ |
| `--w`    | `160px` | Cube width                                 |
| `--h`    | `160px` | Cube depth (top face height)               |
| `--d`    | `80px`  | Extrusion thickness (front/side face height) |
| `--lift` | `22px`  | How high the cube rises on hover           |

### Tunable face colors (on `.iso-cube-sou`)

| Variable    | Purpose             |
| ----------- | ------------------- |
| `--c-top`   | Top face color      |
| `--c-front` | Front face color    |
| `--c-side`  | Side face color     |
| `--c-edge`  | Subtle edge border  |

To create a new palette, override these inside any wrapper class:

```css
.iso-card-emerald-sou .iso-cube-sou {
  --c-top:   #6ee7b7;
  --c-front: #059669;
  --c-side:  #065f46;
}
```

---

## 3. Why is it useful?

This component fits EaseMotion CSS's **animation-first, JavaScript-free, motion-rich** philosophy:

- 🎲 **True 3D, not a fake illusion** — uses `transform-style: preserve-3d` with real `translateZ`/`rotateX`/`rotateY` for genuine perspective.
- 🎨 **Pure CSS isometric projection** — the classic `rotateX(55deg) rotateZ(-45deg)` formula creates equal visibility of all three faces.
- ✨ **Tactile "pop up" interaction** — on hover/focus, the cube lifts while the ground shadow expands and softens, selling the illusion of floating.
- 🔧 **Theme-friendly** — change the entire palette by overriding a few CSS variables.
- 📐 **Resizable** — adjust the entire cube by changing `--w`, `--h`, `--d`.
- ♿ **Accessibility-first** — `tabindex="0"` + `:focus-visible` styles ensure keyboard users get the same delight as mouse users; `prefers-reduced-motion` disables the pop animation while preserving the beautiful static isometric look.
- ⚡ **GPU-accelerated** — animates `transform` and `filter` only, which browsers can hardware-accelerate.
- 📦 **Self-contained** — no images, no CDN, no dependencies. Just open and run.
- 💡 **Versatile** — works as a product showcase, dashboard tile, pricing card, or any "hero" visual element.

A small but visually striking primitive that demonstrates the depth (literally) of what pure CSS can achieve. 📦✨