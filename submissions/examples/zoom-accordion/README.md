# CSS Zoom-In Accordion Component

## Overview

An animation-first, highly accessible expanding accordion collection panel utilizing a smooth **Zoom-In** interaction transition. This component leverages native semantic structures paired with modern CSS grid animation tracks and transform scale interpolation to animate dynamic heights and scale animations with zero JavaScript overhead.

## 📁 Sandbox Configuration Files

- `demo.html` — Standalone presentation preview staging a multi-row interactive Zoom-In accordion module.
- `style.css` — Presentation stylesheet containing both core accordion styles and presentation styling.

## 🚀 Key Layout Mechanics

1. **Dynamic Auto-Height Transitions:** Rather than utilizing hacky `max-height` constraints which skew motion speeds, this engine animates structural `grid-template-rows` values for consistent, graceful velocity.
2. **Smooth Zoom-In Animation:** Toggling the element scales the interior content container from a starting factor (default: `0.95`) up to `1.0` in sync with height expansion and opacity transition.
3. **Native Keyboard Accessibility:** Arrow keys, Enter, and Spacebar commands interact with the layout headers automatically due to native semantic `<details>` and `<summary>` elements.
4. **Customizable Custom Properties:** Key parameters (timing, easing, scale factor) can be easily configured via standard CSS custom properties:
   - `--ease-accordion-zoom-duration` (default: `300ms`)
   - `--ease-accordion-zoom-easing` (default: `cubic-bezier(0.34, 1.56, 0.64, 1)`)
   - `--ease-accordion-zoom-scale-start` (default: `0.95`)
