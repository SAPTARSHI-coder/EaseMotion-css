# Pure CSS Spring Physics Modal

## Description
A highly polished, pure CSS modal featuring a delightful **Spring Physics** entrance animation. Tailored specifically for **E-Commerce Checkout** interface aesthetics, it requires absolutely **zero JavaScript** to function. State management is handled entirely by the robust HTML Checkbox Hack (`<input type="checkbox">` paired with `<label>`). When triggered, the modal bounces in using a custom cubic-bezier curve that simulates real-world spring tension. It is fully responsive, keyboard accessible, and seamlessly adapts to Dark Mode using system preferences.

## Customization via CSS Properties

The spring physics, timing, and aesthetics can be easily fine-tuned by overriding the following CSS variables inside the `:root` scope or on the `.modal-card` container:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--modal-transition-duration` | `0.6s` | The total duration of the spring entrance animation. |
| `--modal-spring-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | The mathematical curve that simulates the overshoot and settling of a physical spring. |
| `--modal-overlay-bg` | `rgba(15, 23, 42, 0.6)` | The color and opacity of the background overlay (which also applies a backdrop blur). |
| `--primary-color` | `#000000` | The primary brand color used for the main call-to-action checkout buttons. |

## Usage Guide

To implement this modal in your project:
1. Ensure your primary trigger button is a `<label>` element with a `for="checkout-trigger"` attribute.
2. Place the hidden `<input type="checkbox" id="checkout-trigger">` before the `.modal-overlay` wrapper in the DOM.
3. The `.modal-card` element handles the actual spring animation logic. We initially set `transform: translateY(40px) scale(0.85);` to ensure the modal pops upward and outward when opened, maximizing the bouncy feel of the cubic-bezier curve.
4. Wrap the entire checkout modal UI inside the `.modal-overlay` container.
5. Use a `<label class="modal-close-backdrop" for="checkout-trigger">` as the first child of the overlay to allow users to click anywhere outside the modal to close it.

*See `demo.html` for the complete, accessible markup structure.*

## Accessibility
Despite being purely CSS driven, semantic accessibility is meticulously maintained:
- The hidden checkbox allows semantic linking via `<label>` tags.
- `aria-modal="true"`, `role="dialog"`, `aria-labelledby`, and `aria-describedby` are included in the markup template to communicate the modal context to screen readers.
- `tabindex="0"` and inline `onkeydown` handlers are provided on the `<label>` trigger and close buttons in the demo to ensure keyboard navigation (Tab, Enter, Space) functions identically to standard `<button>` elements.
