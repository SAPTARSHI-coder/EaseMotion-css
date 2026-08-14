# Pure CSS E-Commerce 3D Perspective Tilt Modal

## Description
A premium, highly fluid pure CSS modal featuring a breathtaking **3D Perspective Tilt** entrance animation. Designed explicitly to complement modern **E-Commerce Checkout** aesthetics, it requires absolutely **zero JavaScript** to manage state or animations. State management is handled completely by the robust HTML Checkbox Hack (`<input type="checkbox">` paired with `<label>`). When triggered, the modal flips inward from a 3D perspective angle, giving a deep sense of spatial awareness to the checkout flow. It is fully responsive, keyboard accessible, and intelligently switches between a crisp light mode (default) and dark mode based on system preferences.

## Customization via CSS Properties

The 3D tilt angles, perspective depth, and timing physics can be easily fine-tuned by overriding the following CSS variables inside the `:root` scope or on the `.tilt-card` container:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--modal-transition-duration` | `0.6s` | The speed of the 3D tilt and scaling animation. |
| `--modal-transition-timing` | `cubic-bezier(0.175, 0.885, 0.32, 1.15)` | A slight overshoot easing curve to give the tilt a physical, tactile snap. |
| `--modal-tilt-angle` | `25deg` | The starting rotation angle (on the X-axis) when the modal is hidden. |
| `--modal-perspective` | `1200px` | The 3D depth of the overlay container. A smaller value creates a more extreme distortion. |
| `--primary-color` | `#000000` | The primary brand color used for the main call-to-action checkout buttons. |

## Usage Guide

To implement this modal in your project:
1. Ensure your primary trigger button is a `<label>` element with a `for="checkout-tilt-trigger"` attribute.
2. Place the hidden `<input type="checkbox" id="checkout-tilt-trigger">` directly preceding the `.modal-overlay` wrapper in the DOM.
3. **CRITICAL:** The `.modal-overlay` container *must* have `perspective: var(--modal-perspective);` applied to establish the 3D rendering space. 
4. The `.tilt-card` inner element utilizes `transform-style: preserve-3d;` and animates its `transform: rotateX(...)` property based on the checked state of the input.
5. Wrap the entire checkout cart UI inside the `.modal-body`.
6. Use a `<label class="modal-close-backdrop" for="checkout-tilt-trigger">` as the first child of the overlay to allow users to click anywhere outside the modal to safely close it.

*See `demo.html` for the complete, accessible markup structure.*

## Accessibility
Despite being purely CSS driven, semantic accessibility is meticulously maintained:
- The hidden checkbox allows robust semantic linking via `<label>` tags.
- `aria-modal="true"`, `role="dialog"`, `aria-labelledby`, and `aria-describedby` are included in the markup template to properly announce the modal context to screen readers.
- `tabindex="0"` and inline `onkeydown` handlers are provided on the `<label>` trigger and close buttons to ensure keyboard navigation (Tab, Enter, Space) functions identically to native `<button>` elements.
