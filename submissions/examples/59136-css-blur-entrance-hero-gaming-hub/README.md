# CSS Blur-Entrance Hero Section for Gaming Hub Layouts

> Issue: [#59136](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59136)

Cinematic gaming hero section featuring heavy backdrop blur reveals (`filter: blur(25px)` → `blur(0px)`), frosted glass card HUDs, live platform stats, and dark purple/cyan cyber aesthetics.

---

## ✨ Features & Architectural Highlights

- **Backdrop Blur Entrance Sequence:** `@keyframes blurEntrance` transitions hero elements from extreme 25px blur down to crystal clarity.
- **Frosted Glass Card HUD:** Heavy `backdrop-filter: blur(20px)` and semi-transparent layers for futuristic UI depth.
- **Staggered Keyframe Steps:** Step-staggered delays (`0.1s` → `0.5s`) synchronize the blur reveal across hero components.
- **Cyber Gaming Aesthetics:** Glassmorphic navigation, Google Fonts (`Orbitron`, `Rajdhani`), neon purple and cyan glow accents.
- **Responsive & Accessible:** Adaptable layout grid supporting mobile, tablet, and desktop viewports with `prefers-reduced-motion: reduce` overrides.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #050814;
    --color-surface-card: rgba(14, 20, 36, 0.82);
    --color-purple: #a855f7;
    --color-cyan: #06b6d4;
    --blur-duration: 0.85s;
}
```

---

## 🚀 Usage & Integration

1. Copy `59136-css-blur-entrance-hero-gaming-hub/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML document head:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Integrate the hero banner layout structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — Clean HTML5 showcase page with navigation, hero section, frosted card, and feature specifications.
- `style.css` — Complete CSS stylesheet featuring blur-entrance keyframes, design tokens, responsive layout grid, and reduced-motion rules.
- `README.md` — Technical reference manual.
