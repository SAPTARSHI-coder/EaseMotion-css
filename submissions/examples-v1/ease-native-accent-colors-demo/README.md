# Native Form Accent Theming (`ease-native-accent-colors-demo`)

This utility allows developers to style native HTML forms (checkboxes, radio buttons, range sliders, and progress elements) instantly using the `accent-color` CSS property mapped to our internal design tokens.

## What is this?

Instead of writing complex `-webkit-` pseudo-element selectors to restyle native inputs, this approach sets a single CSS variable. The browser natively applies the brand color to the form controls while perfectly preserving accessibility and native state management (like hover, active, and focus rings).

## Features

- **Zero-JS**: Completely CSS-driven form styling.
- **Dark Mode Aware**: Uses `prefers-color-scheme` to automatically shift the accent tokens to lighter, higher-contrast shades on dark backgrounds.
- **Accessible**: Preserves native focus outlines and keyboard navigation.

## Usage

Simply apply the desired theme class to a parent container, and all child inputs will inherit the brand color!

```html
<form class="theme-alpha">
  <input type="checkbox" checked />
  <input type="radio" checked />
  <input type="range" value="50" />
</form>
```
