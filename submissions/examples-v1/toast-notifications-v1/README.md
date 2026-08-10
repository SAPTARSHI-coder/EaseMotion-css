# Toast Notifications (Snackbars)

A lightweight system for displaying animated, auto-disappearing toast notifications. Perfect for form submissions, error handling, and general application feedback.

## Files
- `ease-toast.js` - A tiny JavaScript utility (`easeToast.success()`, `easeToast.error()`) to dynamically spawn toasts.
- `style.css` - The CSS implementation defining the toast container, variants, and progress bar animations.
- `demo.html` - Interactive demonstration.

## Details
This feature adds a much-needed feedback mechanism to the EaseMotion framework. It utilizes EaseMotion's built-in CSS keyframes (like `ease-slide-in-right`) for the entry animation, and provides a custom `ease-toast-exit` keyframe for smooth removal. The progress bar at the bottom visually indicates how much time is left before the toast disappears.