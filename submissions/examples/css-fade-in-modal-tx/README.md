# Pure CSS Fade-In Modal

## Description
A highly polished, pure CSS modal utilizing a smooth Fade-In and subtle scaling interaction. Designed specifically for **Responsive Dashboard** environments, it requires absolutely **zero JavaScript overhead** by creatively leveraging the HTML Checkbox Hack (`<input type="checkbox">` paired with `<label>`). The modal is fully responsive, keyboard accessible (Space/Enter to trigger), and seamlessly adapts to Dark Mode using standard media queries.

## Customization via CSS Properties

The fade and scale animation, along with the modal's appearance, can be customized by overriding the following CSS variables inside the `:root` scope or on the `.modal-card` container:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--modal-transition-duration` | `0.3s` | The time it takes for the modal to fade in and scale up. |
| `--modal-transition-timing` | `cubic-bezier(0.16, 1, 0.3, 1)` | A snappy, dashboard-appropriate easing curve for the transform. |
| `--modal-scale-start` | `scale(0.95)` | The starting scale state of the hidden modal (creates a slight 'pop' effect). |
| `--modal-scale-end` | `scale(1)` | The final scale state when the modal is fully open. |
| `--modal-translate-start` | `translateY(10px)` | The starting vertical offset, giving it a subtle upward motion. |

## Usage Guide

To implement this modal in your project:
1. Ensure your trigger button is a `<label>` element with a `for="modal-trigger"` attribute.
2. Place the hidden `<input type="checkbox" id="modal-trigger">` before the `.modal-overlay`.
3. Keep the `.modal-card` inside the `.modal-overlay` wrapper to manage the unified fade/scale effect.
4. Use standard EaseMotion classes like `ease-hover-lift` on the dashboard buttons and form inputs to enhance micro-interactions.

*See `demo.html` for the complete, dashboard-contextualized markup structure.*

## Accessibility
Despite relying purely on CSS for state management, accessibility is strictly maintained:
- The hidden checkbox allows semantic linking.
- `aria-modal="true"`, `role="dialog"`, `aria-labelledby`, and `aria-describedby` are included in the markup template.
- Inline `onkeydown` handlers are provided on the `<label>` tags in the demo to ensure keyboard navigation (Tab, Enter, Space) functions identically to standard `<button>` elements.
