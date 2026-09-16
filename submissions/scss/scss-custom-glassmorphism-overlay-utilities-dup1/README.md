# SCSS Utility: Custom Glassmorphism Overlay Utilities (#28413)

A versatile SCSS module for the EaseMotion CSS framework that dynamically generates modern "frosted glass" (Glassmorphism) UI elements using `backdrop-filter`.

## 📦 What's included?

- `_custom-glassmorphism-overlay-utilities.scss`: The SCSS partial containing the customizable glassmorphism mixin.
- `style.css`: The raw compiled CSS utility classes (`.ease-glass-*`).
- `demo.html`: A visually rich demo page proving the blur effects over a vibrant, complex background.

## 🛠 Usage via SCSS Mixins

Import the partial into your project. Apply the mixin to any container to instantly apply a frosted glass effect. You can fully customize the color, opacity, blur intensity, and border.

```scss
@import 'custom-glassmorphism-overlay-utilities';

// @include ease-glassmorphism($bg-color, $opacity, $blur-radius, $border-color);

.my-premium-modal {
  // A sleek, deeply blurred dark glass modal
  @include ease-glassmorphism(#000000, 0.6, 20px, rgba(255, 255, 255, 0.15));
  border-radius: 16px;
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, four preset utility classes are immediately available to handle standard design scenarios.

```html
<!-- Best for standard UI cards over dark/vibrant backgrounds -->
<div class="ease-glass-light">...</div>

<!-- Best for MacOS style dashboards -->
<div class="ease-glass-dark">...</div>

<!-- Best for modals where the background must be obscured -->
<div class="ease-glass-heavy">...</div>

<!-- Best for sticky navigation bars -->
<nav class="ease-glass-subtle">...</nav>
```

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy is focused on modern, premium aesthetics that "wow" users. Glassmorphism is a staple of contemporary web design (popularized by iOS and Windows 11), providing a sense of depth and hierarchy. Implementing it manually requires configuring 5 distinct CSS properties (background rgba, backdrop-filter, webkit fallback, border, and box-shadow). This utility abstracts all that complexity into a single mixin or class, instantly elevating the design of any layout or animated component.
