# CSS Parallax Avatar (Minimalist)

A clean, minimalist user avatar component that leverages CSS 3D transforms to create a physical parallax depth effect entirely without JavaScript.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript dependencies.
- **Hardware-Accelerated 3D Parallax:** Utilizes `perspective` and `transform-style: preserve-3d` to tilt the base image while elevating floating child elements (badges/icons) along the Z-axis (`translateZ`).
- **Minimalist Aesthetic:** Features crisp white borders, soft drop shadows, and clean typography tailored for modern light-mode interfaces.
- **Accessible & Responsive:** Implements `:focus-visible` styling, keyboard navigability via `tabindex="0"`, and automatically disables the 3D tilt under `@media (prefers-reduced-motion: reduce)`.

## 📁 Files Included
```text
demo.html
style.css
README.md