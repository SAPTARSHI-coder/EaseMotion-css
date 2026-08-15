# SCSS Anchor Positioning Alignment Helpers

A standalone EaseMotion example demonstrating reusable SCSS helper mixins for CSS Anchor Positioning.

This submission intentionally lives under `submissions/examples/` and does not modify the EaseMotion core SCSS files.

## Features

- Reusable SCSS anchor-positioning helpers
- `anchor-name` abstraction
- `position-anchor` abstraction
- Bottom-start alignment
- Top-center alignment
- End-center alignment
- CSS custom-property integration
- Progressive enhancement
- Conventional absolute-position fallback
- Responsive demo
- Accessibility-friendly semantic markup

---

## Why Anchor Positioning?

CSS Anchor Positioning allows a positioned element to align itself relative to another element without relying on manually calculated offsets.

Typical use cases include:

- Tooltips
- Dropdown menus
- Popovers
- Context menus
- Floating action panels
- Contextual controls

---

## 1. Anchor Reference Mixin

The reference element can expose an anchor name through a reusable mixin.

```scss
@mixin anchor-reference(
  $name: --ease-anchor
) {
  anchor-name: $name;
}

Usage:

.trigger {
  @include anchor-reference;
}

Equivalent CSS:

.trigger {
  anchor-name: --ease-anchor;
}
2. Anchor Target Mixin

The positioned element can reference the anchor through position-anchor.

@mixin anchor-target(
  $anchor: --ease-anchor
) {
  position-anchor: $anchor;
}

Usage:

.tooltip {
  @include anchor-target;
}
3. Bottom-Start Alignment

This helper positions a floating element below the anchor and aligns its left edge with the anchor.

@mixin anchor-bottom-start(
  $anchor: --ease-anchor,
  $gap: var(--ease-anchor-gap, 0.5rem)
) {
  position: absolute;
  position-anchor: $anchor;


  top: anchor(bottom);
  left: anchor(left);


  margin-top: $gap;
}

Usage:

.tooltip {
  @include anchor-bottom-start;
}
4. Top-Center Alignment

This helper positions a floating element above the anchor and centers it horizontally.

@mixin anchor-top-center(
  $anchor: --ease-anchor,
  $gap: var(--ease-anchor-gap, 0.5rem)
) {
  position: absolute;
  position-anchor: $anchor;


  bottom: anchor(top);
  left: anchor(50%);


  margin-bottom: $gap;
  transform: translateX(-50%);
}

Usage:

.tooltip {
  @include anchor-top-center;
}
5. End-Center Alignment

This helper positions the target beside the anchor and vertically centers it.

@mixin anchor-end-center(
  $anchor: --ease-anchor,
  $gap: var(--ease-anchor-gap, 0.5rem)
) {
  position: absolute;
  position-anchor: $anchor;


  top: anchor(50%);
  left: anchor(right);


  margin-left: $gap;
  transform: translateY(-50%);
}

Usage:

.tooltip {
  @include anchor-end-center;
}
CSS Variable Integration

The helper mixins use CSS custom properties for configurable spacing.

:root {
  --ease-anchor-gap: 0.5rem;
}

The value can be changed without modifying the mixin:

.component {
  --ease-anchor-gap: 1rem;
}

This makes the helpers easier to integrate with existing design tokens.

Complete Example

A trigger can expose an anchor:

.trigger {
  @include anchor-reference(--ease-menu-anchor);
}

The floating menu can consume it:

.menu {
  @include anchor-bottom-start(
    --ease-menu-anchor,
    var(--ease-anchor-gap)
  );
}

This keeps the anchor relationship explicit and reusable.

Progressive Enhancement

Anchor Positioning support should be treated as an enhancement.

The demo provides conventional absolute-positioning fallbacks first:

.tooltip {
  position: absolute;
  top: calc(50% + 30px);
  left: 50%;
  transform: translateX(-50%);
}

Anchor Positioning is then applied when supported:

@supports (position-anchor: --ease-anchor) {
  .tooltip {
    position-anchor: --ease-anchor;
    top: anchor(bottom);
    left: anchor(left);
  }
}

This means the component remains usable in browsers that do not support CSS Anchor Positioning.

Browser Feature Detection

The demo uses:

@supports (anchor-name: --ease-anchor) {
  /* Anchor Positioning enhancement */
}

and:

@supports (position-anchor: --ease-anchor) {
  /* Anchor target positioning */
}

This avoids making unsupported CSS the only positioning mechanism.

Responsive Integration

The helpers can be combined with media queries.

.tooltip {
  @include anchor-bottom-start;


  @media (max-width: 600px) {
    --ease-anchor-gap: 0.4rem;
  }
}

The positioning logic remains reusable while spacing can adapt to the viewport.

Accessibility

Anchor Positioning is a layout mechanism and does not replace accessibility semantics.

For interactive components:

Use semantic HTML elements.
Use accessible names for controls.
Use aria-describedby when a tooltip describes a control.
Keep keyboard interaction available.
Preserve visible focus indicators.
Do not rely on visual positioning alone to communicate meaning.

Example:

<button
  type="button"
  aria-describedby="tooltip"
>
  Save
</button>


<div id="tooltip" role="tooltip">
  Save your changes
</div>
Performance

The helper uses CSS positioning and transforms rather than JavaScript-driven coordinate calculations.

The demo avoids continuous JavaScript layout calculations and keeps the positioning logic in CSS.

Demo

Open demo.html in a browser to view:

Bottom-start anchor alignment
Top-center anchor alignment
End-center anchor alignment
Progressive fallback positioning
CSS-variable based spacing
Issue

This example addresses:

#81353 — feat(scss): Add SCSS Anchor Positioning Alignment helper mixins