# CSS Scale-Hover Tooltip for Product Catalog Layouts

> Issue: [#62288](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62288)

Home decor and furniture product catalog card suite featuring smooth spring scale expansion tooltips (`scale(0.85)` → `scale(1)` with cubic-bezier spring overshoot), hotspot pulse indicators, and upholstery/timber spec overlays.

---

## ✨ Features & Architectural Highlights

- **Spring Scale Expansion Physics:** Custom curve `cubic-bezier(0.34, 1.56, 0.64, 1)` provides tactile spring overshoot as tooltips scale into view.
- **Interactive Hotspot Markers:** Pulsing rings (`.hotspot-pulse`) highlight spec inspection trigger targets across product cards.
- **Pure CSS Interactivity:** Operated via `:hover` and `:focus-within` triggers with zero JavaScript dependencies.
- **Home & Interior Aesthetic:** Dark glassmorphism, Google Fonts (`Plus Jakarta Sans`, `Inter`), earth-tone amber and emerald accents.
- **Accessible & Responsive:** Includes `:focus-visible` focus rings, keyboard focus management, and complete `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070912;
    --color-surface-card: rgba(18, 24, 38, 0.85);
    --color-surface-tooltip: rgba(24, 32, 52, 0.96);
    --color-amber: #f59e0b;
    --scale-duration: 0.45s;
    --tooltip-width: 255px;
}
```

---

## 🚀 Usage & Integration

1. Copy `62288-css-scale-hover-tooltip-product-catalog/` into `submissions/examples/`.
2. Link `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Incorporate the tooltip wrapper and hotspot markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 home decor product cards and scale-hover tooltips.
- `style.css` — Complete CSS stylesheet with scale-hover transitions, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
