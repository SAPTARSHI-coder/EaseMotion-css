# CSS Elastic-Slide Toast for Gaming Hub Layouts

> Issue: [#59109](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59109)

High-energy gaming notification toasts featuring fluid spring overshoot entrance physics (`cubic-bezier(0.68, -0.6, 0.32, 1.6)`), tactile bounce effects, and pure CSS state triggers.

---

## ✨ Features & Architecture

- **Elastic Spring Overshoot Physics:** `@keyframes elasticSlideIn` utilizes custom cubic-bezier curves to simulate physical spring tension upon arrival.
- **Left Indicator Bounce:** Animated indicator bar stretches and compresses alongside entrance overshoot phase.
- **Pure CSS Interactive Controls:** Uses hidden checkbox inputs and label triggers to open/close toasts without JavaScript.
- **Cyber Esports HUD Styling:** Dark glassmorphic container aesthetics paired with Google Fonts (`Orbitron`, `Rajdhani`).
- **Lifespan Progress Tracker:** Countdown timer bar displaying remaining lifespan; pauses on hover.
- **Accessible & Responsive:** Mobile viewport support and complete `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #080711;
    --color-surface-toast: rgba(16, 15, 32, 0.90);
    --color-amber: #f59e0b;
    --color-rose: #f43f5e;
    --ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
    --toast-width: 380px;
}
```

---

## 🚀 Usage

1. Copy `59109-css-elastic-slide-toast-gaming-hub/` into `submissions/examples/`.
2. Include `style.css` in your HTML document `<head>`.
3. Reference `demo.html` for component structure and checkbox trigger pattern.

---

## 📂 File Summary

- `demo.html` — Interactive showcase with 4 gaming notification toasts.
- `style.css` — Complete CSS stylesheet featuring elastic spring keyframes and gaming design tokens.
- `README.md` — Technical manual and overview.
