# Animated Toast Notifications (`ease-toast-notification`)

## Overview
This submission introduces smooth, animated toast notifications with auto-dismiss functionality. Toasts are essential for modern UIs to provide feedback for user actions (success messages, error alerts, warnings, and informational messages).

## Features
- **Smooth Slide-in Animation**: Uses a custom cubic-bezier curve for a natural, polished entrance from the right side of the screen.
- **Multiple Variants**: Includes success, error, warning, and info variants with distinct color coding and icons.
- **Auto-dismiss**: Toasts automatically disappear after 4 seconds, with a smooth exit animation.
- **Manual Dismiss**: Includes a close button for users who want to dismiss the toast immediately.
- **Fully Accessible**: Uses `aria-live="polite"` and `role="alert"` for screen reader announcements, and includes proper focus management.
- **Theming Ready**: Leverages `--ease-color-*` CSS variables for seamless integration with the core design token system.
- **Reduced Motion Support**: Gracefully disables animations for users with `prefers-reduced-motion` enabled.
- **Mobile Responsive**: Adapts to smaller screens with full-width toasts on mobile devices.

## Files Included
- `demo.html`: Interactive showcase with buttons to trigger different toast types.
- `style.css`: Clean, production-ready CSS with smooth animations.

## How to Test
1. Ensure you are in the `submissions/examples/ease-toast-notification-<your-initials>` directory.
2. Open `demo.html` in any modern web browser.
3. Click the buttons to trigger different toast types and observe the smooth slide-in animations.
4. Wait 4 seconds to see the auto-dismiss behavior, or click the × button to dismiss manually.

## Notes for Maintainer
- The animation uses `translateX` for GPU-accelerated performance.
- Ready to be refactored into standard `ease-*` utility classes and integrated into a future `components/toast.css` or `components/notifications.css` file.
- Follows all temporary contribution guidelines (self-contained in `submissions/examples/` with a unique identifier suffix).