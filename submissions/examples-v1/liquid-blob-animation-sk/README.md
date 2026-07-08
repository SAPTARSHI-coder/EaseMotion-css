# Organic Liquid Blob Animation Example

1. **What does this do?** This example demonstrates high-fidelity, organic blob animations created using pure CSS. It features liquid shape-morphing using complex `border-radius` keyframes and subtle floating motions.
2. **How is it used?** Apply the `.ease-blob` class to a `div` and use size (`.ease-blob-lg`), color (`.ease-blob-primary`), and speed (`.ease-blob-slow`) variants to customize the effect. Blobs are designed to be placed inside a container with `overflow: hidden`.
3. **Why is it useful?** Animated blobs add depth and visual interest to hero sections and creative backgrounds. This implementation is lightweight, hardware-accelerated, and easily configurable via CSS variables, making it a perfect fit for modern SaaS landing pages and portfolios.

### Key Features
- **Organic Morphing:** Smooth 8-point `border-radius` transitions.
- **Hardware Accelerated:** Uses `transform` for motion to ensure 60FPS performance.
- **Configurable:** Easily adjust blur, opacity, and colors via CSS custom properties.
- **Accessibility:** Respects `prefers-reduced-motion` by disabling animations.
- **Theme Support:** Adaptive blend modes for optimal visibility on both light and dark themes.
