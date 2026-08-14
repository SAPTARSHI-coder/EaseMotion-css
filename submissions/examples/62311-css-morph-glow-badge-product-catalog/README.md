# CSS Morph-Glow Badge for Product Catalog Layouts

> Issue: [#62311](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62311)

High-impact e-commerce product catalog card suite featuring multi-color morphing border gradient badges (`@keyframes morphGlowShift`), glowing neon halos, and modern glassmorphism.

---

## ✨ Features & Architectural Highlights

- **Morphing Border Gradient Loop:** `@keyframes morphGlowShift` cycles multi-stop linear gradients across border parameters in real time.
- **Neon Glow Aura Expansion:** `filter: blur(12px)` pseudo-elements expand aura lighting around badges on card hover.
- **Pure CSS Component Architecture:** Built using HTML5 semantic structure and CSS tokenization with zero JavaScript dependencies.
- **E-Commerce Visual Aesthetics:** Dark glassmorphic product cards, Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing orbs, and neon gold/cyan/purple highlights.
- **Accessible & Responsive:** Adapts seamlessly to tablet and mobile viewports with complete `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-purple: #a855f7;
    --color-cyan: #06b6d4;
    --color-gold: #f59e0b;
    --morph-speed: 4s;
}
```

---

## 🚀 Usage & Integration

1. Copy `62311-css-morph-glow-badge-product-catalog/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.morph-glow-badge` markup pattern from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 product catalog cards and morph-glow badges.
- `style.css` — Complete CSS stylesheet with morph-glow keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
