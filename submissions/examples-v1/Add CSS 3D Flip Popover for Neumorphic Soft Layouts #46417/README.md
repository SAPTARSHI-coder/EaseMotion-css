# CSS 3D Flip Popover (Neumorphic Soft Aesthetics)

This example demonstrates how to create a buttery smooth, pure CSS animated Popover tailored for Neumorphic UI (Soft UI) Layouts. It leverages the latest web platform features such as the Native Popover API, CSS Anchor Positioning, and `@starting-style`.

## Features
- **Pure CSS**: Fully functional interactivity and rich animations without a single line of JavaScript.
- **Native Popover API**: Built on top of the native HTML `<div popover>` standard, yielding built-in accessibility, light-dismiss, and top-layer management.
- **Anchor Positioning API**: The popover is dynamically anchored to its trigger using pure CSS (`position-anchor`), eliminating the need for absolute positioning hacks.
- **3D Flip Transition**: A soft, door-like Y-axis flip entry mapped to a 3D perspective, matching the smooth, extruded feel of Neumorphic layouts.
- **Neumorphic Aesthetics**: Incorporates classic Soft UI patterns including low-contrast backgrounds, dual extruded/inset box-shadows, and rounded pill/circle elements.
- **Fully Customizable**: Timing, easing curves, angles, and colors are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can easily tweak the flip animation behavior via these exposed CSS custom properties:
```css
:root {
  --popover-flip-duration: 0.8s;
  --popover-flip-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --popover-flip-perspective: 1200px;
  --popover-flip-start-angle: 90deg; /* Y-Axis Rotation */
  --popover-flip-start-scale: 0.95;
  --popover-flip-start-opacity: 0;
}
```

## Browser Support
This demo uses the latest CSS features. For the full experience, it relies on:
- **Popover API** (Baseline Support across modern browsers)
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **CSS Anchor Positioning API** (Supported in Chrome 125+, Edge 125+)
