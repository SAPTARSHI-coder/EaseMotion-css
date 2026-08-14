# CSS Morph-Glow Carousel for Minimalist Tech Layouts

> Issue: [#64422](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64422)

Minimalist tech hero carousel featuring multi-color morphing gradient border glow halos (`@keyframes morphGlowShift`), pure CSS radio-driven slide switches, and active dot indicators.

---

## ✨ Features & Architectural Highlights

- **Morphing Gradient Aura:** `@keyframes morphGlowShift` cycles multi-stop gradient background positions around the active carousel frame.
- **Pure CSS Radio Carousel Track:** Driven strictly via hidden radio buttons (`<input type="radio">`) and CSS `:checked` sibling selectors — 100% JavaScript-free.
- **Dynamic Controls & Dots:** Active dot indicators expand into glowing pill shapes while arrow labels toggle track positions.
- **Minimalist Tech Aesthetic:** Dark glassmorphism, Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing neon purple/cyan/rose accents, and spec pills.
- **Accessible & Responsive:** Full label keyboard accessibility, fluid track layout collapses, and `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.88);
    --color-purple: #a855f7;
    --color-cyan: #06b6d4;
    --color-rose: #f43f5e;
    --morph-speed: 4s;
}
```

---

## 🚀 Usage & Integration

1. Copy `64422-css-morph-glow-carousel-minimalist-tech/` into `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the radio input carousel track structure and `.carousel-system` markup from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 tech slides, morph-glow frame, radio controls, and spec cards.
- `style.css` — Complete CSS stylesheet with morph-glow keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
