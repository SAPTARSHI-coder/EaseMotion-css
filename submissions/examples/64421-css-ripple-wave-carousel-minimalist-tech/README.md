# CSS Ripple-Wave Carousel for Minimalist Tech Layouts

> Issue: [#64421](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64421)

Minimalist tech hero carousel featuring concentric expanding ripple wave rings (`@keyframes rippleWaveRing`), pure CSS radio-driven slide switches, and active dot indicators.

---

## ✨ Features & Architectural Highlights

- **Concentric Ripple Ring Physics:** `@keyframes rippleWaveRing` scales circular aura rings outward in continuous wave pulses around slide graphics.
- **Pure CSS Radio Carousel Track:** Driven strictly via hidden radio buttons (`<input type="radio">`) and CSS `:checked` sibling selectors — 100% JavaScript-free.
- **Dynamic Controls & Dots:** Active dot indicators expand into glowing pill shapes while arrow labels toggle track positions.
- **Minimalist Tech Aesthetic:** Dark glassmorphism, Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing cyan/blue/emerald accents, and spec pills.
- **Accessible & Responsive:** Full label keyboard accessibility, fluid track layout collapses, and `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-cyan: #06b6d4;
    --color-blue: #3b82f6;
    --color-emerald: #10b981;
    --ripple-duration: 2.2s;
}
```

---

## 🚀 Usage & Integration

1. Copy `64421-css-ripple-wave-carousel-minimalist-tech/` into `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the radio input carousel track structure and `.carousel-system` markup from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 tech slides, ripple rings, radio controls, and spec cards.
- `style.css` — Complete CSS stylesheet with ripple-wave keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
