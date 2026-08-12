# CSS-Only Glowing Hexagon Grid

A pure-CSS honeycomb of hexagons that emit a **neon glow in a ripple pattern** using CSS Grid layout, `clip-path`, and staggered `animation-delay`. **Zero JavaScript.**

---

## 1. What does this do?

It renders an animated honeycomb grid where each hexagonal cell pulses with a neon glow, and the delays across cells create a rolling wave/ripple effect — perfect as a sci-fi or tech-themed hero background.

---

## 2. How is it used?

Wrap rows of hex cells inside a grid container. Every cell receives its own animation delay through the inline CSS custom property `--d`, which controls **when** in the wave that cell pulses.

```html
<div class="hex-grid-sou" aria-hidden="true">
  <!-- Row 1 -->
  <div class="hex-row-sou">
    <div class="hex-cell-sou" style="--d:0.0s"></div>
    <div class="hex-cell-sou" style="--d:0.2s"></div>
    <div class="hex-cell-sou" style="--d:0.4s"></div>
  </div>

  <!-- Row 2 (offset to interlock the honeycomb) -->
  <div class="hex-row-sou hex-row-offset-sou">
    <div class="hex-cell-sou" style="--d:0.2s"></div>
    <div class="hex-cell-sou" style="--d:0.4s"></div>
  </div>
</div>
```

### Available variants

| Class                                    | Description                                    |
| ---------------------------------------- | ---------------------------------------------- |
| `hex-grid-sou`                           | Default cyan ripple                            |
| `hex-grid-sou hex-theme-magenta-sou`     | Magenta pulse variant                          |
| `hex-grid-sou hex-theme-green-sou`       | Matrix-style green variant                     |
| `hex-row-offset-sou`                     | Apply to alternate rows for honeycomb offset   |

### How to add a new theme

Just override the `--glow` custom property:

```css
.hex-theme-orange-sou {
  --glow: #fb923c;
}
```

### Tunable CSS variables

Defined on `.hex-grid-sou`:

| Variable          | Default | Purpose                              |
| ----------------- | ------- | ------------------------------------ |
| `--hex-size`      | `56px`  | Width of one hexagon                 |
| `--hex-gap`       | `6px`   | Horizontal spacing between hexagons  |
| `--row-overlap`   | `14px`  | Vertical overlap between rows        |
| `--glow`          | `#22d3ee` (cyan) | Neon glow color             |

---

## 3. Why is it useful?

This fits EaseMotion CSS's philosophy of **animation-first, human-readable, and JavaScript-free UI primitives**:

- 🎯 **Pure CSS** — no JS, no canvas, no SVG. Just `clip-path`, flex, and `animation-delay`.
- 🌊 **Ripple wave by design** — the delay pattern (`--d`) drives the wave; designers can hand-author or auto-generate patterns easily.
- 🎨 **Theme-able with one variable** — change `--glow` to instantly retheme the grid.
- 🔧 **Tunable** — `--hex-size`, `--hex-gap`, and `--row-overlap` let users resize/shape the comb without touching the animation.
- ⚡ **GPU-friendly** — animates `opacity`, `transform`, and `filter` (drop-shadow) — properties browsers can hardware-accelerate.
- ♿ **Accessibility-aware** — decorative grid is marked `aria-hidden="true"`, and `prefers-reduced-motion` disables the animation while preserving a soft static glow.
- 📦 **Self-contained** — no images, no CDN, no dependencies. Just open and run.
- 🎬 **Hero-ready** — perfect for sci-fi landing pages, dashboards, gaming sites, or tech-themed backgrounds.

It's a small but visually rich component that showcases what creative CSS can achieve — exactly the spirit of EaseMotion CSS. ✨