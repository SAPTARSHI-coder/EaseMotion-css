# Morphing Submit to Loader Button

A call-to-action button that beautifully morphs into a spinning loading circle when clicked.

## Preview
Open `demo.html` in your browser. Click the white "Submit" button. It will shrink into a circle, the text will disappear, and it will immediately begin spinning like a loading indicator. Click it again to reset.

## Implementation
- Utilizes the **CSS Checkbox Hack**. The button is actually a `<label>` linked to a hidden `<input type="checkbox">`.
- The `.morph-btn` normally has `width: 200px` and rounded pill borders.
- When the checkbox is `:checked`, the CSS changes the `width` to `50px` (making it a perfect square), the `color` to `transparent` (hiding the text), and modifies the borders.
- A `transition` smoothly animates these property changes.
- Finally, an `@keyframes` rotation animation kicks in, turning the colored `border-top` into a spinner.
