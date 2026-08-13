# CSS Animation Conflict Detector

An interactive, educational playground designed for developers to visualize and learn about CSS animation property conflicts, compatibility rules, and resolution methods.

## Feature Name

`css-animation-conflict-detector`

## Overview

When applying multiple CSS animations to a single element, developers often expect them to combine automatically. However, when animations target overlapping properties (e.g., both animates `transform`), they override each other according to standard CSS cascade rules. The **CSS Animation Conflict Detector** demonstrates these conflicts, displays clear warning/success status logs, and highlights modern resolution strategies using CSS composition.

## Problem Demonstrated

The core issue shown is property collision.
If an element is assigned both a spin animation and a pulse animation:

```css
.box {
  animation:
    spin 4s infinite,
    pulse 2.5s infinite;
}
```

Because both `spin` and `pulse` modify `transform`, only the last animation declared in the shorthand (in this case, `pulse`) will display on the element. The `spin` animation is overridden entirely.

## Conflict and Compatibility Principles

### Conflicting Properties

Animations conflict when they modify the **same** CSS property. Overlaps are common on:

- `transform` (e.g., combining rotation, scale, and translation)
- `opacity`
- `filter` / `backdrop-filter`
- `background-color` / `color`

In the standard model, the last animation applied takes precedence, completely resetting the property values of preceding animations.

### Compatible Combinations

Animations are compatible when they modify **completely independent** CSS properties. For example:

- **Animation A** modifies `transform` (e.g., Rotation)
- **Animation B** modifies `opacity` (e.g., Fading)

Since there is no property collision, the browser animates both rotation and fading simultaneously.

### Conflict Resolution: `animation-composition`

Modern CSS engines support the `animation-composition` property, which offers three modes:

- `replace` (default): Overwrites the property (classic override behavior).
- `add`: Appends or multiplies animation function lists (e.g., combining `rotate()` and `scale()`).
- `accumulate`: Merges variables arithmetically where applicable.

By applying `animation-composition: add`, developers can combine multiple transform animations on the same element seamlessly.

## Features Included in the Demo

- **Interactive Toggles:** Activate Spin, Scale, or Fade animations individually or in combination.
- **Dynamic Detector Panel:** Color-coded alert box (`role="status"`, `aria-live="polite"`) that explains the compatibility or conflict status instantly.
- **Conflict Resolution Toggle:** Enable `animation-composition: add` to see how modern CSS solves property override problems.
- **Utility Actions:** Replay animations from the beginning or clear settings instantly.
- **Educational Breakdown:** Readability-focused comparison lists detailing CSS behaviour rules.

## File Structure

The feature is self-contained under `submissions/examples/css-animation-conflict-detector/`:

```text
├── demo.html        # Interactive HTML5 dashboard with vanilla Javascript logic
├── style.css        # Glassmorphic layout, custom animations, and utility variables
└── README.md        # Comprehensive documentation (this file)
```

## Running the Demo

1. Clone the repository.
2. Locate `submissions/examples/css-animation-conflict-detector/demo.html`.
3. Double-click or open `demo.html` directly in any modern web browser.
   _No local server, node packages, or build compilation steps are required._

## Accessibility Considerations (a11y)

- **Aria Roles:** Uses `role="status"` and `aria-live="polite"` to dynamically read conflict alerts.
- **Contrast Ratios:** Utilizes high-contrast text layers on dark glassmorphism backgrounds.
- **Reduced Motion Support:** Respects browser `prefers-reduced-motion: reduce` preference by disabling active animations when activated.
- **Semantic Elements:** Built with semantic `<header>`, `<main>`, and `<section>` tags.
- **Interactive Controls:** All custom toggles are paired with associated form labels and are fully keyboard-navigable.

## Browser Compatibility Considerations

- The compatible combinations (`transform` + `opacity`) work across all legacy and modern browsers.
- The conflict resolution demo (`animation-composition: add`) is supported in:
  - Chrome / Edge 111+
  - Firefox 115+
  - Safari 16.4+
    _(If run on older browser engines, the resolution toggle will safely degrade, displaying normal conflict-override behaviour)._
