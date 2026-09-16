# CSS 3D Transform Carousel Example

1. **What does this do?** This example demonstrates a pure CSS 3D carousel using hardware-accelerated 3D transforms (`rotateY` and `translateZ`) to create a hexagonal prism layout. JavaScript is only used to manage the rotation state.
2. **How is it used?** The `.scene` establishes the 3D perspective, the `.carousel` acts as the 3D container (`preserve-3d`), and `.carousel-item` elements are positioned in 3D space using exact degrees and depth calculations.
3. **Why is it useful?** It provides a high-performance, visually engaging way to display images, cards, or features. By relying on CSS for the layout and transition, it ensures smooth 60fps animations.

### Key Features
- **Pure CSS 3D Layout:** Uses `perspective`, `transform-style: preserve-3d`, and `backface-visibility: hidden` for optimal rendering.
- **Dynamic Rotation:** Minimal JavaScript simply updates a CSS variable or inline style to rotate the entire container.
- **Accessible Fallbacks:** Includes `prefers-reduced-motion` media queries to speed up or disable the rotation transition for users sensitive to motion.
