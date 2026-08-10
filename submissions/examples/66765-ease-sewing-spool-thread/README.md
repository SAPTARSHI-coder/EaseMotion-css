# Ease Sewing Spool Thread

> Issue: [#66765](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/66765)

A mechanical craft component animation simulating thread spool unwinding, rapid needle bobbin stitching, and fabric seam formation in pure CSS.

---

## ✨ Features & Architectural Highlights

- **Thread Unwinding Dynamics:** `@keyframes spoolUnwind` and SVG `stroke-dashoffset` path keyframes draw continuous thread feed lines.
- **Rapid Needle Oscillation:** `@keyframes needleStitch` drives vertical needle bobbin strokes synchronized with step-staggered fabric seam stitches.
- **Zero External JS:** Powered 100% by pure HTML5 tags and GPU-accelerated CSS keyframe animations.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing rose/purple ambient orbs, and glass cards.
- **Accessible & Responsive:** Full screen-reader support, responsive grid scaling, and `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-rose: #f43f5e;
    --color-wood: #b45309;
    --stitch-speed: 0.6s;
    --spool-speed: 4s;
}
```

---

## 🚀 Usage & Integration

1. Copy `66765-ease-sewing-spool-thread/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.sewing-container` markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with the sewing machine animation and technical spec cards.
- `style.css` — Complete CSS stylesheet with spool/stitch keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
