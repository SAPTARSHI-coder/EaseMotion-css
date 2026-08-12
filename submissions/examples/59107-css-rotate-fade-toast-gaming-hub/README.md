# CSS Rotate-Fade Toast for Gaming Hub Layouts

> Issue: [#59107](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59107)

Sophisticated gaming HUD notification toasts featuring perspective angular rotation (`rotate(-18deg)` → `rotate(0deg)`), staggered opacity reveals, and pure CSS state triggers.

---

## ✨ Features & Architecture

- **3D Angular Rotation Entrance:** `@keyframes rotateFadeIn` smoothly rotates the toast card from `-18deg` to 0deg during entrance fade-in.
- **Beveled Corner Flares:** Beveled glowing corner accent borders (`.corner-accent`) expand on hover for gaming HUD depth.
- **Pure CSS Interactive Controls:** Uses hidden checkbox inputs and label triggers to open/close toasts without JavaScript.
- **Cyber Esports HUD Styling:** Dark glassmorphic container aesthetics paired with Google Fonts (`Orbitron`, `Rajdhani`).
- **Lifespan Progress Tracker:** Countdown timer bar displaying remaining lifespan; pauses on hover.
- **Accessible & Responsive:** Mobile viewport support and complete `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #060913;
    --color-surface-toast: rgba(14, 21, 38, 0.90);
    --color-cyan: #06b6d4;
    --color-purple: #a855f7;
    --rotate-duration: 0.6s;
    --toast-width: 380px;
}
```

---

## 🚀 Usage

1. Copy `59107-css-rotate-fade-toast-gaming-hub/` into `submissions/examples/`.
2. Include `style.css` in your HTML document `<head>`.
3. Reference `demo.html` for component structure and checkbox trigger pattern.

---

## 📂 File Summary

- `demo.html` — Interactive showcase with 4 gaming notification toasts.
- `style.css` — Complete CSS stylesheet featuring rotate-fade keyframes and gaming design tokens.
- `README.md` — Technical manual and overview.
