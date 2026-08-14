# Ease Ripple

A lightweight, pure CSS, JavaScript-free utility class for Material-style click ripples. Built for Issue #79582.

## Description
The `ease-ripple` utility provides a beautiful, expandable click effect that can be applied to buttons, links, cards, or any interactive element. It strictly uses CSS `:active` states and `@keyframes` animations to achieve the effect without requiring a single line of JavaScript.

## Features
- **CSS-only:** No JavaScript required.
- **`::after` pseudo-element:** The ripple is self-contained and doesn't clutter your HTML structure.
- **`:active` triggered:** The animation runs naturally when the user clicks or presses the element.
- **Custom ripple color:** Inherits `currentColor` by default, but can be easily overridden.
- **Custom duration:** Control the animation speed.
- **Responsive:** Scales perfectly on all devices.
- **Reduced-motion support:** Respects system accessibility preferences by gracefully disabling the animation.

## Basic Usage
Add the `ease-ripple` class to any interactive element. 

```html
<button type="button" class="ease-ripple">Click Me</button>
```
*Note: The utility works best on elements that have a defined shape and padding.*

## Customization

The utility is powered by two CSS custom properties:
- `--ease-ripple-color`: Sets the background color of the ripple (defaults to `currentColor`).
- `--ease-ripple-duration`: Sets how long the ripple animation lasts (defaults to `0.5s`).

### Example
```html
<button class="ease-ripple" style="--ease-ripple-color: rgba(255, 0, 255, 0.4); --ease-ripple-duration: 0.8s;">
    Slow Magenta Ripple
</button>
```

## Supported Elements
This utility can be applied to various structural and interactive elements, such as:
- `<button>`
- `<a>` (links)
- `<li>` (list items)
- `<div role="button">` (interactive cards)

*Requirement: The element will be forced to `position: relative` and `overflow: hidden` by the utility to contain the ripple.*

## Accessibility
- **Keyboard focus:** The utility explicitly preserves standard focus behavior and does not interfere with `:focus-visible` styling.
- **Decorative:** The ripple uses `pointer-events: none` so it never blocks clicks or interactions with the content.
- **Contrast:** Since the ripple has low opacity and fades out, it does not interfere with the contrast ratio of the text.

## Reduced Motion
When a user enables `prefers-reduced-motion` in their OS settings, the ripple animation is safely disabled. The element will fallback to a subtle brightness shift on `:active` to ensure interactive feedback is preserved without triggering animations.

## Browser Usage
This is a zero-dependency component. No external libraries, no NPM packages, and no JavaScript is required. Just drop `style.css` into your project and you are ready to go!
