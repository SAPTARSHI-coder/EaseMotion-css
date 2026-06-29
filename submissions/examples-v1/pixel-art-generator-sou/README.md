# CSS-Only Pixel Art Generator Animation

A pure-CSS technique that renders **pixel art from a single element** using a long list of animated `box-shadow`s — making the artwork appear to **draw itself row by row**. No JavaScript, no images, no SVG.

---

## 1. What does this do?

Each pixel-art illustration (heart, ghost, mushroom) is rendered by **one empty `<div>`**. Every "pixel" is a single `box-shadow` placed at a specific X/Y offset. A CSS keyframe animation reveals more shadows over time, creating a retro "drawing itself" effect — perfect for loaders, decorative accents, or 8-bit-themed UI.

---

## 2. How is it used?

Wrap a single `.pix-canvas-sou` element inside a stage and apply one of the artwork classes:

```html
<div class="pix-stage-sou">
  <div class="pix-canvas-sou pix-heart-sou" aria-label="Animated pixel heart"></div>
</div>

<div class="pix-stage-sou">
  <div class="pix-canvas-sou pix-ghost-sou" aria-label="Animated pixel ghost"></div>
</div>

<div class="pix-stage-sou">
  <div class="pix-canvas-sou pix-mushroom-sou" aria-label="Animated pixel mushroom"></div>
</div>
```

### Available artworks

| Class                  | Description                            |
| ---------------------- | -------------------------------------- |
| `pix-heart-sou`        | A red 8-bit heart                      |
| `pix-ghost-sou`        | A red Pac-Man-style ghost              |
| `pix-mushroom-sou`     | A classic red-cap mushroom             |

### Tunable CSS variables (on `.pix-canvas-sou`)

| Variable | Default  | Purpose                       |
| -------- | -------- | ----------------------------- |
| `--p`    | `12px`   | Size of one "pixel" cell      |
| `--c`    | varies   | Primary fill color            |
| `--e`    | `#fff`   | Eye/spot color (ghost/mushroom) |
| `--s`    | `#fde68a`| Stem color (mushroom)         |

### How to add a new artwork

1. Sketch the design on graph paper (e.g., 8×8 grid).
2. For every filled pixel at column `X`, row `Y`, add:
   ```css
   calc(var(--p) * X) calc(var(--p) * Y) 0 var(--c),
   ```
3. Wrap that big shadow list in a `@keyframes` rule, splitting it across keyframe stops (0% → 100%) to reveal pixels progressively.

---

## 3. Why is it useful?

This component captures EaseMotion CSS's **animation-first, JavaScript-free, creative CSS** philosophy:

- 🎨 **One element → full illustration** — the entire artwork is rendered by a single empty `<div>` via `box-shadow`. Zero markup overhead.
- 🎬 **Self-drawing animation** — keyframes progressively reveal rows of pixels, producing a satisfying retro "draw" effect with `steps(1)` timing for crisp jumps.
- 🕹️ **No images, no SVG, no JS** — perfect for tiny payloads, dark-mode-safe vectors, and CSP-strict environments.
- 🎨 **Theme-friendly** — recolor the entire artwork by changing one CSS variable (`--c`).
- 🔧 **Resizable** — scale the whole art by changing `--p` (pixel size).
- ♿ **Accessibility-aware** — `aria-label` on each canvas; `prefers-reduced-motion` disables the animation and shows the completed artwork.
- 📦 **Self-contained** — opens in any browser, no server, no dependencies.
- 💡 **Educational & inspiring** — demonstrates a creative use of `box-shadow` that goes far beyond shadows.

A delightful, lightweight primitive that's both useful **and** showcases the imaginative possibilities of pure CSS. ✨