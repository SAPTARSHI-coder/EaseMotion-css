# CSS Glitch-Flicker Badge for Product Catalog Layouts

> Issue: [#62309](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/62309)

Cybernetic tech product catalog suite featuring pure CSS glitch-flicker badges with clip-path slice offsets (`clip-path: inset(...)`), RGB Chromatic Aberration split shadows, and dark cyber layout HUDs.

---

## ✨ Features & Architectural Highlights

- **Clip-Path Slice Shift Glitch:** `@keyframes glitchAnimBefore` and `glitchAnimAfter` continuously slice text lines and offset RGB layers.
- **Chromatic Aberration (RGB Split):** Pseudo-element text-shadows produce cyan and magenta color fringe highlights.
- **Pure CSS Component Architecture:** Built using HTML5 semantic structure and CSS tokenization with zero JavaScript dependencies.
- **High-Tech Visual Aesthetics:** Dark cybernetic cards, Google Fonts (`Orbitron`, `Rajdhani`), cyber grid canvas, and neon cyan/magenta accents.
- **Accessible & Responsive:** Adapts seamlessly to tablet and mobile viewports with complete `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #050811;
    --color-surface-card: rgba(14, 20, 36, 0.88);
    --color-cyan: #06b6d4;
    --color-magenta: #ec4899;
    --glitch-duration: 2.5s;
}
```

---

## 🚀 Usage & Integration

1. Copy `62309-css-glitch-flicker-badge-product-catalog/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.glitch-badge` markup pattern from `demo.html` with `data-text` matching element content.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 tech product cards and glitch-flicker badges.
- `style.css` — Complete CSS stylesheet with glitch keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
