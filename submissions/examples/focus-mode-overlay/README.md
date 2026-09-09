# CSS Focus Mode Overlay

A pure CSS "Spotlight" reading mode that automatically dims surrounding content to minimize distractions. When a user hovers over or tabs into a paragraph, the surrounding environment fades and blurs, drawing complete attention to the active text.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript required. Uses a combination of `:hover` and `:focus-within` on the parent container to drive the state.
- **Keyboard Accessible:** Fully supports keyboard navigation. Pressing `Tab` triggers the exact same spotlight effect as hovering, utilizing `tabindex="0"` and `:focus-within`.
- **Performance Optimized:** Uses hardware-accelerated CSS properties (`opacity`, `filter`, `transform`).
- **Accessible:** Respects `@media (prefers-reduced-motion: reduce)` by gracefully stripping the blur and scale animations, leaving a clean opacity fade.

## 📁 Files Included
```text
demo.html
style.css
README.md