# SCSS Box Sizing Border Box Helpers

A standalone EaseMotion example demonstrating reusable SCSS helpers for the `border-box` box-sizing model.

This submission is intentionally contained inside `submissions/examples/` and does not modify the existing EaseMotion SCSS source files.

## Features

- `box-sizing: border-box` helper
- Component-tree box-sizing helper
- Configurable SCSS helper
- CSS custom-property integration
- Responsive component example
- Predictable component dimensions
- Documentation and usage examples

---

## Why `border-box`?

With the default `content-box` model, declared width and height describe only the content area.

Padding and borders are added outside those dimensions.

With:

```scss
box-sizing: border-box;

the declared width and height include:

Content
Padding
Border

This makes component dimensions easier to reason about.

1. Basic Helper

The simplest helper applies border-box to the current element.

@mixin box-border-box {
  box-sizing: border-box;
}

Usage:

.card {
  @include box-border-box;
}

Generated CSS:

.card {
  box-sizing: border-box;
}
2. Component Tree Helper

For reusable components containing nested elements, the inheritance pattern can be used:

@mixin box-border-box-tree {
  box-sizing: border-box;


  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
}

Usage:

.card {
  @include box-border-box-tree;
}

This makes the box-sizing model consistent throughout the component.

3. Configurable Helper

A generic helper can expose the box-sizing value as a parameter:

@mixin box-sizing($value: border-box) {
  box-sizing: $value;
}

Usage:

.card {
  @include box-sizing;
}

Or:

.component {
  @include box-sizing(content-box);
}

The default remains border-box.

CSS Variable Integration

The example uses a CSS custom property:

:root {
  --ease-box-sizing: border-box;
}

A component can consume the token:

.component {
  box-sizing: var(--ease-box-sizing);
}

A component-specific value can be supplied without changing the helper:

.component {
  --ease-box-sizing: border-box;
}

This keeps the helper compatible with token-based design systems.

Browser Fallback

box-sizing has broad browser support.

For older or constrained environments, the helper still compiles to a standard CSS declaration:

box-sizing: border-box;

No JavaScript or runtime calculation is required.

Responsive Usage

The helper can be combined with responsive styles:

.card {
  @include box-border-box;


  width: 100%;


  @media (min-width: 768px) {
    width: 50%;
  }
}

The box-sizing model remains consistent as the component changes size.

Example

A component using the tree helper:

.card {
  @include box-border-box-tree;


  width: 100%;
  padding: 1rem;
  border: 1px solid var(--ease-border);
}

The declared width includes both padding and border.

Accessibility

The helper is purely related to layout and does not alter semantic or interactive behavior.

When using it with UI components:

Keep semantic HTML.
Preserve visible focus states.
Avoid clipping keyboard focus.
Ensure responsive layouts remain usable.
Do not rely on box dimensions alone to communicate information.
Performance

The helper produces a static CSS property and does not require JavaScript calculations.

It therefore adds no runtime layout scripting overhead.

Demo

Open demo.html in a browser to view:

Single-element border-box usage.
Component-tree box-sizing.
Responsive component sizing.
CSS variable integration.
SCSS helper documentation.
Issue

This example addresses:

#81361 — feat(scss): Add SCSS Box Sizing Border Box helper mixins