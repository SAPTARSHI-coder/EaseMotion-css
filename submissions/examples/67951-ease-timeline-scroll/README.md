# Ease Timeline Scroll

> Issue: [#67951](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/67951)

A vertical roadmap timeline component featuring a glowing central laser spine (`@keyframes laserPulse`), alternating event cards, and CSS view-timeline entrance transitions.

---

## ✨ Features & Architectural Highlights

- **CSS View-Timeline Integration:** Uses `animation-timeline: view()` and `@keyframes slideInLeft`/`slideInRight` to trigger scroll reveals automatically.
- **Glowing Laser Spine:** `@keyframes laserPulse` pulses a central neon line down the roadmap timeline.
- **Zero External JS:** 100% pure HTML5 & CSS architecture with no IntersectionObserver code overhead.
- **Modern Dark Glassmorphic UI:** Built with Google Fonts (`Plus Jakarta Sans`, `Inter`), glowing blue/purple ambient orbs, and glass cards.
- **Accessible & Responsive:** Includes focus states, screen reader landmarks, and `prefers-reduced-motion: reduce` rules.

---

## 🎨 CSS Custom Properties

```css
:root {
    --color-bg-dark: #070913;
    --color-surface-card: rgba(15, 22, 40, 0.85);
    --color-blue: #3b82f6;
    --color-purple: #a855f7;
    --color-cyan: #06b6d4;
}
```

---

## 🚀 Usage & Integration

1. Copy `67951-ease-timeline-scroll/` into your project under `submissions/examples/`.
2. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Use the `.timeline-wrapper` markup structure from `demo.html`.

---

## 📂 File Summary

- `demo.html` — HTML5 showcase page with the 4-event vertical roadmap and technical spec cards.
- `style.css` — Complete CSS stylesheet with view-timeline keyframes, laser spine rules, responsive breakpoints, and reduced-motion rules.
- `README.md` — Technical documentation manual.
