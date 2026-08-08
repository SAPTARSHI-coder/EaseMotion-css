# Pure CSS Draw-Border Modal

## Description
A highly polished, pure CSS modal featuring an elegant, sequential "Draw-Border" animation. Tailored specifically for **Modern SaaS** interface aesthetics, it requires absolutely **zero JavaScript** to function. State management is handled entirely by the HTML Checkbox Hack (`<input type="checkbox">` paired with `<label>`). When triggered, the modal smoothly scales in while an animated border traces the perimeter of the card sequentially. It is fully responsive, keyboard accessible, and seamlessly adapts to Dark Mode using system preferences.

## Customization via CSS Properties

The animation physics, colors, and border logic can be easily fine-tuned by overriding the following CSS variables inside the `:root` scope or on the `.modal-card` container:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--modal-transition-duration` | `0.3s` | The speed at which the modal scales and fades in. |
| `--modal-draw-duration` | `0.5s` | The total duration it takes for the border to trace around all 4 sides. |
| `--modal-transition-timing` | `ease-out` | The easing curve for the modal scale-in. |
| `--modal-border-active` | `#6366f1` | The accent color (Indigo) used for the drawing border line. |
| `--modal-line-thickness` | `2px` | The thickness of the animated border line. |

## Usage Guide

To implement this modal in your project:
1. Ensure your trigger button is a `<label>` element with a `for="modal-trigger"` attribute.
2. Place the hidden `<input type="checkbox" id="modal-trigger">` before the `.modal-overlay`.
3. Wrap your modal's inner content in `.modal-content-inner` inside `.modal-card`. 
4. The four `.draw-line` divs must be placed as direct children of `.modal-card`. They use CSS `transition-delay` calculations to sequentially animate the `width` and `height` properties in a perfect clockwise circuit upon the checkbox being checked.
5. Use the standard `.saas-primary-btn` and `.saas-secondary-btn` utility classes to style the buttons.

*See `demo.html` for the complete, robust markup structure.*

## Accessibility
Despite being purely CSS driven, semantic accessibility is maintained:
- The hidden checkbox allows semantic linking via `<label>`.
- `aria-modal="true"`, `role="dialog"`, `aria-labelledby`, and `aria-describedby` are included in the markup template to communicate the modal context.
- `tabindex="0"` and inline `onkeydown` handlers are provided on the `<label>` tags in the demo to ensure keyboard navigation (Tab, Enter, Space) functions identically to standard `<button>` elements.
