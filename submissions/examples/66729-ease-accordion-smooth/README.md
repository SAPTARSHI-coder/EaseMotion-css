# Ease Accordion Smooth

> Issue: [#66729](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/66729)

A smooth, accessible pure CSS accordion component leveraging CSS Grid `grid-template-rows: 0fr → 1fr` height transitions, rotating chevron indicators, and HTML5 `<details>` elements.

---

## ✨ Features & Architectural Highlights

- **CSS Grid Dynamic Height Transition:** Animates `grid-template-rows: 0fr` to `1fr` to enable smooth height expansion regardless of content length.
- **Pure CSS Chevron Rotation:** `transform: rotate(90deg)` rotates indicator icons smoothly upon `<details open>` activation.
- **Zero External JS:** Built natively with HTML5 `<details>` and `<summary>` elements — 100% JavaScript-free.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing blue/purple ambient orbs, and glass cards.
- **Accessible & Responsive:** Native keyboard navigation, screen-reader expand/collapse announcements, and `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-blue: #3b82f6;
    --color-purple: #a855f7;
}
```

---

## 🚀 Usage & Integration

1. Copy `66729-ease-accordion-smooth/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.ease-accordion-item` markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 4 accordion items and technical spec cards.
- `style.css` — Complete CSS stylesheet with Grid height transitions, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
