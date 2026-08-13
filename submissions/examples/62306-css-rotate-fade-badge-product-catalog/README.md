# CSS Rotate-Fade Badge for Product Catalog Layouts

> Issue: [#62306](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62306)

Luxury e-commerce product catalog suite featuring pure CSS 3D perspective angular rotate-fade badges (`rotate(-15deg)` → `rotate(0deg)`), glassmorphic card containers, and gold/purple luxury highlights.

---

## ✨ Features & Architectural Highlights

- **3D Angular Rotate-Fade:** `@keyframes rotateFadeIn` spins badges into alignment from a `-15deg` angle with opacity reveal.
- **Cascading Entrance Sequence:** Staggered delays (`0.1s` → `0.4s`) synchronize the badge entrance across product cards.
- **Pure CSS Component Architecture:** Built using HTML5 semantic structure and CSS tokenization with zero JavaScript dependencies.
- **Luxury E-Commerce Aesthetics:** Dark glassmorphic product cards, Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing gold/purple/cyan accents.
- **Accessible & Responsive:** Adapts seamlessly to tablet and mobile viewports with complete `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070912;
    --color-surface-card: rgba(16, 22, 38, 0.85);
    --color-gold: #f59e0b;
    --color-purple: #a855f7;
    --rotate-duration: 0.65s;
}
```

---

## 🚀 Usage & Integration

1. Copy `62306-css-rotate-fade-badge-product-catalog/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.rotate-fade-badge` markup pattern from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 luxury product cards and rotate-fade badges.
- `style.css` — Complete CSS stylesheet with rotate-fade keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
