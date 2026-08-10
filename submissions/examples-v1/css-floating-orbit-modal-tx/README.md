# Pure CSS Floating Orbit Modal

## Description
A highly sophisticated, pure CSS modal featuring a continuous **Floating Orbit** animation at its crest. Designed specifically to complement **Dashboard Analytics** and data-heavy interface aesthetics, it operates with absolutely **zero JavaScript**. State management is handled completely by the HTML Checkbox Hack (`<input type="checkbox">` paired with `<label>`). When opened, the modal triggers the CSS `@keyframes` logic that spins dual orbital satellites around a central icon, providing a mesmerizing, low-overhead loading or decorative effect. It is fully responsive, keyboard accessible, and intelligently switches between dark (default) and light modes based on system preferences.

## Customization via CSS Properties

The orbital speeds, colors, and modal transitions can be easily fine-tuned by overriding the following CSS variables inside the `:root` scope or on the `.modal-card` container:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--modal-transition-duration` | `0.4s` | The speed at which the modal scales and fades in. |
| `--orbit-primary-color` | `#38bdf8` | The glowing accent color (Sky Blue) of the primary satellite and icon. |
| `--orbit-secondary-color` | `#818cf8` | The glowing accent color (Indigo) of the secondary satellite. |
| `--orbit-speed-inner` | `4s` | The time it takes for the inner satellite to complete one 360-degree orbit. |
| `--orbit-speed-outer` | `7s` | The time it takes for the outer satellite to complete one full reverse orbit. |

## Usage Guide

To implement this modal in your project:
1. Ensure your primary trigger button is a `<label>` element with a `for="analytics-modal-trigger"` attribute.
2. Place the hidden `<input type="checkbox" id="analytics-modal-trigger">` directly preceding the `.modal-overlay` wrapper in the DOM.
3. The `.orbit-container` houses the decorative rings and satellites. We use CSS descendant selectors linked to the checked state (`.modal-trigger-input:checked ~ .modal-overlay .ring-1`) to activate the `@keyframes` spin *only* when the modal is visible. This saves CPU/GPU cycles when the modal is closed.
4. Wrap the entire detailed analytics UI inside the `.modal-content-inner`.
5. Use a `<label class="modal-close-backdrop" for="analytics-modal-trigger">` as the first child of the overlay to allow users to click anywhere outside the modal to close it.

*See `demo.html` for the complete, accessible markup structure.*

## Accessibility
Despite being purely CSS driven, semantic accessibility is meticulously maintained:
- The hidden checkbox allows robust semantic linking via `<label>` tags.
- `aria-modal="true"`, `role="dialog"`, `aria-labelledby`, and `aria-describedby` are included in the markup template to properly announce the modal context to screen readers.
- `tabindex="0"` and inline `onkeydown` handlers are provided on the `<label>` trigger and close buttons to ensure keyboard navigation (Tab, Enter, Space) functions identically to standard `<button>` elements.
