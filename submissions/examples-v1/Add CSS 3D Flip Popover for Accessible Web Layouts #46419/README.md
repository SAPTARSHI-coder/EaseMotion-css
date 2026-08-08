# CSS 3D Flip Popover (Accessible Web Aesthetics)

This example demonstrates how to create a highly accessible, pure CSS animated Popover tailored for Accessible Web Layouts (e.g. government, healthcare, or utility sites). It leverages the latest web platform features such as the Native Popover API, CSS Anchor Positioning, and `@starting-style`.

## Features
- **Pure CSS**: Fully functional interactivity and rich animations without a single line of JavaScript.
- **Native Popover API**: Built on top of the native HTML `<div popover>` standard, yielding built-in accessibility (screen reader friendly), focus trapping, light-dismiss, and top-layer management.
- **Anchor Positioning API**: The popover is dynamically anchored to its trigger using pure CSS (`position-anchor`), eliminating the need for absolute positioning hacks.
- **Accessible Aesthetics**: 
  - Uses WCAG AAA compliant color contrast ratios.
  - Distinct, highly visible `:focus-visible` indicators (double borders).
  - Appropriately sized touch targets (min 44px) for interactive elements.
  - Larger typography using system fonts for optimal legibility.
- **`prefers-reduced-motion`**: Fully respects OS-level reduced motion settings. If enabled, the 3D flip animation is disabled in favor of a simple opacity fade.
- **Fully Customizable**: Timing, easing curves, angles, and colors are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can easily tweak the flip animation behavior via these exposed CSS custom properties:
```css
:root {
  --popover-flip-duration: 0.5s;
  --popover-flip-easing: ease-out;
  --popover-flip-perspective: 1000px;
  --popover-flip-start-angle: -90deg;
  --popover-flip-start-scale: 1;
  --popover-flip-start-opacity: 0;
}
```

## Browser Support
This demo uses the latest CSS features. For the full experience, it relies on:
- **Popover API** (Baseline Support across modern browsers)
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **CSS Anchor Positioning API** (Supported in Chrome 125+, Edge 125+)
