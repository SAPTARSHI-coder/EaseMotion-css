# Ease Kanban Drag

> Issue: [#67955](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/67955)

A pure CSS Kanban board component featuring simulated drag grab tilt physics, active column card highlights, and glassmorphic task cards.

---

## ✨ Features & Architectural Highlights

- **Pure CSS Drag Grab Physics:** `transform: rotate(3deg) scale(1.04)` simulates active card dragging states upon focus/hover.
- **Glassmorphic Task Columns:** Built with dark backdrop blur effects (`backdrop-filter: blur(14px)`) and category badges.
- **Zero External JS:** Powered 100% by pure HTML5 semantic card markup and GPU-accelerated CSS spring transitions.
- **Modern Dark Aesthetic:** Integrated Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing neon dot indicators, and task avatars.
- **Accessible & Responsive:** Includes focus state rings, ARIA roles, and complete `prefers-reduced-motion: reduce` fallback rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-blue: #3b82f6;
    --color-purple: #a855f7;
    --color-cyan: #06b6d4;
    --color-emerald: #10b981;
}
```

---

## 🚀 Usage & Integration

1. Copy `67955-ease-kanban-drag/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Incorporate the `.kanban-board` grid markup from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with 3 Kanban columns (Backlog, In Progress, Done) and technical spec cards.
- `style.css` — Complete CSS stylesheet with card drag keyframes, design tokens, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
