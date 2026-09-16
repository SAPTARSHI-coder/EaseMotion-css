# Fade Toast Example

## Description
A standard HTML/CSS/JS example demonstrating a "Fade" entrance and exit animation for toast notifications. The toast smoothly fades in while moving up slightly, and then fades out downwards, providing an elegant and subtle way to deliver messages.

## Files
- `demo.html`: Trigger button and an `aria-live` region for injecting the toast dynamically via JavaScript.
- `style.css`: Uses keyframes animating `opacity` and a slight `translateY` offset to create the fade-in/out motions.

## Accessibility
- Uses `aria-live="polite"` and `aria-atomic="true"` on the container so screen readers read the notification without interrupting the user.
- The toast element itself is given `role="status"`.
- **Reduced Motion**: Disables the vertical movement (`translateY`), leaving only a simple opacity fade.
