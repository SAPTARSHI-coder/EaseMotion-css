# Input with Floating Label

A form input pattern where the label starts inside the field as a placeholder and floats up to the top border when the user focuses or fills in the field. Includes an email input, a text input, and a textarea. The floating label animates smoothly and changes color on focus.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. Click or type in each field to see the label float up.

## Accessibility notes

Uses standard `<label>` elements linked via `for` attribute for screen reader compatibility. The placeholder is a visible label element, not the native `placeholder` attribute. Reduced motion disables the transition.
