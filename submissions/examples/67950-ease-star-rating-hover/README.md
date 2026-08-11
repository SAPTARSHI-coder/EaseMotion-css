# Ease Star Rating Hover

> Issue: [#67950](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/67950)

An interactive pure CSS star rating component using radio input `:checked` and `:hover` sibling selectors (`flex-direction: row-reverse`) and spring star scale keyframe animations.

---

## ✨ Features & Architectural Highlights

- **Pure CSS Suffix Sibling Selection:** Uses `flex-direction: row-reverse` and `~` sibling selectors to light up preceding stars on hover/check without JavaScript.
- **Star Pop Scale Physics:** `@keyframes starPop` expands active star elements with spring overshoot timing curves.
- **Zero External JS:** Powered 100% by pure HTML5 form inputs and GPU-accelerated CSS keyframes.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing gold/purple ambient orbs, and glass rating cards.
- **Accessible & Responsive:** Full keyboard arrow navigation, form accessibility, and `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.88);
    --color-star-active: #f59e0b;
    --color-star-glow: #fbbf24;
}
```

---

## 🚀 Usage & Integration

1. Copy `67950-ease-star-rating-hover/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.star-rating-group` markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with the star rating widget and technical spec cards.
- `style.css` — Complete CSS stylesheet with star pop keyframes, sibling selector logic, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
