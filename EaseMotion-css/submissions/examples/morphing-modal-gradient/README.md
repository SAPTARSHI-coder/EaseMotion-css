# CSS Morphing Modal with Gradient Styling

A visually striking, pure CSS modal implementation. It triggers a fluid, hardware-accelerated shape-morphing animation that expands a dynamic gradient-bordered dialog box, entirely avoiding JavaScript dependencies.

## 🎯 Features
- **Pure CSS/HTML State:** Uses the HTML hidden checkbox hack (`:checked` combined with general sibling combinators `~`) to handle the modal open/close state natively.
- **Fluid Morphing Animation:** Smoothly transitions `border-radius`, `transform: scale`, and `opacity` using a custom `cubic-bezier` curve to create a "springy" shape-shifting effect.
- **Dynamic Gradient Borders:** Utilizes a nested pseudo-element technique to create a vibrant, multi-stop gradient border around the modal content.
- **Accessible & Responsive:** Implements ARIA `role="dialog"`, ARIA labels, semantic `<label>` triggers, and instantly degrades to a simple opacity fade under `@media (prefers-reduced-motion: reduce)`.

## 📁 Files Included
```text
demo.html
style.css
README.md