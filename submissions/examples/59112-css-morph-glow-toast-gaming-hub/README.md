# CSS Morph-Glow Toast for Gaming Hub Layouts

> Issue: [#59112](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59112)

Dynamic gaming notification alerts featuring multi-color shifting border morph gradients, cyber neon glows, interactive toast triggers, and pure CSS animation states.

---

## ✨ Features & Architecture

- **Morphing Border Gradients:** `@keyframes morphGlowShift` cycles multi-stop linear gradients across border parameters in real time.
- **Pure CSS Interactive Triggers:** Uses hidden `<input type="checkbox">` and `<label>` controls to toggle toast visibility dynamically without external JS.
- **Esports & Gaming Aesthetic:** Built with glassmorphism, Google Fonts (`Orbitron`, `Rajdhani`), neon gold/cyan/purple highlights, and dark cyber themes.
- **Lifespan Progress Indicator:** Automatic progress bar counting down display time; pauses on hover.
- **Accessible:** Includes `prefers-reduced-motion: reduce` overrides and proper ARIA roles (`role="alert"`).

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-toast: rgba(15, 20, 36, 0.88);
    --color-gold: #f59e0b;
    --color-cyan: #06b6d4;
    --color-purple: #a855f7;
    --morph-speed: 4s;
    --toast-width: 380px;
}
```

---

## 🚀 Usage

1. Copy `59112-css-morph-glow-toast-gaming-hub/` into your project under `submissions/examples/`.
2. Include `style.css` in your document `<head>`.
3. Use the toast notification markup and checkbox trigger pattern from `demo.html`.

---

## 📂 Files Included

- `demo.html` — Full HTML5 showcase with 4 interactive gaming toast alerts.
- `style.css` — Complete CSS stylesheet with cyber design tokens, keyframes, and media queries.
- `README.md` — Technical manual and guide.
