# SCSS Utility: Custom Focus Ring & A11y Indicator Mixins (#28429)

A critical accessibility (A11y) SCSS utility module for the EaseMotion CSS framework that replaces harsh, browser-default focus outlines with beautiful, animated, and highly visible custom focus indicators.

## 📦 What's included?

- `_custom-focus-ring-a11y-indicator-mixins.scss`: The SCSS partial containing configurable mixins utilizing `:focus-visible`, `outline-offset`, and `box-shadow`.
- `style.css`: The compiled output of the standard utility classes.
- `demo.html`: An interactive form meant to be navigated via the `Tab` key to test the focus states.

## 🛠 Usage via SCSS Mixins

Import the partial and include the mixins on your interactive elements (`a`, `button`, `input`, `select`, etc.).

```scss
@import 'custom-focus-ring-a11y-indicator-mixins';

.my-text-input {
  // @include ease-focus-ring($ring-color, $ring-width, $ring-offset, $duration);
  @include ease-focus-ring(rgba(59, 130, 246, 0.5), 3px, 2px);
}

.my-pill-button {
  // Uses a double box-shadow technique instead of outline, 
  // which sometimes handles complex border-radii better in older browsers.
  @include ease-focus-ring-shadow();
}

.my-inline-link {
  // A subtle animated underline instead of a bounding box
  @include ease-focus-underline(#ec4899);
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, simply add the classes to your focusable elements.

```html
<input type="text" class="ease-focus-ring" placeholder="Primary focus...">
<input type="text" class="ease-focus-ring-success" placeholder="Green focus...">
<input type="text" class="ease-focus-ring-danger" placeholder="Red focus...">
```

## 🚀 Why this fits EaseMotion

**EaseMotion** is about making user interfaces feel premium. Unfortunately, the default browser focus ring (`outline: auto`) often looks terrible, clashing with carefully designed color palettes and border radii. As a result, developers frequently set `outline: none;` and forget to replace it, severely damaging keyboard accessibility.

This module provides an elegant solution. By utilizing `:focus-visible` (which only shows the ring when navigating via keyboard, not when clicking with a mouse) and combining smooth `box-shadow` or `outline-offset` transitions, we create focus indicators that look incredibly polished, animate smoothly, and ensure your application remains fully accessible.
