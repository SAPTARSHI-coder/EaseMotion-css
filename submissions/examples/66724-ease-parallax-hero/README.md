# Ease Parallax Hero

> Issue: [#66724](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/66724)

An immersive multi-layered 3D depth parallax hero section powered by pure CSS 3D perspective transforms (`perspective: 1000px`) and continuous ambient floating shapes.

---

## ✨ Features & Architectural Highlights

- **Pure CSS 3D Perspective Architecture:** Utilizes `perspective: 1000px` and `translateZ()` layer depth separation to achieve depth parallax scrolling without JavaScript.
- **Ambient Floating Midground Motion:** `@keyframes floatParallax` applies continuous floating oscillation to background shapes.
- **Zero External JS:** 100% lightweight CSS architecture with zero runtime JS execution overhead.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing neon ambient orbs, and glass hero cards.
- **Accessible & Responsive:** Adapts to all screen widths with full `prefers-reduced-motion: reduce` perspective flattening.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-blue: #3b82f6;
    --color-purple: #a855f7;
    --float-speed: 6s;
}
```

---

## 🚀 Usage & Integration

1. Copy `66724-ease-parallax-hero/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.parallax-wrapper` markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3D parallax layers, hero callouts, and feature cards.
- `style.css` — Complete CSS stylesheet with 3D perspective rules, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
