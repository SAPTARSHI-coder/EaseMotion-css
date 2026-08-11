# Pure CSS Rotate-Click Tooltip

## Description
A polished, pure CSS tooltip component featuring a dynamic **Rotate-Click** interaction. Designed specifically for **Interactive Interface** aesthetics, it requires absolutely **zero JavaScript**. State management is handled entirely by the HTML Checkbox Hack (`<input type="checkbox">` paired with `<label>`). The tooltip cleanly toggles open when clicked, rotating the trigger icon and smoothly scaling in the information box. It is fully responsive, accessible, and intelligently switches between light and dark modes based on system preferences.

## Customization via CSS Properties

The animation physics, colors, and layout can be finely tuned by overriding the following CSS variables inside the `:root` scope or on the `.tooltip-wrapper` container:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--tooltip-transition-duration` | `0.4s` | The speed of the icon rotation and tooltip scale-in. |
| `--tooltip-transition-timing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | A slightly bouncy easing curve for a tactile feel. |
| `--tooltip-rotation` | `135deg` | The degrees the trigger icon rotates when clicked (creates an 'X' out of a plus or generic icon). |
| `--tooltip-bg-color` | `#1e293b` | The background color of the tooltip box and its directional arrow. |
| `--tooltip-offset-y` | `12px` | The vertical spacing between the trigger button and the tooltip box. |

## Usage Guide

To implement this tooltip in your project:
1. Ensure the trigger button is a `<label>` element with a `for="tooltip-trigger"` attribute.
2. Place the hidden `<input type="checkbox" id="tooltip-trigger">` directly preceding the trigger `<label>`.
3. Keep `.tooltip-content-box` as a sibling immediately following the trigger button, so the CSS `~` selector can target it.
4. An invisible `.tooltip-backdrop` `<label>` is placed globally at the bottom of the body. We utilize modern CSS (`body:has(.tooltip-trigger-input:checked)`) to activate this backdrop, allowing users to click anywhere outside the tooltip to close it natively.

*See `demo.html` for the complete, accessible markup structure.*

## Accessibility
Despite being purely CSS driven, semantic accessibility is maintained:
- `aria-haspopup="true"` and `aria-expanded` attributes communicate the button's intent to screen readers.
- `role="tooltip"` is applied to the content box.
- `tabindex="0"` and inline `onkeydown` handlers are attached to the `<label>` elements so users navigating via keyboard (Tab key) can toggle the tooltip by pressing Space or Enter, identically to a standard `<button>`.
