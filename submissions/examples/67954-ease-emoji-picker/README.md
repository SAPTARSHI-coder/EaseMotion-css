# Ease Emoji Picker

> Issue: [#67954](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/67954)

An interactive pure CSS emoji picker component featuring radio-driven category tab navigation, spring scale hover animations, and glassmorphic card layouts.

---

## ✨ Features & Architectural Highlights

- **Pure CSS Tab Switching:** Radio button `:checked` selectors toggle category grid visibility (Smileys, Animals, Food, Tech) without JavaScript.
- **Spring Scale Hover Physics:** `transform: scale(1.3)` expands selected emoji buttons smoothly on user hover/focus.
- **Zero External JS:** Powered 100% by pure HTML5 markup and GPU-accelerated CSS transitions.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing yellow/purple ambient orbs, and glass search cards.
- **Accessible & Responsive:** Full keyboard focus states, screen reader support, and `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.88);
    --color-yellow: #f59e0b;
    --color-purple: #a855f7;
}
```

---

## 🚀 Usage & Integration

1. Copy `67954-ease-emoji-picker/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.emoji-picker-card` markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with the 4-category emoji picker and technical spec cards.
- `style.css` — Complete CSS stylesheet with tab switching rules, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
