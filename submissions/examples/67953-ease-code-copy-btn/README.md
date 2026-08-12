# Ease Code Copy Btn

> Issue: [#67953](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/67953)

A developer tooling component featuring a syntax-highlighted code block card with pure CSS animated copy button states and checkmark success feedback.

---

## ✨ Features & Architectural Highlights

- **Checkmark Success Animation:** `@keyframes checkmarkPop` expands success checkmark icons into view on `:active`/`:focus-visible` button states.
- **Syntax-Highlighted Code Block:** Includes clean HSL syntax tokens (`Fira Code` font) for CSS custom properties, selectors, keywords, and strings.
- **Zero External JS:** Powered 100% by pure HTML5 markup and GPU-accelerated CSS keyframe transitions.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Fira Code`, `Inter`), glowing cyan/purple ambient orbs, and glass cards.
- **Accessible & Responsive:** Full focus ring management, ARIA labels, and `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.92);
    --color-cyan: #06b6d4;
    --color-emerald: #10b981;
}
```

---

## 🚀 Usage & Integration

1. Copy `67953-ease-code-copy-btn/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.code-card` markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with the syntax-highlighted code block and technical spec cards.
- `style.css` — Complete CSS stylesheet with copy feedback keyframes, syntax tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
