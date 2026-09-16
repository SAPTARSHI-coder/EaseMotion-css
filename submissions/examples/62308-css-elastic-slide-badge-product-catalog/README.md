# CSS Elastic-Slide Badge for Product Catalog Layouts

> Issue: [#62308](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62308)

Snappy e-commerce product catalog suite featuring pure CSS elastic spring overshoot slide-in badges (`cubic-bezier(0.68, -0.6, 0.32, 1.6)`), tactile hover recoil, and modern retail cards.

---

## ✨ Features & Architectural Highlights

- **Spring Overshoot Physics:** `@keyframes elasticSlideIn` utilizes custom cubic-bezier curves for bouncy spring-loaded entrance dynamics.
- **Staggered Entrance Rhythm:** Step-staggered delays (`0.1s` → `0.4s`) synchronize the elastic slide sequence across catalog cards.
- **Pure CSS Component Architecture:** Built using HTML5 semantic structure and CSS tokenization with zero JavaScript dependencies.
- **Modern Retail Aesthetics:** Dark glassmorphic product cards, Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing amber/cyan/emerald accents.
- **Accessible & Responsive:** Adapts seamlessly to tablet and mobile viewports with complete `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070912;
    --color-surface-card: rgba(16, 22, 38, 0.85);
    --color-amber: #f59e0b;
    --color-cyan: #06b6d4;
    --color-emerald: #10b981;
    --elastic-duration: 0.8s;
}
```

---

## 🚀 Usage & Integration

1. Copy `62308-css-elastic-slide-badge-product-catalog/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.elastic-slide-badge` markup pattern from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 product catalog cards and elastic-slide badges.
- `style.css` — Complete CSS stylesheet with elastic keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
