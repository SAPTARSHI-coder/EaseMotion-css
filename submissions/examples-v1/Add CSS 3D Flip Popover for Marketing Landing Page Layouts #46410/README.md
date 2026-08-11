# CSS 3D Flip Popover (Marketing Landing Page Aesthetics)

This example demonstrates how to create a highly polished, pure CSS animated Popover tailored for Marketing Landing Pages. It leverages the latest web platform features such as the Native Popover API, CSS Anchor Positioning, and `@starting-style`.

## Features
- **Pure CSS**: Fully functional interactivity and rich animations without a single line of JavaScript.
- **Native Popover API**: Built on top of the native HTML `<div popover>` standard, yielding built-in accessibility, light-dismiss, and top-layer management.
- **Anchor Positioning API**: The popover is dynamically anchored to its trigger using pure CSS (`position-anchor`), eliminating the need for absolute positioning hacks.
- **3D Flip Transition**: A highly dynamic, bouncy entry/exit animation mapped to a 3D perspective, matching the energetic feel of modern marketing sites.
- **Marketing Aesthetics**: Incorporates marketing UI paradigms including larger bolder typography, vibrant gradients, exaggerated drop shadows, and clear Call-to-Action (CTA) elements.
- **Backdrop Blur**: Utilizes the `::backdrop` pseudo-element to smoothly dim and blur the background when the popover opens, focusing the user's attention on the offer.
- **Fully Customizable**: Timing, easing curves, angles, and colors are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can easily tweak the flip animation behavior via these exposed CSS custom properties:
```css
:root {
  --popover-flip-duration: 0.8s;
  --popover-flip-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* Elastic bounce */
  --popover-flip-perspective: 1500px;
  --popover-flip-start-angle: -90deg;
  --popover-flip-start-scale: 0.85;
  --popover-flip-start-opacity: 0;
}
```

## Browser Support
This demo uses the latest CSS features. For the full experience, it relies on:
- **Popover API** (Baseline Support across modern browsers)
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **CSS Anchor Positioning API** (Supported in Chrome 125+, Edge 125+)

*Note: For browsers lacking Anchor Positioning support, the demo provides a graceful `@supports` fallback to center the popover on the screen (the default popover layout).*
