# Ease Image Comparison

> Issue: [#66720](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/66720)

An interactive before-and-after image comparison component using dual-layer clipping containers and HTML5 range slider inputs.

---

## ✨ Features & Architectural Highlights

- **Dual-Layer Split Overlay:** Features absolute layered containers clipped dynamically using CSS `width: %` properties.
- **Pure CSS Range Input Overlay:** Utilizes a transparent range input placed over the comparison wrapper for touch and pointer interaction.
- **Zero External JS Frameworks:** Fully self-contained pure HTML5 & CSS architecture.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), cyan/purple glowing ambient orbs, and visual HUD labels.
- **Accessible & Responsive:** Full keyboard accessibility with ARIA attributes and complete `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-cyan: #06b6d4;
    --color-purple: #a855f7;
}
```

---

## 🚀 Usage & Integration

1. Copy `66720-ease-image-comparison/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Incorporate the `.comparison-container` markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with interactive comparison slider and feature cards.
- `style.css` — Complete CSS stylesheet with split layer clipping, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
