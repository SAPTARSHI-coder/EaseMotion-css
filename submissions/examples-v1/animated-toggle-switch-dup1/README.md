# Animated Toggle Switch

An iOS-style toggle switch built on a native checkbox for accessibility, styled entirely with CSS.

## Usage
Wrap a checkbox input inside `.toggle-switch > .toggle-track > .toggle-thumb`. The `:checked` state drives the track color and thumb position via CSS sibling selectors.

## Accessibility
Uses a real `<input type="checkbox">` under the hood, so it's keyboard-navigable and screen-reader friendly. Includes a `:focus-visible` outline for keyboard users.

## Browser support
Works in all modern browsers — uses `transform`, `transition`, and the `~` sibling selector.

## Notes
No JavaScript required.