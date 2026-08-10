# Ease Signature Pad

> Issue: [#67948](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/67948)

An e-signature pad component featuring pure CSS vector pen stroke drawing keyframes (`@keyframes penStroke`), digital signature verification badges, and glassmorphic contract cards.

---

## ✨ Features & Architectural Highlights

- **SVG Path Pen Stroke Draw:** `@keyframes penStroke` animates SVG `stroke-dashoffset` path properties to draw digital signatures smoothly across the pad surface.
- **Synchronized Pen Cursor Motion:** `@keyframes penFollow` translates pen cursors in harmony with stroke drawing progress.
- **Zero External JS:** Powered 100% by pure HTML5 semantic card markup and GPU-accelerated CSS keyframe transitions.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing cyan/purple ambient orbs, and glass contract cards.
- **Accessible & Responsive:** Includes focus ring controls, high-contrast stroke paths, and `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.88);
    --color-cyan: #06b6d4;
    --color-emerald: #10b981;
    --stroke-duration: 3.5s;
}
```

---

## 🚀 Usage & Integration

1. Copy `67948-ease-signature-pad/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.signature-card` markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with the e-signature pad component and technical spec cards.
- `style.css` — Complete CSS stylesheet with pen stroke keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
