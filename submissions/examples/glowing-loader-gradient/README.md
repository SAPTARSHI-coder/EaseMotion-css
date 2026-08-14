# CSS Glowing Loader with Gradient Styling

A high-performance, pure CSS loading spinner that features a continuously rotating multi-stop conic gradient and a hardware-accelerated blurred glowing aura.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript dependencies.
- **Vibrant Glowing Aura:** Utilizes a `conic-gradient` combined with a blurred pseudo-element (`filter: blur`) positioned behind the main ring to cast a dynamic, colorful glow.
- **Hardware-Accelerated Animation:** Uses a continuous linear `transform: rotate` keyframe for smooth, consistent 60fps spinning.
- **Accessible:** Includes semantic ARIA attributes (`role="progressbar"`, `aria-busy="true"`) for screen readers, and gracefully slows down the animation duration under `@media (prefers-reduced-motion: reduce)`.

## 📁 Files Included
```text
demo.html
style.css
README.md