# CSS Widget: Subtle Elevate Variation

A polished, reusable dashboard widget featuring a highly restrained "Subtle Elevate" visual treatment. This component achieves premium depth and hierarchy using only minimal, controlled CSS `transform` and `box-shadow` properties, strictly avoiding exaggerated 3D or floating-card styles.

## Features

- **Refined Shadow Hierarchy**: Uses a tightly bound ambient shadow (`--shadow-rest`) in the default state. On hover, the shadow spread increases subtly (`--shadow-hover`) without disconnecting the card from the underlying page layout.
- **Micro-Interaction Elevation**: The primary interaction is locked to an incredibly small `transform: translateY(-3px)`. This microscopic lift feels soft, professional, and tactile.
- **Hardware-Accelerated Fluidity**: The elevation transitions are strictly mapped to `transform` and `box-shadow` and use the `will-change` property to guarantee the GPU compositor handles the rendering—achieving flawless 60fps animations without repainting the DOM.
- **Dark Mode Depth**: Deep backgrounds (`@media (prefers-color-scheme: dark)`) naturally absorb soft shadows. To ensure the elevation remains perceptible, the dark mode hierarchy intensifies the opacity of the `box-shadow` values while keeping the blur radius tight, avoiding unnatural glowing artifacts.
- **Responsive Architecture**: Bounded by CSS Grid `minmax()`, ensuring the cards stretch across large desktop viewports and collapse efficiently to single-column flows on mobile devices without layout breaking.
- **Accessibility & Keyboard Focus**: Focus states override default browser rings with a sharp, high-contrast blue bounding box and white inner ring, ensuring safe, explicit keyboard `Tab` navigation.
- **Reduced Motion Support**: Hooking into `@media (prefers-reduced-motion: reduce)`, the physical Y-axis lift (`translateY`) is zeroed out entirely to protect users with vestibular conditions. The transition duration is stripped, instantly snapping to the updated shadow and border colors.

## Usage

1. Open `demo.html` in your browser.
2. Note the minimal, clean baseline appearance.
3. Hover over the cards to observe the subtle, professional lift and the soft shadow expansion.
4. Try keyboard navigation (`Tab`) to view the customized focus-visible state.
