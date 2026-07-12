# Pure CSS 3D Flip Modal

## Description
A beautifully animated, pure CSS modal utilizing a 3D flip (`rotateX`) interaction. It requires absolutely **zero JavaScript overhead** by creatively leveraging the HTML Checkbox Hack (`<input type="checkbox">` paired with `<label>`). Styled with modern "Interactive Interface" aesthetics, this modal is fully responsive, keyboard accessible (Space/Enter to trigger), and automatically adapts to Dark Mode using standard media queries.

## Customization via CSS Properties

The 3D flip animation and modal appearance can be easily customized by overriding the following CSS variables inside the `:root` scope or on the `.modal-perspective-wrapper` container:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--modal-transition-duration` | `0.6s` | The time it takes for the modal to flip open and fade in. |
| `--modal-transition-timing` | `cubic-bezier(0.23, 1, 0.32, 1)` | A smooth, native-feeling easing curve for the 3D transform. |
| `--modal-perspective` | `1200px` | The 3D depth of the flip effect. Lower values create a more exaggerated 3D effect. |
| `--modal-rotate-start` | `rotateX(70deg) scale(0.9)` | The starting transform state of the hidden modal. |
| `--modal-rotate-end` | `rotateX(0deg) scale(1)` | The final transform state when the modal is fully open. |

## Usage Guide

To implement this modal in your project:
1. Ensure your trigger button is a `<label>` element with a `for="modal-trigger"` attribute.
2. Place the hidden `<input type="checkbox" id="modal-trigger">` before the `.modal-overlay`.
3. Wrap your modal card inside `.modal-perspective-wrapper` to enable the 3D effect.
4. Use standard EaseMotion classes like `ease-hover-lift` on the buttons to enhance micro-interactions.

*See `demo.html` for the complete markup structure.*

## Accessibility
Despite being pure CSS, accessibility is maintained:
- The hidden checkbox allows semantic linking.
- `aria-modal="true"`, `role="dialog"`, `aria-labelledby`, and `aria-describedby` are included in the markup template.
- Inline `onkeydown` handlers are provided on the `<label>` tags in the demo to ensure keyboard navigation (Tab, Enter, Space) functions identically to standard buttons.
