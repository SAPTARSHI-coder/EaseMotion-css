# CSS 3D Flip Popover (Modern SaaS Aesthetics)

This example demonstrates how to create a highly polished, pure CSS animated Popover featuring a smooth 3D flip interaction transition. It leverages the latest web platform features such as the Native Popover API, CSS Anchor Positioning, and `@starting-style`.

## Features
- **Pure CSS**: Fully functional interactivity and rich animations without a single line of JavaScript.
- **Native Popover API**: Built on top of the native HTML `<div popover>` standard, yielding built-in accessibility, light-dismiss, and top-layer management.
- **Anchor Positioning API**: The popover is dynamically anchored to its trigger using pure CSS (`position-anchor`), eliminating the need for absolute positioning hacks.
- **3D Flip Transition**: Beautiful entry/exit animations mapped to a 3D perspective, triggered smoothly using the modern `@starting-style` and `allow-discrete` transition properties.
- **SaaS Aesthetics**: Incorporates modern SaaS UI paradigms including clean typography, subtle borders, deep drop shadows, layered colors, and custom toggle switches.
- **Fully Customizable**: Timing, easing curves, angles, and colors are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can easily tweak the flip animation behavior via these exposed CSS custom properties:
```css
:root {
  --popover-flip-duration: 0.5s;
  --popover-flip-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --popover-flip-perspective: 1200px;
  --popover-flip-start-angle: -45deg;
  --popover-flip-start-scale: 0.9;
  --popover-flip-start-opacity: 0;
}
```

## Browser Support
This demo uses the latest CSS features. For the full experience, it relies on:
- **Popover API** (Baseline Support across modern browsers)
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **CSS Anchor Positioning API** (Supported in Chrome 125+, Edge 125+)

*Note: For browsers lacking Anchor Positioning support, the demo provides a graceful `@supports` fallback to center the popover on the screen (the default popover layout).*
