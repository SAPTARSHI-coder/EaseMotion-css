# CSS Elastic-Slide Hero Section for Gaming Hub Layouts

> Issue: [#59139](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59139)

High-energy gaming hero section featuring fluid spring overshoot entrance physics (`cubic-bezier(0.68, -0.6, 0.32, 1.6)`), floating status badges, live tournament stats, and dark cyber aesthetics.

---

## ✨ Features & Architectural Highlights

- **Elastic Overshoot Physics:** Custom spring curve `cubic-bezier(0.68, -0.6, 0.32, 1.6)` powers entrance transitions for badges, headers, and CTA buttons.
- **Staggered Entrance Delays:** Step-staggered delays (`0.1s` → `0.5s`) create a synchronized rhythm across hero elements.
- **Floating Badge Mechanics:** `@keyframes badgeFloat` continuously hovers floating achievement badges over the featured hero card.
- **Cyber Gaming Aesthetics:** Glassmorphic HUD elements, Google Fonts (`Orbitron`, `Rajdhani`), neon gold and cyan glow accents.
- **Responsive Architecture:** Flex/Grid layout adapting seamlessly from multi-column desktop to single-column mobile viewports.
- **Accessible:** Fully supports `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-amber: #f59e0b;
    --color-cyan: #06b6d4;
    --ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
```

---

## 🚀 Usage & Integration

1. Copy `59139-css-elastic-slide-hero-gaming-hub/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML document head:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the structural layout from `demo.html` in your hero banner section.

---

## 📂 File Summary

- `demo.html` — Clean HTML5 showcase page with navigation header, hero banner, live stats, and features grid.
- `style.css` — Complete CSS stylesheet featuring elastic spring keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical reference manual.
