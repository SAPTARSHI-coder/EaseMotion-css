# CSS Float-Drift Carousel for Minimalist Tech Layouts

> Issue: [#64423](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64423)

Minimalist tech hero carousel featuring pure CSS radio-driven slide controls, dot indicators, and continuous float-drift vertical oscillation loops (`@keyframes floatDrift`).

---

## ✨ Features & Architectural Highlights

- **Float-Drift Animation Loop:** `@keyframes floatDrift` produces smooth vertical floating oscillation across active slide graphics.
- **Pure CSS Radio Carousel Track:** Driven strictly via hidden radio buttons (`<input type="radio">`) and CSS `:checked` sibling selectors — 100% JavaScript-free.
- **Dynamic Controls & Dots:** Active dot indicators expand into glowing pill shapes while arrow labels toggle track positions.
- **Minimalist Tech Aesthetic:** Dark glassmorphism, Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing neon ambient orbs, and tech feature pills.
- **Accessible & Responsive:** Full label keyboard accessibility, fluid track layout collapses, and `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-blue: #3b82f6;
    --color-purple: #a855f7;
    --float-duration: 4s;
}
```

---

## 🚀 Usage & Integration

1. Copy `64423-css-float-drift-carousel-minimalist-tech/` into `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the radio input carousel track structure and `.carousel-system` markup from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 tech slides, radio controls, and spec cards.
- `style.css` — Complete CSS stylesheet with float-drift keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
