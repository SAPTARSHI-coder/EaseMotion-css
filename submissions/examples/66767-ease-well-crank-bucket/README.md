# Ease Well Crank Bucket

> Issue: [#66767](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/66767)

A pure CSS mechanical animation component simulating a traditional water well winch crank, spooling rope kinematics, and hoisting water bucket physics.

---

## ✨ Features & Architectural Highlights

- **Rotational Crank Kinematics:** `@keyframes crankRotate` spins the wooden crank handle 360 degrees in 100% pure CSS.
- **Synchronized Hoist Physics:** `@keyframes bucketHoist` and `@keyframes ropeExtend` raise and lower the suspended bucket in harmony with winch drum winding.
- **Water Ripple Dynamics:** `@keyframes waterRipple` expands concentric ripple rings inside the stone well base.
- **Zero External JS:** Pure HTML5 structure & GPU-accelerated CSS keyframe animations.
- **Accessible & Responsive:** Includes high-DPI vector scaling, screen-reader markup, and `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-wood-dark: #78350f;
    --color-wood-light: #b45309;
    --color-rope: #d97706;
    --color-water: #0284c7;
    --anim-speed: 5s;
}
```

---

## 🚀 Usage & Integration

1. Copy `66767-ease-well-crank-bucket/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.well-container` markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with the mechanical well crank animation and technical spec cards.
- `style.css` — Complete CSS stylesheet with winch keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
