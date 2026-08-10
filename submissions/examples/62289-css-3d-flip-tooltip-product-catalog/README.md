# CSS 3D-Flip Tooltip for Product Catalog Layouts

> Issue: [#62289](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62289)

High-tech electronics catalog card suite featuring 3D dimensional tooltip flips (`rotateX(-90deg)` → `rotateX(0deg)`), holographic sheen sweeps, and hardware spec overlays.

---

## ✨ Features & Architectural Highlights

- **3D Perspective Flip Entrance:** `@keyframes flip3DIn` flips product spec tooltips into 3D perspective space (`perspective: 1200px`) with `backface-visibility: hidden`.
- **Holographic Sheen Sweeps:** Linear gradient sheen sweeps across the tooltip card on flip activation.
- **Pure CSS Interactivity:** Operated via `:hover` and `:focus-within` triggers with zero JavaScript dependencies.
- **High-Tech E-Commerce Aesthetics:** Dark glassmorphic container UI with Google Fonts (`Plus Jakarta Sans`, `Inter`) and amber/cyan accents.
- **Accessible & Responsive:** Includes `:focus-visible` focus rings, keyboard focus management, and complete `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #050814;
    --color-surface-card: rgba(14, 20, 36, 0.88);
    --color-surface-tooltip: rgba(20, 28, 52, 0.96);
    --color-amber: #f59e0b;
    --flip-duration: 0.55s;
    --tooltip-width: 255px;
}
```

---

## 🚀 Usage & Integration

1. Copy `62289-css-3d-flip-tooltip-product-catalog/` into `submissions/examples/`.
2. Link `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Incorporate the tooltip wrapper and hotspot markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 high-tech electronics product cards and 3D flip tooltips.
- `style.css` — Complete CSS stylesheet with 3D flip keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
