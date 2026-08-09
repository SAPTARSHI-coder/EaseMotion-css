# Animated Toast Notifications Submission

## 1. What does this do?
It provides a modern, animated toast notification system with 4 toast types (success, error, warning, info), 6 position options, auto-dismiss with progress bar, and smooth entrance/exit animations. Perfect for user feedback in modern web applications.

## 2. How is it used?
Call `showToast(type)` with 'success', 'error', 'warning', or 'info' to display a toast. Use `showToastAt(position)` to specify position ('top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'). Toasts auto-dismiss after 5 seconds with a visual progress bar, or can be closed manually.

## 3. Why is it useful?
- Essential component for user feedback in modern web apps
- 4 toast types with distinct colors and icons
- 6 position options for flexible placement
- Smooth slide-in/slide-out animations
- Auto-dismiss with visual progress bar
- Manual close button with rotation animation
- Stack management for multiple toasts
- Keyboard accessible (Escape to close all)
- Fully responsive design
- Accessible with ARIA labels and `prefers-reduced-motion` support
- Easy to customize colors, durations, and content
- Maintainer can easily standardize this as `.ease-toast-[YOUR_INITIALS]` in the core library.