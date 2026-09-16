# CSS Blur-Entrance Tooltip for Product Catalog Layouts

> Issue: [#62290](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62290)

Frosted glass product catalog tooltip system featuring heavy backdrop blur reveals (`filter: blur(20px)` → `blur(0px)`), interactive hotspot pulse targets, and luxury e-commerce styling.

---

## ✨ Features & Architectural Highlights

- **Frosted Glass Blur Reveal:** `@keyframes blurEntrance` transitions tooltips from extreme 20px blur down to sharp focus using `backdrop-filter: blur(20px)`.
- **Interactive Hotspot Markers:** Pulsing rings (`.hotspot-pulse`) draw user focus to interactive spec trigger points.
- **Pure CSS Triggering:** Operated strictly via CSS `:hover` and `:focus-within` triggers with zero JavaScript dependencies.
- **Luxury E-Commerce Aesthetic:** Dark glassmorphism, Google Fonts (`Plus Jakarta Sans`, `Inter`), gold and purple luxury accents.
- **Accessible:** Includes `:focus-visible` outline rings and full `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070912;
    --color-surface-card: rgba(16, 22, 38, 0.85);
    --color-surface-tooltip: rgba(22, 28, 50, 0.94);
    --color-gold: #f59e0b;
    --blur-duration: 0.5s;
    --tooltip-width: 255px;
}
```

---

## 🚀 Usage & Integration

1. Copy `62290-css-blur-entrance-tooltip-product-catalog/` into `submissions/examples/`.
2. Link `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the tooltip wrapper and hotspot markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 luxury product cards and blur tooltips.
- `style.css` — Complete CSS stylesheet with blur-entrance keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
