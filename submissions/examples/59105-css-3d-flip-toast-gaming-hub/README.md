# CSS 3D-Flip Toast for Gaming Hub Layouts

> Issue: [#59105](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59105)

Dimensional gaming HUD notification cards featuring 3D perspective rotational flips (`rotateX(-90deg)` → `rotateX(0deg)`), holographic sheen reflections, and pure CSS state triggers.

---

## ✨ Features & Architecture

- **3D Perspective Flip Entrance:** `@keyframes flip3DIn` flips notifications down into perspective space along the X-axis using `perspective: 1200px` and `backface-visibility: hidden`.
- **Holographic Sheen Sweeps:** Diagonal light sheen overlay sweeps across the glass card surface on hover.
- **Pure CSS Interactive Controls:** Uses hidden checkbox inputs and label triggers to open/close toasts without JavaScript.
- **Cyber Esports HUD Styling:** Dark glassmorphic container aesthetics paired with Google Fonts (`Orbitron`, `Rajdhani`).
- **Lifespan Progress Tracker:** Countdown timer bar displaying remaining lifespan; pauses on hover.
- **Accessible & Responsive:** Mobile viewport support and complete `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #050814;
    --color-surface-toast: rgba(14, 20, 36, 0.92);
    --color-gold: #f59e0b;
    --color-purple: #a855f7;
    --flip-duration: 0.65s;
    --toast-width: 380px;
}
```

---

## 🚀 Usage

1. Copy `59105-css-3d-flip-toast-gaming-hub/` into `submissions/examples/`.
2. Include `style.css` in your HTML document `<head>`.
3. Reference `demo.html` for component structure and checkbox trigger pattern.

---

## 📂 File Summary

- `demo.html` — Interactive showcase with 4 gaming notification toasts.
- `style.css` — Complete CSS stylesheet featuring 3D-flip keyframes and gaming design tokens.
- `README.md` — Technical manual and overview.
