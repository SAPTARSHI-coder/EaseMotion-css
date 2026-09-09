# Reusable Parallax Hero Section Example

1. **What does this do?** This example demonstrates a reusable parallax hero section pattern for landing pages. It uses layered elements that move at different speeds relative to the scroll position, creating a sense of depth and modern motion.
2. **How is it used?** Apply the `.parallax-hero` class to your hero section and use `.parallax-layer` with different depth classes (`.depth-1`, `.depth-2`, etc.) for background and foreground elements.
3. **Why is it useful?** Parallax effects enhance visual engagement and storytelling on landing pages. This implementation is performance-optimized using GPU-accelerated transforms and supports both scroll-driven and optional mouse-move parallax.

### Key Features
- **Multi-layer Depth:** Independent layers with configurable speeds.
- **Pure CSS Scroll Parallax:** Utilizes `animation-timeline: scroll()` for modern browsers.
- **Mouse-Move Parallax:** Optional subtle tilt/drift based on cursor position.
- **Hardware Accelerated:** Uses `transform: translate3d()` for smooth 60FPS performance.
- **Accessibility:** Respects `prefers-reduced-motion` by disabling motion effects.
- **Responsive:** Fluid layout that adapts to different screen sizes.
