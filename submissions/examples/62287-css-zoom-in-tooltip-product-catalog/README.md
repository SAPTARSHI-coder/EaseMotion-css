# CSS Zoom-In Tooltip for Product Catalog Layouts

> Issue: [#62287](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62287)

High-impact gaming hardware product catalog card suite featuring scale zoom tooltips (`scale(0.5)` → `scale(1)` with rapid spring curves), hotspot pulse indicators, and sensor/spec overlays.

---

## ✨ Features & Architectural Highlights

- **Explosive Scale Zoom Entrance:** `@keyframes zoomInEntrance` expands product tooltips from 50% scale into full view using high-tension spring curves.
- **Interactive Hotspot Markers:** Concentric pulse rings (`.hotspot-pulse`) highlight hardware spec inspection trigger targets across product cards.
- **Pure CSS Interactivity:** Operated via `:hover` and `:focus-within` triggers with zero JavaScript dependencies.
- **High-Voltage Gaming Aesthetic:** Dark glassmorphic UI with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing ambient orbs, and electric orange/cyan accents.
- **Accessible & Responsive:** Includes `:focus-visible` focus rings, keyboard focus management, and complete `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070912;
    --color-surface-card: rgba(16, 20, 36, 0.88);
    --color-surface-tooltip: rgba(24, 30, 54, 0.96);
    --color-orange: #f97316;
    --zoom-duration: 0.45s;
    --tooltip-width: 255px;
}
```

---

## 🚀 Usage & Integration

1. Copy `62287-css-zoom-in-tooltip-product-catalog/` into `submissions/examples/`.
2. Link `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Incorporate the tooltip wrapper and hotspot markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 gaming gear product cards and zoom tooltips.
- `style.css` — Complete CSS stylesheet with zoom-in keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
