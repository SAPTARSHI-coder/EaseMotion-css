# CSS Glowing Vertical Timeline (Cyberpunk)

A high-impact, pure CSS vertical timeline featuring a glowing neon aesthetic inspired by Cyberpunk UI design. It utilizes sharp chamfered geometry, intense text/box shadows, and a fully responsive alternating layout.

## 🎯 Features
- **Pure CSS/HTML:** Built entirely without JavaScript. Uses structural pseudo-classes (`:nth-child`) to automatically handle the alternating left/right layout on desktop.
- **Cyberpunk Aesthetic:** Achieved via `clip-path: polygon()` for chamfered corners, high-contrast neon hex colors (`#0ff`, `#f0f`, `#ff0`), and monospace typography.
- **Hardware-Accelerated Glows:** Combines multi-layered `box-shadow` and `text-shadow` properties that intensify dynamically on hover.
- **Responsive Layout:** The central glowing axis snaps to the left margin on viewports under `768px`, smoothly converting the alternating cards into a standard stacked mobile list.
- **Accessible:** Respects `@media (prefers-reduced-motion: reduce)` by disabling the hover translations and color transition delays.

## 📁 Files Included
```text
demo.html
style.css
README.md