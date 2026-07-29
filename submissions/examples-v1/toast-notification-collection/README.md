# ease-toast-notification-collection

A collection of animated toast notifications (success, error, warning, info) with slide-in entry, auto-reflow stacking, hover-to-pause countdown progress bars, and manual dismiss. Pure CSS animations with a minimal JS trigger for spawning/removing toasts.

## Features

- Slide-in-from-right entry animation
- Auto-reflow: remaining toasts smoothly shift up when one is dismissed
- Countdown progress bar per toast (pauses on hover, resumes on mouse leave)
- Icon + color-coded left border per toast type
- Manual close button
- Fully responsive (stacks edge-to-edge on small screens)

## Usage

1. Link `style.css` in your HTML `<head>`.
2. Add an empty `<div class="ease-toast-container" id="toastContainer"></div>` where toasts should render.
3. Use the `showToast(type)` JS function from `demo.html`, where `type` is `'success'`, `'error'`, `'warning'`, or `'info'`.

```html
<div class="ease-toast-container" id="toastContainer"></div>
<script>
  showToast('success');
</script>