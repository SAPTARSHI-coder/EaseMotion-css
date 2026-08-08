# Full-page Modal Dialog

A centered modal dialog with backdrop overlay. The modal opens with a subtle scale-up and slide-up animation. Includes a header with close button, body text, and a footer with action buttons. Clicking the backdrop, close button, or Cancel button dismisses the modal.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. Click "Open Modal" to display the modal. Dismiss it via the close button, Cancel, or backdrop click.

## Accessibility notes

The modal uses `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` for screen reader support. Reduced motion disables the scale/opacity transitions.
