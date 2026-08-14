# Ease Liquid Button

> Issue: [#66709](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/66709)

An organic liquid wave button component suite featuring pure CSS blob fill keyframe animations (`@keyframes liquidRotate`), fluid neon glow ripples, and glassmorphic button variants.

---

## ✨ Features & Architectural Highlights

- **Rotating Liquid Blob Fill:** Utilizes rotating 40% border-radius pseudo-elements (`.liquid-wave`) with `@keyframes liquidRotate` to generate natural organic wave rises on hover.
- **Zero External JS:** Powered 100% by pure HTML5 button tags and GPU-accelerated CSS animations.
- **4 Color Variants:** Includes `.btn-cyan`, `.btn-purple`, `.btn-rose`, and `.btn-emerald`.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing cyan/purple ambient orbs, and glass cards.
- **Accessible & Responsive:** Full focus ring management, keyboard interaction support, and `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-cyan: #06b6d4;
    --color-purple: #a855f7;
    --liquid-speed: 5s;
}
```

---

## 🚀 Usage & Integration

1. Copy `66709-ease-liquid-button/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Add the `.ease-liquid-btn` button markup:
   ```html
   <button class="ease-liquid-btn btn-cyan">
       <span class="liquid-wave"></span>
       <span class="btn-text">🌊 Ocean Surge</span>
   </button>
   ```

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 4 liquid button variants and spec cards.
- `style.css` — Complete CSS stylesheet with liquid wave keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
