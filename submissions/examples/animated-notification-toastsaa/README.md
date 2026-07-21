# Animated Notification Toasts Example

This is a self-contained example demonstrating how to create modern, animated notification toasts using pure CSS with minimal JavaScript for triggering, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎬 **Smooth Slide-In Animation:** Toasts slide in from the right with a smooth cubic-bezier easing.
- ✓ **Icon Pop Animation:** Icons animate with a scale pop effect when the toast appears.
- 📊 **Auto-Dismiss Progress Bar:** Visual countdown bar shows when the toast will auto-dismiss.
- 🎨 **4 Variants:** Success (green), Error (red), Warning (yellow), and Info (blue) with distinct colors and icons.
- ✕ **Close Button:** Manual dismiss with hover effects.
- ♿ **Fully Accessible:** Uses `aria-live="polite"` for screen readers and respects `prefers-reduced-motion`.
- 📱 **Responsive:** Adapts to mobile screens with full-width toasts.
- ⚡ **EaseMotion Integration:** Uses utility classes for layout, spacing, typography, and button animations.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Add the toast HTML structure to your page.
4. Use minimal JavaScript to toggle the `.toast--visible` class when needed.
5. Toasts auto-dismiss after 5 seconds (configurable in JS).

## Customization
- **Duration:** Change the `5000` value in the JavaScript `setTimeout` and the `5s` in the CSS `@keyframes progress-shrink`.
- **Position:** Modify the `.toast-container` position properties (currently `top: 2rem; right: 2rem`).
- **Colors:** Update the border-left and icon background colors for each variant.
- **Animation Speed:** Adjust the `0.4s` transition duration in the `.toast` class.

## Techniques Used
- **CSS Transforms:** `translateX` for smooth slide-in/out animations.
- **CSS Animations:** `@keyframes` for icon pop and progress bar shrink.
- **Cubic Bezier Easing:** Custom easing functions for natural motion.
- **CSS Variables:** Could be extended to use CSS custom properties for theming.
- **Accessibility:** `aria-live` regions for dynamic content announcements.