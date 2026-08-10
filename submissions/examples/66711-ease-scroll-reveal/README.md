# Ease Scroll Reveal

> Issue: [#66711](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/66711)

A lightweight pure CSS scroll reveal animation suite featuring 4 entrance presets: Fade Up, Scale Zoom, 3D Perspective Flip, and Frosted Blur.

---

## ✨ Features & Architectural Highlights

- **CSS View-Timeline Integration:** Leverages `animation-timeline: view()` and `@keyframes` to trigger scroll-driven entrance reveals automatically.
- **4 Distinct Presets:** `.reveal-fade-up`, `.reveal-zoom-in`, `.reveal-flip-3d`, and `.reveal-blur-in`.
- **Zero External JS:** 100% pure HTML5 & CSS architecture with no IntersectionObserver code overhead.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing blue/purple ambient orbs, and glass cards.
- **Accessible & Responsive:** Includes focus states and complete `prefers-reduced-motion: reduce` fallback rules that immediately show content.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-blue: #3b82f6;
    --color-purple: #a855f7;
    --reveal-duration: 0.8s;
}
```

---

## 🚀 Usage & Integration

1. Copy `66711-ease-scroll-reveal/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Add the `.scroll-reveal` and preset class to any element:
   ```html
   <div class="scroll-reveal reveal-fade-up">
       <h2>Scroll Reveal Title</h2>
   </div>
   ```

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 4 scroll reveal presets and spec cards.
- `style.css` — Complete CSS stylesheet with view-timeline keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
