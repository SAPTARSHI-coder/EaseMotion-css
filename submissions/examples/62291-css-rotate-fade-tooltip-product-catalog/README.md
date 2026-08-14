# CSS Rotate-Fade Tooltip for Product Catalog Layouts

> Issue: [#62291](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62291)

Interactive product catalog card suite featuring pure CSS 3D rotate-fade tooltips (`rotate(-12deg)` → `rotate(0deg)`), hotspot pulse indicators, and deep product specification overlays.

---

## ✨ Features & Architectural Highlights

- **3D Angular Rotate-Fade Entrance:** `@keyframes rotateFadeIn` spins product spec tooltips into alignment from a `-12deg` angle upon hover or keyboard focus.
- **Pulsing Interactive Hotspots:** Concentric pulse rings (`.hotspot-pulse`) highlight interactive trigger points across product cards.
- **Pure CSS Interactivity:** Fully driven by CSS `:hover` and `:focus-within` triggers — zero external JavaScript required.
- **Dark Glassmorphic UI:** Modern e-commerce aesthetics with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing ambient orbs, and neon blue/purple highlights.
- **Accessible:** Includes `:focus-visible` ring indicators, keyboard focus management, and complete `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-surface-tooltip: rgba(20, 28, 52, 0.96);
    --color-blue: #3b82f6;
    --rotate-duration: 0.45s;
    --tooltip-width: 250px;
}
```

---

## 🚀 Usage & Integration

1. Copy `62291-css-rotate-fade-tooltip-product-catalog/` into `submissions/examples/`.
2. Link `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the tooltip wrapper and hotspot markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 product catalog cards and hotspot tooltips.
- `style.css` — Complete CSS stylesheet with rotate-fade keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
