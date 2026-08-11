# Pure CSS Tilt Card (`ease-tilt-card`)

A high-performance, 3D parallax mouse-tracking tilt card component created with zero JavaScript dependencies.

---

## 1. What does this do?

This component creates an interactive **3D parallax mouse-tracking tilt effect** for UI cards. As the user hovers over different regions of the card, the card dynamically tilts in 3D space (`rotateX` and `rotateY`), while the inner content pops out forward along the Z-axis (`translateZ(60px)`) to form a rich parallax depth effect—all driven purely by modern CSS.

---

## 2. How is it used?

The component uses an invisible **3x3 grid overlay** (`.ease-tilt-trackers`) positioned directly above the card using absolute positioning and high `z-index`. 

- The wrapper container (`.ease-tilt-wrapper`) establishes a 3D rendering context using `perspective: 1000px`.
- The 9 tracking zones (`.ease-tracker`) represent spatial regions corresponding to top-left, top-center, top-right, center-left, center, center-right, bottom-left, bottom-center, and bottom-right.
- Modern CSS `:has()` relational selectors detect which `:hover` zone is currently active and apply specific 3D rotation transforms (`rotateX` and `rotateY`) to `.ease-tilt-card`:

```css
/* Example 9-zone tilt mapping */
.ease-tilt-wrapper:has(.ease-tracker:nth-child(1):hover) .ease-tilt-card {
  transform: rotateX(15deg) rotateY(-15deg);
}

.ease-tilt-wrapper:has(.ease-tracker:nth-child(5):hover) .ease-tilt-card {
  transform: rotateX(0deg) rotateY(0deg) scale(1.05);
}
```

---

## 3. Why is it useful?

- **Zero JavaScript Overhead**: Bypasses the need for JS `mousemove` event listeners, element bounding rect calculations, or heavy JS tilt libraries such as `Vanilla-tilt.js`.
- **GPU Accelerated**: Performs spatial logic entirely inside the browser's native CSS engine and compositor thread, resulting in ultra-smooth 60fps animations.
- **Modern & Declarative**: Leverages native CSS `:has()` relational pseudo-classes to achieve complex state-aware UI interactions cleanly and declaratively.
