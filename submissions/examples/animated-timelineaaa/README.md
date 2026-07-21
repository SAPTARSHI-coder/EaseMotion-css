# Animated Timeline / Step Progress Example

This is a self-contained example demonstrating how to create a beautiful, animated timeline component using pure CSS, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎬 **Animated Connecting Line:** Vertical line draws from top to bottom on page load.
- ✓ **Completed Steps:** Green markers with checkmark animations and success styling.
- ⚡ **Active Step:** Pulsing blue marker with animated progress bar and shimmer effect.
- 🔜 **Upcoming Steps:** Muted gray markers with step numbers.
- 🏷️ **Color-Coded Tags:** Multiple tag variants for categorization.
- 🎨 **Hover Effects:** Cards subtly translate on hover for interactivity.
- ♿ **Fully Accessible:** Respects `prefers-reduced-motion` for users who prefer less animation.
- 📱 **Responsive:** Adapts to mobile screens with adjusted spacing.
- 🚫 **Zero JavaScript:** Entirely built with HTML and CSS.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the timeline HTML structure and customize the steps, dates, and content.
4. Use the modifier classes (`timeline-item--completed`, `timeline-item--active`, `timeline-item--upcoming`) to set the state of each step.

## Customization
- **Colors:** Update the gradient colors in `.timeline::before` to match your progress.
- **Progress Percentage:** Change the `width` value in `.timeline-progress__bar` inline style.
- **Animation Speed:** Adjust the duration values in `@keyframes` (e.g., `1.5s`, `2s`).
- **Marker Size:** Modify the `width` and `height` of `.timeline-marker__inner`.

## Techniques Used
- **CSS Gradients:** Linear gradients for the connecting line and progress bars.
- **CSS Animations:** Multiple `@keyframes` for line drawing, marker popping, checkmark drawing, and shimmer effects.
- **Transform Origins:** `scaleY` animation with `transform-origin: top` for line drawing effect.
- **Backdrop Filter:** Glassmorphism effect on content cards.
- **Pseudo-elements:** `::before` and `::after` for decorative elements and shimmer effects.