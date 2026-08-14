# ease-tilt-3d-hover-vv

## Overview

`ease-tilt-3d-hover-vv` is a lightweight, CSS-only 3D hover utility for premium product cards and interface surfaces. It adds a subtle sense of depth using perspective, rotateX, rotateY, translateY, scale, and opacity, creating a smooth lift effect without requiring JavaScript or heavy motion libraries.

## Features

- Pure CSS
- 3D perspective interaction
- Subtle rotateX / rotateY motion
- Small lift and scale response
- Hardware-friendly transform and opacity animation
- Customizable timing variables
- Keyboard focus support
- Reduced-motion support
- Responsive demo layout
- No JavaScript

## Usage

```html
<article class="ease-anim-tilt-3d-hover">
  <h2>Product insight</h2>
  <p>See product movement and team performance at a glance.</p>
</article>
```

```css
.ease-anim-tilt-3d-hover {
  animation: ease-tilt-3d-hover var(--ease-duration, 500ms) var(--ease-timing, cubic-bezier(0.22, 1, 0.36, 1)) both;
}
```

## CSS custom properties

The utility supports the following custom properties:

```css
:root {
  --ease-duration: 500ms;
  --ease-timing: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-tilt-perspective: 1000px;
}
```

These values can be customized per instance or within a parent scope without modifying the animation itself.

## Accessibility

- Hover is paired with `:focus-visible` support for keyboard users.
- The demo includes a clear focus outline.
- The content remains readable without relying on motion.
- Reduced motion is respected through `@media (prefers-reduced-motion: reduce)`.

## Responsive behavior

The showcase converts to a single-column layout on narrower screens and keeps the card content readable at smaller widths. No horizontal scrolling is required, and the interaction remains usable across desktop, tablet, and mobile devices.

## Performance

The animation is intentionally limited to compositor-friendly properties:

- transform
- opacity

It does not animate layout-triggering properties such as width, height, padding, margin, or box-shadow. This keeps the effect smooth and lightweight while preserving good rendering performance.

## Browser support

This example follows modern evergreen browser support patterns and uses standard CSS transforms and keyframes. It is designed to work well in current Chrome, Edge, Firefox, and Safari releases without requiring vendor-specific prefixes or JavaScript.

## Notes

This submission is fully self-contained in the `submissions/examples/ease-tilt-3d-hover-vv/` folder and does not modify the library’s core CSS files.
