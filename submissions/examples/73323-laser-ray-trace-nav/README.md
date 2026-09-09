# CSS Nav: Laser Ray Trace

A cinematic navigation component featuring a **Laser Ray Trace** effect built entirely with HTML and Vanilla CSS.

Each navigation item creates a glowing animated trace around its border when hovered, focused, or active.

## ✨ Features

- Laser ray trace hover effect
- Animated four-sided border
- Glowing laser trails
- Keyboard focus interaction
- Active navigation state
- Smooth CSS transitions
- Responsive navigation grid
- Dark-mode compatible
- Light-mode compatible
- Reduced-motion support
- No JavaScript
- No external dependencies

## 🎯 Interaction

Hover or focus any navigation item.

Four individual laser segments animate around the element:

1. Top edge
2. Right edge
3. Bottom edge
4. Left edge

The staggered timing creates the appearance of a laser beam travelling around the complete navigation item.

## 🛠️ CSS Techniques

The implementation uses:

- CSS `@keyframes`
- `clip-path`
- Gradients
- Box shadows
- CSS transforms
- Pseudo-elements
- Native focus states
- Responsive media queries

Example:

```css
@keyframes trace-top {
  from {
    clip-path: inset(0 100% 0 0);
  }

  to {
    clip-path: inset(0 0 0 0);
  }
}