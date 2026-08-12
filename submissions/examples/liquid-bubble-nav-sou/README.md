# CSS-Only Liquid Bubble Navigation

A mobile-app-style bottom navigation bar where the active icon is highlighted by a **morphing liquid bubble** — powered by an SVG `goo` filter and pure CSS state. **Zero JavaScript.**

---

## 1. What does this do?

It renders a bottom navigation bar (Home / Search / Favorites / Notifications / Profile) where clicking any icon makes a purple **liquid bubble** smoothly morph and slide to sit behind it. The active icon turns white and lifts slightly. The whole thing runs without a single line of JavaScript.

---

## 2. How is it used?

The technique combines three pure-CSS tricks:

1. **An SVG `<filter>`** (the classic "goo" / metaball effect) lives in the document and is referenced via `filter: url(#liquidGooSou)`.
2. **Hidden radio inputs** hold the "which item is active" state.
3. **`:has(:checked)`** on the nav lets CSS detect which radio is selected and slide the bubble accordingly.

```html
<!-- Inline SVG filter (place once anywhere in your document) -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <filter id="liquidGooSou">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
      <feColorMatrix in="blur" mode="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 22 -10" result="goo" />
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </filter>
  </defs>
</svg>

<!-- The nav -->
<nav class="lb-nav-sou" aria-label="Bottom navigation">
  <input type="radio" name="lbnav" id="lb-1-sou" class="lb-radio-sou" />
  <input type="radio" name="lbnav" id="lb-2-sou" class="lb-radio-sou" checked />
  <input type="radio" name="lbnav" id="lb-3-sou" class="lb-radio-sou" />
  <input type="radio" name="lbnav" id="lb-4-sou" class="lb-radio-sou" />
  <input type="radio" name="lbnav" id="lb-5-sou" class="lb-radio-sou" />

  <!-- Bubble lives in its own filtered layer so icons stay crisp -->
  <span class="lb-bubble-layer-sou" aria-hidden="true">
    <span class="lb-bubble-sou"></span>
  </span>

  <label for="lb-1-sou" class="lb-item-sou" tabindex="0" aria-label="Home">
    <svg>…</svg>
  </label>
  <label for="lb-2-sou" class="lb-item-sou" tabindex="0" aria-label="Search">
    <svg>…</svg>
  </label>
  <!-- …more items… -->
</nav>
```

### Tunable CSS variables (on `.lb-nav-sou`)

| Variable          | Default   | Purpose                                |
| ----------------- | --------- | -------------------------------------- |
| `--items`         | `5`       | Number of nav items                    |
| `--bubble-size`   | `48px`    | Diameter of the liquid bubble          |
| `--bubble-color`  | `#a78bfa` | Bubble fill color                      |
| `--icon-active`   | `#ffffff` | Color of the active icon               |
| `--icon-inactive` | `#9ca3af` | Color of inactive icons                |
| `--bubble-x`      | `10%`     | Current bubble X position (auto-set)   |

### The CSS magic — moving the bubble

```css
.lb-nav-sou:has(#lb-2-sou:checked) { --bubble-x: 30%; }
.lb-nav-sou:has(#lb-3-sou:checked) { --bubble-x: 50%; }
/* …etc */

.lb-bubble-sou {
  position: absolute;
  left: var(--bubble-x);
  transform: translate(-50%, -50%);
  transition: left 0.55s cubic-bezier(0.65, 0, 0.35, 1.4);
}
```

The bubble's `left` is driven by a CSS custom property that `:has()` updates whenever a different radio is checked — producing a smooth slide with **zero JavaScript**.

### The goo filter — why it morphs

The bubble lives inside `.lb-bubble-layer-sou`, which has `filter: url(#liquidGooSou)` applied. The filter:

1. Blurs everything in the layer (`feGaussianBlur`)
2. Crushes the alpha channel (`feColorMatrix`) so blurred edges either become fully opaque or fully transparent

The result: as the bubble moves, its blurred edges stretch and pinch like real liquid mercury 🌊.

---

## 3. Why is it useful?

This component captures EaseMotion CSS's **animation-first, JavaScript-free, motion-rich** philosophy:

- 🫧 **Mobile-app feel on the web** — the liquid morph effect is the kind of polish usually reserved for native iOS / Android apps.
- 🎨 **Pure CSS + SVG filter** — demonstrates the composability of `:has()`, CSS custom properties, and SVG filters in a single elegant pattern.
- 🚫 **Zero JavaScript** — state, animation, and interaction all live in CSS, keeping bundle size at zero JS bytes.
- 🎯 **Filter isolation** — the goo filter is scoped to its own layer (`.lb-bubble-layer-sou`) so icons stay crisp while the bubble morphs.
- 🔧 **Theme-friendly** — change the bubble color, size, or count with a few CSS variables.
- ♿ **Accessibility-first** — labels are keyboard-focusable via `tabindex="0"`, each has an `aria-label`, `:focus-visible` rings are provided, and `prefers-reduced-motion` disables the goo filter and animation while preserving function.
- ⚡ **GPU-accelerated** — animates `left` (could be swapped to `transform: translateX` for even better perf, kept as `left` here for readability) — paired with SVG filter on a small layer.
- 📦 **Self-contained** — no images, no CDN, no dependencies. Just open `demo.html` and run.

A small but visually impressive primitive that showcases the depth of what modern, pure CSS can achieve. 🫧✨