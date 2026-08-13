# Ease Pendulum Rod Swing

> Issue: [#66766](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/66766)

A physics-driven harmonic motion component suite featuring grandfather clock pendulums, Newton's cradle momentum transfer, and neon metronome swing animations.

---

## ✨ Features & Architectural Highlights

- **Harmonic Motion Physics:** Uses `transform-origin: top center` and `@keyframes pendulumSwing` to simulate real-world gravitational pendulum arcs.
- **Newton's Cradle Kinetics:** `@keyframes cradleLeft` and `@keyframes cradleRight` deliver alternating sphere collision momentum transfer.
- **Zero External JS:** Powered 100% by pure HTML5 tags and GPU-accelerated CSS keyframe animations.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing gold/purple ambient orbs, and glass cards.
- **Accessible & Responsive:** Full screen-reader support, responsive grid breakpoints, and `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-gold: #f59e0b;
    --color-cyan: #06b6d4;
    --swing-period: 2.4s;
}
```

---

## 🚀 Usage & Integration

1. Copy `66766-ease-pendulum-rod-swing/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use any `.pendulum-assembly` or `.cradle-assembly` markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 pendulum variations and technical spec cards.
- `style.css` — Complete CSS stylesheet with pendulum keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
