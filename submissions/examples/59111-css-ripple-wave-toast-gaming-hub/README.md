# CSS Ripple-Wave Toast for Gaming Hub Layouts

> Issue: [#59111](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59111)

High-energy gaming toast notifications featuring expanding radar wave ripples, sonar pulse rings upon arrival, and pure CSS state triggers tailored for esports gaming portals.

---

## ✨ Features & Architecture

- **Concentric Sonar Wave Pulse:** Uses `@keyframes sonarRipplePulse` with delayed multi-ring pseudo elements (`.ring-1`, `.ring-2`) to emit energy shockwaves.
- **Pure CSS Interactive Controls:** Features pure HTML/CSS state toggles (`<input type="checkbox">` and `<label>`) allowing users to trigger/dismiss toasts without JavaScript.
- **Cyber Gaming Aesthetics:** Dark obsidian glassmorphism UI with neon orange, emerald, blue, and yellow accents.
- **Lifespan Progress Tracking:** Auto-decrementing progress bar indicating toast remaining display time.
- **Accessible & Responsive:** Full support for `prefers-reduced-motion: reduce` and mobile viewports.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #050811;
    --color-surface-toast: rgba(12, 18, 34, 0.90);
    --color-orange: #f97316;
    --color-emerald: #10b981;
    --ripple-speed: 1.6s;
    --toast-width: 385px;
}
```

---

## 🚀 Usage

1. Copy `59111-css-ripple-wave-toast-gaming-hub/` into `submissions/examples/`.
2. Link `style.css` in your HTML document.
3. Incorporate the toast markup and sonar ripple ring elements in your layout.

---

## 📂 File Summary

- `demo.html` — Interactive showcase with 4 gaming sonar notification alerts.
- `style.css` — Complete stylesheet containing ripple keyframes and cyber layout tokens.
- `README.md` — Documentation manual.
