# SCSS Absolute Center Transform Helpers

A standalone EaseMotion example demonstrating reusable SCSS helper patterns for absolutely positioning an element at the horizontal and vertical center of its containing block.

## Features

- Absolute horizontal and vertical centering
- Horizontal-only centering helper
- Vertical-only centering helper
- `top: 50%` and `left: 50%` positioning
- `transform: translate(-50%, -50%)`
- CSS custom-property integration
- Responsive usage
- Browser transform fallbacks
- No modification to EaseMotion core files

---

## 1. Absolute Center

The main helper centers an absolutely positioned element on both axes.

### SCSS

```scss
@mixin absolute-center(
  $x: var(--ease-center-x, 50%),
  $y: var(--ease-center-y, 50%)
) {
  position: absolute;
  top: $y;
  left: $x;

  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

Usage
.container {
  position: relative;
  min-height: 400px;
}


.container__content {
  @include absolute-center;
}

Equivalent CSS:

.container__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
2. Horizontal Center

For horizontal centering only:

@mixin absolute-center-x(
  $x: var(--ease-center-x, 50%)
) {
  position: absolute;
  left: $x;


  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

Usage:

.tooltip {
  @include absolute-center-x;
}
3. Vertical Center

For vertical centering only:

@mixin absolute-center-y(
  $y: var(--ease-center-y, 50%)
) {
  position: absolute;
  top: $y;


  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

Usage:

.badge {
  @include absolute-center-y;
}
CSS Variable Integration

The full center helper supports configurable CSS custom properties.

:root {
  --ease-center-x: 50%;
  --ease-center-y: 50%;
}


.modal {
  @include absolute-center;
}

The fallback values remain 50% when the variables are not overridden.

Custom positioning can be supplied through CSS variables:

.modal {
  --ease-center-x: 45%;
  --ease-center-y: 40%;


  @include absolute-center;
}
Browser Fallbacks

The helper includes vendor-prefixed transform declarations:

-webkit-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);

The standard transform declaration remains the final declaration for modern browsers.

Responsive Usage

The helper can be combined with media queries.

.modal {
  --ease-center-x: 50%;
  --ease-center-y: 50%;


  @include absolute-center;


  @media (max-width: 768px) {
    --ease-center-y: 45%;
  }
}

This keeps the positioning logic reusable while allowing responsive adjustments.

Positioning Context

The parent element should normally establish a positioning context:

.container {
  position: relative;
}

Then the child can be positioned absolutely:

.container__content {
  @include absolute-center;
}

Without a positioned containing block, the absolute element may be positioned relative to another ancestor or the initial containing block.

Demo

Open demo.html in a browser to see:

Full horizontal and vertical centering
Horizontal-only centering
Vertical-only centering
CSS variable-based center positioning
Accessibility

The helper only controls layout and transform properties.

It does not alter:

semantic HTML
keyboard interaction
focus management
accessible names
screen-reader behavior

Interactive elements should still use appropriate semantic HTML and provide visible focus states.

Performance

The centering technique uses transform, which is suitable for compositor-friendly positioning and avoids unnecessary layout changes during transform updates.

Issue

This example addresses:

#81334 — feat(scss): Add SCSS Absolute Center Transform helper mixins