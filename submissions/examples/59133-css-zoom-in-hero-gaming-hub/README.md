# CSS Zoom-In Hero Section for Gaming Hub Layouts

> Issue: [#59133](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59133)

High-voltage gaming hero banner featuring explosive scale expansion zoom entrance animations (`scale(0.5)` → `scale(1)`), radiant aura pulse rings, live player stats, and electric orange/yellow cyber aesthetics.

---

## ✨ Features & Architectural Highlights

- **Scale Expansion Zoom Entrance:** `@keyframes zoomInEntrance` scales hero elements from 50% size into position using high-tension spring physics.
- **Staggered Keyframe Sequence:** Step-staggered delays (`0.1s` → `0.5s`) synchronize the zoom reveal sequence across hero elements.
- **Electric Gaming Aesthetics:** Glassmorphic HUD elements, Google Fonts (`Orbitron`, `Rajdhani`), electric orange and yellow glow accents.
- **Responsive Layout:** Flex/Grid layout adapting seamlessly from multi-column desktop to single-column mobile viewports.
- **Accessible:** Fully supports `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070912;
    --color-surface-card: rgba(16, 20, 36, 0.88);
    --color-orange: #f97316;
    --color-yellow: #eab308;
    --zoom-duration: 0.75s;
}
```

---

## 🚀 Usage & Integration

1. Copy `59133-css-zoom-in-hero-gaming-hub/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML document head:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Integrate the hero banner layout structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — Clean HTML5 showcase page with navigation, hero banner, showcase card, and feature specifications.
- `style.css` — Complete CSS stylesheet featuring zoom-in keyframes, design tokens, responsive layout grid, and reduced-motion rules.
- `README.md` — Technical reference manual.
