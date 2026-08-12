# Ease Loading Dots

> Issue: [#66726](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/66726)

A lightweight, high-performance pure CSS loading dot component suite featuring 6 distinct animation presets: Wave, Pulse, Orbit, Elastic, Flash, and Quantum Shimmer.

---

## ✨ Features & Architectural Highlights

- **6 Animation Presets:** Wave pulse, glowing pulse, orbital rotation, elastic squash/stretch, sequential flash, and quantum hue shimmer.
- **Zero External JS:** Powered 100% by GPU-accelerated CSS `@keyframes` animations.
- **Custom CSS Variables:** Easily adjust `--dot-size`, `--dot-gap`, `--dot-color-primary`, and `--dot-speed`.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`) and glowing ambient orbs.
- **Accessible & Responsive:** Includes ARIA labels, focus states, and complete `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --dot-size: 14px;
    --dot-gap: 10px;
    --dot-color-primary: #60a5fa;
    --dot-color-secondary: #22d3ee;
    --dot-speed: 1.2s;
}
```

---

## 🚀 Usage & Integration

1. Copy `66726-ease-loading-dots/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use any `.ease-loading-dots` variation from `demo.html`:
   ```html
   <div class="ease-loading-dots dots-wave">
       <span class="dot"></span>
       <span class="dot"></span>
       <span class="dot"></span>
       <span class="dot"></span>
   </div>
   ```

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 6 loading dot variations and technical spec cards.
- `style.css` — Complete CSS stylesheet with loading dot keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
