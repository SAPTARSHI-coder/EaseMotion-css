# CSS accent-color Form Styling Example

This submission demonstrates the use of the CSS `accent-color` property to style native interactive form control elements dynamically.

---

## Overview

Historically, customizing checkboxes, radio buttons, range inputs, and progress bars required rebuilding them completely using custom elements, leading to accessibility issues.

The `accent-color` property solves this by allowing developers to set a custom theme color for the colored components of native form elements, retaining their built-in accessibility benefits.

---

## Target Elements

`accent-color` affects the following elements in modern browsers:

- `<input type="checkbox">`
- `<input type="radio">`
- `<input type="range">`
- `<progress>`

---

## Usage

```css
.accented-control {
  accent-color: #7c3aed; /* Set your custom theme color */
}
```

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. Observe Checkboxes, Radios, Range Sliders, and Progress Bars rendered in purple.
3. Choose any color theme in the selector panel (e.g. Emerald, Rose, Amber).
4. Verify that all native form controls change color immediately to match the selection.
