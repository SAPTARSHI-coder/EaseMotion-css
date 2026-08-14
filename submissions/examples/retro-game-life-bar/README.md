# CSS Retro Game Life Bar

A classic video game-style HUD life bar featuring 8-bit segmented health blocks, critical health warning flickers, and pulsing pixel heart indicators built with pure HTML and CSS.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript dependencies.
- **Segmented 8-Bit Blocks:** Uses CSS borders and inset shadows to emulate authentic retro arcade consoles.
- **Critical Health Warning:** Features `steps(2, start)` flashing animation when under low HP (`data-status="danger"`).
- **Heartbeat Animation:** Heart rate keyframes applied to remaining lives.
- **Accessible & Responsive:** Includes ARIA `role="progressbar"` and `role="status"` metadata, disabling flashing and scaling animations under `@media (prefers-reduced-motion: reduce)`.

## 📁 Files Included
```text
demo.html
style.css
README.md