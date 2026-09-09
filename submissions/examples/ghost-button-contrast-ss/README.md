# Ghost Button Contrast Fix

## What does it do?

This example demonstrates an improved Ghost button with better contrast on dark backgrounds.

The current `.ease-btn-ghost` styling uses a dark text color and a transparent border. On dark surfaces, this makes the button difficult to distinguish from its background.

The fixed version adds a visible border, uses a light text color, and provides a subtle hover state.

## How is it used?

The fixed styling can be applied to a Ghost button while preserving its transparent appearance:

```html
<button class="ghost-button fixed" type="button">
  Ghost Button
</button>

The button remains transparent in its default state and receives a subtle background and border change on hover.

Keyboard users also receive a visible focus indicator through `:focus-visible`.

## Why is it useful?

Ghost buttons rely heavily on contrast because their background is transparent. Insufficient contrast can make the button difficult to discover and interact with, particularly on dark surfaces.

This example improves:

- Button visibility
- Text readability
- Hover feedback
- Keyboard focus visibility
- Dark-background usability

## Files

- `demo.html` — Before-and-after demonstration
- `style.css` — Ghost button styling and responsive layout
- `README.md` — Explanation and usage

## Related Issue

This submission addresses issue #89063: Ghost button is not visible properly.