# CSS Rotating Cube Hero

What does this do?
This component provides a continuous 3D rotating cube animation that can be used as a hero element or interactive display, showcasing six different faces of content.

How is it used?
Include the `.hero-container`, `.scene`, and `.cube` wrapper with the six `.cube-face` elements for each side (front, back, right, left, top, bottom).

```html
<div class="hero-container" role="region" aria-label="Interactive 3D Hero">
  <div class="scene">
    <div class="cube">
      <div class="cube-face cube-face--front">...</div>
      <!-- Add all 6 faces -->
    </div>
  </div>
</div>
```

Why is it useful?
It creates an engaging, dynamic hero section without relying on JavaScript or external 3D libraries like Three.js, ensuring better performance and a lightweight footprint while supporting accessibility (`prefers-reduced-motion` and hover-to-pause).
