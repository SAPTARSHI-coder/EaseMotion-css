# Bouncing Spring Rating
A dependency-free CSS rating component with a playful bouncing spring animation when a rating is selected.

## Features
* Pure HTML and vanilla CSS.
* Accessible radio-button rating control.
* Bouncing spring feedback animation.
* Keyboard accessible.
* Dark-mode compatible.
* Hardware-friendly `transform` animation.
* Responsive layout.
* `prefers-reduced-motion` support.
* No JavaScript or external dependencies.

## Usage
The component uses native radio inputs paired with labels:
```html
<input id="rating-5" name="rating" type="radio" value="5">
<label for="rating-5" aria-label="5 out of 5 stars">★</label>
```
The checked state triggers the spring animation:
```css
.rating input:checked + label {
  animation: em-rating-bounce var(--em-duration) var(--em-ease-spring);
}
```

## Customization
The spring timing can be customized through the EaseMotion variables:
```css
:root {
  --em-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --em-duration: 420ms;
}
```
The star color, background, glow, radius, and other visual properties are also exposed as custom properties.

## Accessibility
The rating uses native radio buttons, making the control keyboard accessible and providing a clear semantic relationship between each rating and its label.
Visible focus styling is provided with `:focus-visible`.
When `prefers-reduced-motion: reduce` is enabled, the spring animation is disabled while the rating remains fully usable.

## Browser Support
Uses standard CSS features supported by modern browsers.
No JavaScript or external libraries are required.
