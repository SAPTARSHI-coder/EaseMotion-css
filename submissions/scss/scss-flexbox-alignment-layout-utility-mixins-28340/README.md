# SCSS Utility: Flexbox Alignment & Layout Utility Mixins (#28340)

A suite of clean, reusable SCSS mixins for standardizing flexbox layouts, reducing boilerplate, and enforcing consistency across the EaseMotion design system.

## 📦 What's included?

- `_flexbox-alignment-layout-utility-mixins.scss`: The SCSS partial containing the mixins.
- `style.css`: Compiled CSS containing sample utility classes generated from the mixins.
- `demo.html`: A static demo page showcasing the layout output of the compiled CSS.

## 🛠 Features

This module provides the following SCSS mixins:

- `@mixin flex-base($direction, $wrap)`: The foundational mixin setting `display: flex`.
- `@mixin flex-center($direction)`: Perfectly centers content horizontally and vertically.
- `@mixin flex-between($direction, $align)`: Spreads items evenly across the main axis (`justify-content: space-between`).
- `@mixin flex-around($direction, $align)`: Spreads items with equal space around them (`justify-content: space-around`).
- `@mixin flex-column($align, $justify)`: Quickly switches the flex context to a vertical stack.
- `@mixin flex-gap($gap, $direction)`: Combines flex layout with modern `gap` spacing.

## 🚀 How to use

Import the partial into your main SCSS file or component file:

```scss
@import 'flexbox-alignment-layout-utility-mixins';

.my-card-header {
  @include flex-between();
  // Compiles to: display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: center;
}

.my-centered-modal {
  @include flex-center(column);
  // Compiles to: display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; align-items: center;
}

.my-button-group {
  @include flex-gap(16px);
}
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI development predictable, fluid, and human-readable. 

Writing `display: flex; justify-content: center; align-items: center;` repeatedly introduces unnecessary boilerplate and increases the likelihood of typos or inconsistent layouts. By abstracting these extremely common alignment patterns into semantic mixins like `@include flex-center();`, we make the styling code much more expressive, readable, and perfectly aligned with EaseMotion's philosophy of streamlining the developer experience.
