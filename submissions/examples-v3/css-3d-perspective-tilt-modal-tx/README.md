# Pure CSS 3D Perspective Tilt Modal

## Description
A premium, highly fluid pure CSS modal featuring a breathtaking **3D Perspective Tilt** entrance animation. Designed explicitly to complement modern **Glassmorphism UI** aesthetics, it requires absolutely **zero JavaScript** to manage state or animations. State management is handled completely by the robust HTML Checkbox Hack (`<input type="checkbox">` paired with `<label>`). When triggered, the modal flips inward from a 3D perspective angle, giving a deep sense of spatial awareness. It is fully responsive, keyboard accessible, and intelligently switches between a gorgeous dark (default) glass mode and a crisp light glass mode based on system preferences.

## Customization via CSS Properties

The 3D tilt angles, perspective depth, and glass aesthetics can be easily fine-tuned by overriding the following CSS variables inside the `:root` scope or on the `.modal-card` container:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--modal-transition-duration` | `0.6s` | The speed of the 3D tilt and scaling animation. |
| `--modal-transition-timing` | `cubic-bezier(0.175, 0.885, 0.32, 1.15)` | A slight overshoot easing curve to give the tilt a physical, tactile snap. |
| `--modal-tilt-angle` | `30deg` | The starting rotation angle (on the X-axis) when the modal is hidden. |
| `--modal-perspective` | `1200px` | The 3D depth of the overlay container. A smaller value creates a more extreme distortion. |
| `--glass-blur` | `16px` | The intensity of the `backdrop-filter: blur()` applied to the panels. |

## Usage Guide

To implement this modal in your project:
1. Ensure your primary trigger button is a `<label>` element with a `for="glass-modal-trigger"` attribute.
2. Place the hidden `<input type="checkbox" id="glass-modal-trigger">` directly preceding the `.modal-overlay` wrapper in the DOM.
3. **CRITICAL:** The `.modal-overlay` container *must* have `perspective: var(--modal-perspective);` applied to establish the 3D space. 
4. The `.tilt-card` inner element utilizes `transform-style: preserve-3d;` and animates its `transform: rotateX(...)` property based on the checked state of the input.
5. Use a `<label class="modal-close-backdrop" for="glass-modal-trigger">` as the first child of the overlay to allow users to click anywhere outside the modal to safely close it.

*See `demo.html` for the complete, accessible markup structure.*

## Accessibility
Despite being purely CSS driven, semantic accessibility is meticulously maintained:
- The hidden checkbox allows robust semantic linking via `<label>` tags.
- `aria-modal="true"`, `role="dialog"`, `aria-labelledby`, and `aria-describedby` are included in the markup template to properly announce the modal context to screen readers.
- `tabindex="0"` and inline `onkeydown` handlers are provided on the `<label>` trigger and close buttons to ensure keyboard navigation (Tab, Enter, Space) functions identically to native `<button>` elements.
