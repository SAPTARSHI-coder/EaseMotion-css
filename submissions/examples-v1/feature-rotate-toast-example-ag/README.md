# Rotate Toast Example (Standard)

## Description
A standard HTML/CSS toast notification designed as an "Attention Seeker". A few seconds after appearing, it performs a subtle shaking/rotating animation (similar to a ringing bell) to draw the user's eye to the notification.

## Files
- `demo.html`: Contains the toast markup and icon.
- `style.css`: Contains the toast styling and the `@keyframes toast-attention-rotate-ag` which rapidly shifts the element's rotation back and forth.

## Accessibility
- Uses `role="alert"` and `aria-live="assertive"` to ensure screen readers immediately announce this high-priority notification.
- **Reduced Motion**: Completely disables the rotational shaking motion. It falls back to a subtle color pulse on the toast's left border (`toast-attention-color-ag`) to safely draw attention without triggering vestibular issues.
