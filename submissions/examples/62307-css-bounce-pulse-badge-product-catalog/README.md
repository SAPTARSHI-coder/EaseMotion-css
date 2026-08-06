# CSS Bounce-Pulse Badge for Product Catalog Layouts

> Issue: [#62307](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62307)

High-energy retail promo catalog card suite featuring pure CSS bounce-pulse badges with continuous vertical bounce oscillation (`@keyframes bounceOscillation`) and expanding pulse aura rings (`.pulse-ring`).

---

## ✨ Features & Architectural Highlights

- **Rhythmic Bounce Oscillation:** `@keyframes bounceOscillation` drives continuous vertical bouncing and elastic squash/stretch.
- **Expanding Pulse Aura Ring:** `.pulse-ring` element scales outward with `@keyframes auraPulseRing` for maximum promotional urgency.
- **Hover Pause State:** Bouncing animation automatically pauses on card hover for clean readability.
- **Pure CSS Component Architecture:** Built using HTML5 semantic structure and CSS tokenization with zero JavaScript dependencies.
- **High-Energy Retail Aesthetics:** Dark glassmorphic product cards, Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing rose/amber/purple accents.
- **Accessible & Responsive:** Adapts seamlessly to tablet and mobile viewports with complete `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070912;
    --color-surface-card: rgba(16, 22, 38, 0.85);
    --color-rose: #f43f5e;
    --color-amber: #f59e0b;
    --bounce-duration: 2s;
    --pulse-duration: 1.8s;
}
```

---

## 🚀 Usage & Integration

1. Copy `62307-css-bounce-pulse-badge-product-catalog/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.bounce-pulse-badge` markup pattern from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 flash sale product cards and bounce-pulse badges.
- `style.css` — Complete CSS stylesheet with bounce and pulse keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
