# CSS Pulse Hover Image

A highly engaging, interactive image container that emits a continuous, radiating pulse animation from behind the image when hovered or focused. Built completely without JavaScript.

## 🎯 Features
- **Pure CSS/HTML:** Utilizes `::after` pseudo-elements and hardware-accelerated CSS keyframes to create a smooth outward ripple without affecting document flow.
- **Keyboard Accessible:** Fully supports tabbing with `tabindex="0"` and `:focus-within` triggers, ensuring keyboard users receive the exact same visual feedback as mouse users.
- **Performance Optimized:** Animates `transform` and `opacity` properties for buttery 60fps rendering.
- **Accessible:** Respects `@media (prefers-reduced-motion: reduce)` by disabling the keyframe pulse and scale effects, falling back to a gentle brightness filter instead.

## 📁 Files Included
```text
demo.html
style.css
README.md