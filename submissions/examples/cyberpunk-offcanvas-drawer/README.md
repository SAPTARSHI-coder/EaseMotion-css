# CSS Interactive Offcanvas Drawer (Cyberpunk)

A pure CSS sliding offcanvas navigation menu with a high-contrast Cyberpunk aesthetic. It utilizes the hidden checkbox hack to manage the open/close state without any JavaScript dependencies.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript required for state management. Uses `<input type="checkbox">` and `<label>` pairs.
- **Cyberpunk Styling:** Features sharp `clip-path` chamfered corners, neon borders (`#0ff`, `#f0f`, `#ff0`), and monospace typography.
- **Hardware-Accelerated Animation:** Uses `transform: translateX` for a smooth 60fps sliding drawer animation.
- **Accessible:** Includes ARIA `role="dialog"`, semantic navigation, keyboard focusability via `tabindex`, and drops transition animations for `@media (prefers-reduced-motion: reduce)`.

## 📁 Files Included
```text
demo.html
style.css
README.md