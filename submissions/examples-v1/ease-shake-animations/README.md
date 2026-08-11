# Shake Animations

This example demonstrates the usage of `ease-shake-x` and `ease-shake-y` animation utilities.

## Description

The `ease-shake-x` and `ease-shake-y` utility classes apply a fast shake animation along the horizontal (X) and vertical (Y) axes respectively. 

These animations are great for UX patterns where an error occurs, such as invalid password inputs, form validation errors, or grabbing the user's attention.

## Usage

Include the `style.css` containing the animations, then simply apply the classes to your HTML elements. It's often best applied dynamically via JavaScript.

```html
<!-- Horizontal shake (e.g. for invalid password) -->
<input class="ease-shake-x" type="password" />

<!-- Vertical shake -->
<div class="ease-shake-y">
  Pay attention to this!
</div>
```

## Preview

Open `demo.html` in your browser to test out the shake animations on an input field.
