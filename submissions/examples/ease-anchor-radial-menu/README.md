# Ease Anchor Radial Menu (#77435)

## Abstract
This module demonstrates a pure CSS implementation of a Floating Action Button (FAB) radial menu using the modern CSS Anchor Positioning API and native CSS Trigonometric functions (`sin()` and `cos()`). By combining DOM-decoupled anchor positioning with mathematical radial placement, this pattern achieves seamless positioning, fluid transitions, zero layout coupling, and absolute independence from JavaScript position calculation scripts.

## Retiring Popper.js
Historically, floating elements such as radial menus, tooltips, popovers, and context menus required JavaScript-based positioning libraries like Popper.js or Floating UI. These scripts rely on continuous DOM measurement loops (`getBoundingClientRect()`), scroll event listeners, and dynamic inline style updates to track anchor coordinates. 

The CSS Anchor Positioning API eliminates these performance overheads by shifting layout and alignment calculations entirely to the browser rendering engine's layout pass. Elements can be positioned relative to designated anchor elements across disparate DOM hierarchy levels without layout trash or JavaScript runtime cost.

## The Anchor Positioning API
The core mechanism behind tethering the radial menu items to the Floating Action Button relies on two primary CSS primitives:

1. **Defining the Coordinate Source (`anchor-name`)**:
   The FAB button declares itself as a global positioning anchor:
   ```css
   .ease-fab {
     anchor-name: --ease-fab-anchor;
     position: relative;
   }
   ```
   This registers `--ease-fab-anchor` in the CSS anchor registry, turning the button's rendered boundary into a dynamic coordinate reference.

2. **Tethering Elements Across the DOM (`position-anchor` & `anchor()`)**:
   The menu items—which reside as siblings or arbitrary nodes elsewhere in the DOM—reference the anchor and anchor points:
   ```css
   .ease-menu-item {
     position: fixed;
     position-anchor: --ease-fab-anchor;
     top: anchor(center);
     left: anchor(center);
   }
   ```
   Using `anchor(center)`, each menu item's initial position is dynamically locked to the exact geometric center of `--ease-fab-anchor`, irrespective of DOM nesting or surrounding layout wrappers (supported by `.ease-radial-wrapper { display: contents; }`).

## Trigonometric Expansion
Radial menu expansion requires positioning items around an arc relative to the central anchor. Rather than hardcoding offset pixels or managing JavaScript geometry loops, native CSS trigonometry (`sin()` and `cos()`) calculates X and Y offsets at render time:

```css
.ease-fab-toggle:checked ~ .ease-menu-item {
  opacity: 1;
  transform: translate(
    calc(-50% + cos(var(--angle)) * var(--radius)),
    calc(-50% + sin(var(--angle)) * var(--radius))
  ) scale(1);
}
```

### Mathematical Breakdown
- **Radius (`--radius`)**: Defines the radial distance from the anchor center (e.g., `120px`).
- **Angle (`--angle`)**: Specifies the polar angle in degrees along the upper arc (180deg to 360deg).
  - Item 1 (`180deg`): Left horizontal deployment (`cos(180deg) = -1`, `sin(180deg) = 0`).
  - Item 2 (`225deg`): Top-left diagonal deployment.
  - Item 3 (`270deg`): Vertical top deployment (`cos(270deg) = 0`, `sin(270deg) = -1`).
  - Item 4 (`315deg`): Top-right diagonal deployment.
  - Item 5 (`360deg`): Right horizontal deployment (`cos(360deg) = 1`, `sin(360deg) = 0`).
- **Centering Correction (`-50%`)**: Adjusts for the element's own intrinsic width and height so expansion originates precisely from element center coordinates.

This mathematical model completely replaces JavaScript loops and dynamic coordinate injections with declarative, hardware-accelerated CSS calculations.
