# CSS Ripple-Wave Pricing Table for Fintech Dashboard Layouts

> Issue: [#59412](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59412)

An advanced pure CSS pricing table featuring concentric circular shockwaves that emanate from interaction focal points, engineered for fintech SaaS applications and payment gateways.

---

## ✨ Features & Architectural Highlights

- **Concentric Circular Ripple Waves:** `@keyframes rippleExpand` generates smooth expanding circular shockwaves on hover/focus using pseudo-elements.
- **Pure CSS Billing Cycle Switcher:** Uses the CSS radio-button trick (`input[type="radio"]:checked ~ .pricing-grid`) for instant monthly/annual pricing updates without JavaScript.
- **Dark Neon Aesthetics:** Crafted with glassmorphism, ambient background glowing orbs, and neon cyan/orange accents.
- **Accessible & Motion-Aware:** Includes complete `prefers-reduced-motion: reduce` rules and keyboard focus indicators (`:focus-visible`).
- **Fully Responsive:** Adapts from 3-column desktop grid to 2-column tablet and 1-column mobile layouts.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #050914;
    --color-surface-card: rgba(11, 19, 36, 0.82);
    --color-cyan: #06b6d4;
    --color-orange: #f97316;
    --ripple-duration: 0.85s;
    --ripple-color: rgba(6, 182, 212, 0.25);
}
```

---

## 🚀 Usage & Integration

1. Copy the folder `59412-css-ripple-wave-pricing-table-fintech-dashboard/` into `submissions/examples/`.
2. Include `style.css` in your HTML document head:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the structural layout from `demo.html` to integrate into your application.

---

## 📂 File Summary

- `demo.html` — Full HTML5 showcase with 3 pricing tiers and radio billing toggle.
- `style.css` — Modular CSS stylesheet covering keyframes, design tokens, responsive breakpoints, and reduced-motion overrides.
- `README.md` — Technical reference manual.
