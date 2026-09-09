# Ease Radio Button Fill

A clean, responsive custom radio button UI wrapper component featuring an elegant inner-node scaling transition and subtle card-background fill highlights upon selection.

## Features
- **Pure CSS Execution:** No complex interaction listeners or external helper scripts required.
- **Accessible Layout Foundation:** Built securely over native hidden input controls ensuring screen-readers and sequential tab-focus patterns are retained seamlessly.
- **Tokens/Variable Driven:** Centralized CSS custom property variables inside the root node allow complete adjustments over accent hues, sizes, container glows, and animation speed properties.

## Animation Mechanics
This module relies on the sibling selection indicator layout tree combinator rules (`~`). The visual inner radio circle node is prepared via a hidden pseudo-element placeholder (`::before` layer inside `.custom-radio`) transformed out of sight using `transform: scale(0)`.

When the native checkbox register changes via the browser engine layer:
```css
.radio-label input[type="radio"]:checked ~ .custom-radio::before {
    transform: scale(1);
}